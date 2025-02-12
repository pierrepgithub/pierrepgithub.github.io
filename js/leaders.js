
is_dashboard = 0;

donnees_defined = 0;

donnees = {};
donnees_new = {};
sessionnum = 0;
sessionid = 0;
type_session = "";
name_session = "";

nb_drivers = 0;

wait = 0;

leader_caridx = {};
leader_caridx_tstamp = {};

colors_by_num_class_leaders = {};
colors_by_num_class_leaders_str = JSON.stringify(colors_by_num_class_leaders);
colors_by_num_class_leaders_str_old = colors_by_num_class_leaders_str;
colors_by_num_class_leaders_recalculated = false;
colors_by_num_class_leaders_recalculated_old = false;
colors_by_num_class_leaders_initialized = false;


window.onload = function() {

    //window.onmousemove = display_select_menu_btn;
    //window.onclick = display_select_menu_btn;  // permet de faire apparaître le menu en tapant sur l'écran pour les tablettes

    init_ws();

}


// connections websocket avec le serveur Python
function init_ws() {
    ws_boucle = null;  // important pour éviter un message d'erreur dans config.js

    try {
        ws = new WebSocket("ws://" + localIP + ":" + PORT8001 + "/");
    } catch (error) {
        // on réessaie plus tard
        setTimeout(function () { init_ws(); },1000);
        return;
    }
    // Socket for the local communications
    ws.onmessage = function(d) {
        var datas = d.data;
        if (datas != "wait") {
            update_datas(datas);
            wait = 0;
        } else {
            wait = 1;
        }
    }
    ws.onclose = function() {
        setTimeout(function () { clearInterval(ws_boucle); init_ws(); },1000);
        ws.close();
    }
    window.onbeforeunload = function() {
        ws.onclose = function () {}; // disable onclose handler first
        ws.close()
    }
    ws.onopen = function () {
        ws.send("11");    // we want to collect the trackmap infos

        // We define the refresh rate for the datas
        fps_leaders = 1;  // 1 fois par seconde
        ws_boucle = setInterval(function () {
            if (wait == 0 && ws.readyState == ws.OPEN) {  // on ne fait plus le test ws.bufferedAmount == 0 car ça semble bugguer
                ws.send("12");
            }
        }, 1000 / fps_leaders);
    }

}


function update_drivers_list() {
    if (donnees.d != undefined) {

        var aff = "";
        for (var i in donnees.d) {
            if (i != donnees.me || donnees.me_is_spectator == 0) {
                // Couleur de la class du pilote
                var str = donnees.d[i].cc;
                var tmp_num = donnees.d[i].num;
                if (tmp_num in bg_by_num) {
                    str = "0x" + bg_by_num[tmp_num].slice(1);
                }
                if (donnees.d[i].classid in bg_by_classid_corr) {
                    str = "0x" + bg_by_classid_corr[donnees.d[i].classid].slice(1);
                }

                if (str != undefined) {
                    str = str.slice(2);
                    for (n = str.length; n < 6; n++) {
                        str = "0" + str
                    }
                }
                var coul = "#" + str;

                var font_coul = "#ffffff";
                var font_weight = "normal";

                var line_class = "driver_line";

                if (donnees.d[i].cpos == 1) {  // Pour n'afficher que le leader

                    if (donnees.d[i].classid != undefined) {
                        if (i != leader_caridx[donnees.d[i].classid]) {
                            //console.log("new leader for class", donnees.d[i].classid);
                            if (donnees.d[i].classid in leader_caridx_tstamp) {
                                leader_caridx_tstamp[donnees.d[i].classid] = Date.now();
                            } else {
                                // Pour pas que ça clignotte au premier chargement de la page
                                leader_caridx_tstamp[donnees.d[i].classid] = 0;
                            }
                            leader_caridx[donnees.d[i].classid] = i;
                            line_class = "driver_line_blink";
                        }

                        // On fait clignoter pendant 5 secondes les nouveaux leaders
                        if (donnees.d[i].classid in leader_caridx_tstamp && (Date.now() - leader_caridx_tstamp[donnees.d[i].classid]) < 5000) {
                            line_class = "driver_line_blink";
                        } else {
                            line_class = "driver_line";
                        }

                        aff += '<div id="caridx_' + i + '" class="' + line_class + '" style="font-weight: ' + font_weight + '; color: ' + font_coul + '">';
                        //aff += '<div id="caridx_' + i + '" style="font-weight: ' + font_weight + '; color: ' + font_coul + '">';
                        var classename = donnees.classname[donnees.d[i].classid];
                        //aff += '<div style="flex: 0 0 0.25rem; margin-left: 0.25rem; margin-right: 0.25rem; background-color: ' + coul + ';">&nbsp;' + classename + '&nbsp;</div>';
                        aff += '<div style="flex: 0 0 8rem; margin-left: 0.25rem; margin-right: 0.25rem; background-color: ' + coul + ';">&nbsp;' + classename + '&nbsp;</div>';
                        //aff += '<div style="text-align: right; flex: 0 0 1.5rem; margin-right: 0.25rem;">' + donnees.d[i].cpos + '.</div>';
                        aff += '<div style="text-align: center; flex: 0 0 2.25rem; margin-right: 0.25rem;">#' + donnees.d[i].num + '</div>';
                        //var name = reformat_name(donnees.d[i].name, donnees.d[i].tn, 0, i, 0, 0, 0, name_mode);
                        var name = "<b>" + donnees.d[i].tn + "</b>" + " (" + donnees.d[i].name + ")";
                        aff += '<div style="text-align: left; flex: 0 1 auto; margin-right: 0.25rem; overflow: hidden; text-overflow:clip; white-space:nowrap;">' + name + '</div>';
                        aff += '</div>';
                    }

                }
            }
        }
        set_inner_html("drivers_list", aff);  // c'est important de ne pas mettre à jour tout le temps en utilisant la fonction set_inner_html sinon on ne pourra pas cliquer


        // On envoie les nouveaux leaders de classe au serveur si ça a changé et si on utilise le fichier colors_by_num
        gestion_colors_by_num_class_leaders();


        // On ordonne maintenant par class position en groupant par classe
        /*for (var i in donnees.d) {
            if (i != donnees.me || donnees.me_is_spectator == 0) {
                if (document.getElementById("caridx_" + i) != null) {
                    if (donnees.styp == "Race") {
                        document.getElementById("caridx_" + i).style.order = donnees.d[i].cpos + donnees.d[i].classid * 100;
                    } else {
                        document.getElementById("caridx_" + i).style.order = donnees.d[i].cposbest + donnees.d[i].classid * 100;
                    }
                }
                //console.log(i, donnees.d[i].num, donnees.d[i].cpos)
            }
        }*/
    }
}


// Display the datas contained in text variable
function update_datas(text) {
    if (text != "") {
        if (text != -1) {
            text_header_ = text.split("??");
            text_header = text_header_[0];
        }
        else {
            text_header = ""
        }

        if (text != -1 && text_header != "-2" && text_header != "-3") {

            donnees_new = JSON.parse(text);

            decalage = (parseInt(Date.now() / 1000) - donnees_new.tstamp);

            if ((decalage > 60) || ((donnees_defined) && (donnees_new.styp == type_session) && (donnees_new.sname == name_session) && (donnees_new.sn == sessionnum) && (donnees_new.sid == sessionid))) {     // If we are still in the same session, we don't delete the old datas
                $.extend(true, donnees, donnees_new);     // Merge donnees_new into donnees, recursively

                change_classid(donnees);

                if (donnees_new.nb != undefined && donnees_new.nb != nb_drivers) { // Si le nombre de pilotes a changé il faudra coloriser les nouveaux pilotes
                    nb_drivers = donnees_new.nb;

                    // Pour être certain que le serveur recevra les infos du fichier colors_by_num.js
                    //colors_by_num_class_leaders_str = '{}';
                    //colors_by_num_class_leaders_str_old = '{}';
                }

            } else {

                console.log("New session, we are reloading init session data ...");

                // Pour être certain que le serveur recevra les infos du fichier colors_by_num.js
                //colors_by_num_class_leaders_str = '{}';
                //colors_by_num_class_leaders_str_old = '{}';

                sessionnum = donnees_new.sn;
                sessionid = donnees_new.sid;

                type_session = donnees_new.styp;
                name_session = donnees_new.sname;
                donnees = JSON.parse(text);

                donnees_defined = 1;
                ws.send("11");
            }

            if (donnees_new.nb != undefined) {
                nb_drivers = donnees_new.nb;
            }

			update_drivers_list();  // mise à jour pour les positions notamment

            //selected_idxjs = donnees.c;

        } else if (text_header == "-3") {
            trackname = "none";  // utile pour savoir qu'il faudra recharger la page si c'est la première fois qu'on charge un circuit
            trackconfig = "";
        }

    }
}

