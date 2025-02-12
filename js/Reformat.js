

function reformat_avg(n, i) {
    if (n == 1) {
        return "<div title ='[" + startlap_avg1_[i] + "-" + (startlap_avg1_[i] + avg1_nblaps_0 - 1) + "]'>" + reformat_laptime(laptime_avg1_[i]) + "</div>";
    } else if (n == 2) {
        return "<div title ='[" + startlap_avg2_[i] + "-" + (startlap_avg2_[i] + avg2_nblaps_0 - 1) + "]'>" + reformat_laptime(laptime_avg2_[i]) + "</div>";
    } else if (n == 3) {
        return "<div title ='[" + startlap_avg3_[i] + "-" + (startlap_avg3_[i] + avg3_nblaps_0 - 1) + "]'>" + reformat_laptime(laptime_avg3_[i]) + "</div>";
    } else {
        return "--"
    }
}


function compounds_name_color(car) {
    if (car == "Dallara IR18") {
        return [
            ["PRI", "white", "pirelli-white.png"],
            ["ALT", "red", "pirelli-red.png"],
        ];
    } else {
        if (car in car_rain_ready) {
            return [
                ["DRY", "red", "pirelli-red.png"],
                ["WET", "#0088ff", "pirelli-blue.png"],
            ];
        } else {
            return [
                ["SOFT", "red", "pirelli-red.png"],
                ["MED", "#ffdd00", "pirelli-yellow.png"],
                ["HARD", "white", "pirelli-white.png"]
            ];
        }
    }
}


function reformat_tires_stints(car, tires_stints, tires_stintcompounds, tires_stints_align, is_dashboard) {

    var str, h, tmp_border, tmp_col, tmp_text_col, tmp_txt, tmp_debug;

    if (is_dashboard == 0) {
        if (disp_param == 0) {
            reference_w_ = reference_w
        } else {
            reference_w_ = 2000
        }
        if (responsive) h = window_innerWidth / reference_w_ * ligne_h / dpi_factor_;
        else h = ligne_h / dpi_factor_;
        tmp_border = h / 10;
    }

    var compounds_name_color_ = compounds_name_color(car);

    /*if (i != selected_idxjs || selected_driver_mode == 0) {
        tmp_text_col = "white";
    } else {
        tmp_text_col = "black";
    }*/
    tmp_text_col = "white";

    // On compte combien de "pneus" à afficher pour les aligner à droite
    var nb_pneus = 0;
    for (var n=0; n < 3; n++) {
        if (tires_stints[n] != -1) {
            nb_pneus++;
        }
    }
    var tire_compound = 0;

    str = "";

    if (tires_stints_align == 1) {
        for (var n = 0; n < 3 - nb_pneus; n++) {
            if (is_dashboard == 0) {
                //str += "<div style='background-color: black; font-size: " + h * 0.5 + "px; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.67 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid #888888; border-right: " + tmp_border + "px solid " + tmp_col + "'></div> ";
                str += "<div style='background-color: black; font-size: " + 2 * 0.5 + "em; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.67 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid #888888; border-right: " + tmp_border + "px solid " + tmp_col + "'></div> ";
            } else {
                str += "<div style='background-color: black; font-size: " + 2 * 0.5 + "em; display: inline-block; line-height: 1.14em; width: 1em; margin-top: -0.18em; text-align: center; vertical-align: middle; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid #888888; border-right: 0.1em solid " + tmp_col + "'></div> ";
            }
        }
    }

	var font_coef;
    for (var n=0; n < nb_pneus; n++) {

        //tire_compound = donnees.d[i].tires_stintcompounds[n];
        tire_compound = tires_stintcompounds[n];
        if (0 <= tire_compound && tire_compound < compounds_name_color_.length) {
            tmp_col = compounds_name_color_[tire_compound][1];
        } else {
            tmp_col = "#888888";
        }

		font_coef = 0.6;
        if (tires_stints[n] != -1) {
			if (tires_stints[n] >= 10 && tires_stints[n] < 100) {
                font_coef = 0.42;
            } else if (tires_stints[n] >= 100) {
				font_coef = 0.31;
			}
            tmp_txt = tires_stints[n];
        } else {
            tmp_txt = "";
        }
		//font_coef = 0.31;  // debug
        //tmp_txt=988;  // debug
        //tmp_col = "white";  // debug
        tmp_debug = "";
        //tmp_debug = donnees.d[i].tires_stintstarts[n];
        if (is_dashboard == 0) {
            //str += tmp_debug + "<div style='background-color: black; font-size: " + h * font_coef + "px; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.67 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid " + tmp_col + "; border-right: " + tmp_border + "px solid " + tmp_col + "'>" + tmp_txt + "</div> ";
            str += tmp_debug + "<div style='background-color: black; font-size: " + 2 * font_coef + "em; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.67 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid " + tmp_col + "; border-right: " + tmp_border + "px solid " + tmp_col + "'>" + tmp_txt + "</div> ";
        } else {
            str += tmp_debug + "<div style='background-color: black; font-size: " + 2 * font_coef + "em; display: inline-block; line-height: " + 1.14/2/font_coef + "em; width: " + 1.07/2/font_coef*1.2 + "em; margin-top: -" + 0.18/2/font_coef + "em; text-align: center; vertical-align: middle; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + 0.1/2/font_coef + "em solid " + tmp_col + "; border-right: " + 0.1/2/font_coef + "em solid " + tmp_col + "'>" + tmp_txt + "</div> ";
        }
    }

    if (tires_stints_align == 3) {
        for (var n = 0; n < 3 - nb_pneus; n++) {
            //str += "<div style='background-color: black; font-size: " + h * 0.5 + "px; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.67 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid #888888; border-right: " + tmp_border + "px solid " + tmp_col + "'></div> ";
            str += "<div style='background-color: black; font-size: " + 2 * 0.5 + "em; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.67 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_text_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid #888888; border-right: " + tmp_border + "px solid " + tmp_col + "'></div> ";
        }
    }

    //return tires_stints[0] + " " + tires_stints[1] + " " + tires_stints[2];
    return str;
}

function reformat_tire_compound(car, tire_compound, tire_compound_mode, is_dashboard) {

    var h;
    if (is_dashboard == 0) {  // c'est qu'on vient du timing
        if (disp_param == 0) {
            reference_w_ = reference_w
        } else {
            reference_w_ = 2000
        }
        if (responsive) h = window_innerWidth / reference_w_ * ligne_h / dpi_factor_;
        else h = ligne_h / dpi_factor_;
    }

    var compounds_name_color_ = compounds_name_color(car);

    if (tire_compound_mode == 1) {  // nom

        if (0 <= tire_compound && tire_compound < compounds_name_color_.length) {
            tmp_col = compounds_name_color_[tire_compound][1];
            tmp_txt = compounds_name_color_[tire_compound][0];
            //return "<div style='font-size: " + h*0.57 + "px; display: inline-block; line-height: " + h*0.8 + "px; margin-top: " + h/10 + "px; text-align: center; vertical-align: top; color: " + tmp_col + ";'>" + tmp_txt + "</div>";
            return "<div style='font-size: " + 2*0.57 + "em; display: inline-block; line-height: " + h*0.8 + "px; margin-top: " + h/10 + "px; text-align: center; vertical-align: top; color: " + tmp_col + ";'>" + tmp_txt + "</div>";
        } else {
            return "";
        }
    } else if (tire_compound_mode == 2) {  // logo
        // REM : faut pas mettre le cache sinon l'image va être recharger à chaque itération
        //var nocache = new Date().getTime();

        if (0 <= tire_compound && tire_compound < compounds_name_color_.length) {
            tmp_col = compounds_name_color_[tire_compound][1];
            tmp_txt = compounds_name_color_[tire_compound][0];
            tmp_img = compounds_name_color_[tire_compound][2];
            imgurl = "./img - default/" + tmp_img;
            return "<div title='" + tmp_txt + "'><img style='vertical-align:top;' height='" + h + "' src='" + imgurl + "'></div>";
        } else {
            return "";
        }
    } else {
        //tire_compound = 2;  // debug
        var tmp_border = h / 10;

        if (0 <= tire_compound && tire_compound < compounds_name_color_.length) {
            tmp_col = compounds_name_color_[tire_compound][1];
            tmp_txt = compounds_name_color_[tire_compound][0];
            //return "<div style='background-color: black; font-size: " + h*0.57 + "px; display: inline-block; line-height: " + h*0.8 + "px; width: " + h*0.67 + "px; margin-top: " + h/10 + "px; text-align: center; vertical-align: top; color: " + tmp_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid " + tmp_col + "; border-right: " + tmp_border + "px solid " + tmp_col + "'>" + tmp_txt[0] + "</div>";
            if (is_dashboard == 0) {
                //return "<div style='background-color: black; font-size: " + 2 * 0.57 + "em; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.57 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid " + tmp_col + "; border-right: " + tmp_border + "px solid " + tmp_col + "'>" + tmp_txt[0] + "</div>";
                return "<div style='background-color: black; font-size: " + 2 * 0.47 + "em; display: inline-block; line-height: " + h * 0.8 + "px; width: " + h * 0.67 + "px; margin-top: " + h / 10 + "px; text-align: center; vertical-align: top; color: " + tmp_col + "; border-radius: 50%; border-left: " + tmp_border + "px solid " + tmp_col + "; border-right: " + tmp_border + "px solid " + tmp_col + "'>" + tmp_txt[0] + "</div>";
            } else {
                return "<div style='background-color: black; font-size: 1em; display: inline-block; width: 1.34em; padding: 0.1em; margin-top: -0.18em; line-height: 1.14em; text-align: center; vertical-align: middle; color: " + tmp_col + "; border-radius: 50%; border-left: 0.1em solid " + tmp_col + "; border-right: 0.1em solid " + tmp_col + "'>" + tmp_txt[0] + "</div>";
            }
        } else {
            return "";
        }
    }
}

function reformat_car(car, i, car_mode, is_dashboard) {

    //console.log(car_mode, car, i)

    var h;
    if (is_dashboard == 0) {  // c'est qu'on vient du timing
        if (disp_param == 0) {
            reference_w_ = reference_w
        } else {
            reference_w_ = 2000
        }
        if (responsive) h = window_innerWidth / reference_w_ * ligne_h / dpi_factor_;
        else h = ligne_h / dpi_factor_;
    }

    //nocache = sessionid;  // pour forcer le rechargement des images à chaque nouvelles session
    if (is_dashboard == 0) {
        var nocache = new Date().getTime();
    } else {
        var nocache = 0;  // sinon l'image clignote dans le dashboard car elle est rechargée
    }
    //nocache = 0;
    if (car_mode == 4) {
        if (donnees_reform_car[i] === undefined) {  // si on n'a pas encore fait le reform
            imgurl = "./img/driver_" + donnees.d[i].uid + ".png?cache=" + nocache;
            img = new Image();
            img.src = imgurl;
            $(img)
                .load(function () {
                    // On prend l'image team_xxxx.png défnie car elle existe
                    imgurl = "./img/driver_" + donnees.d[i].uid + ".png?cache=" + nocache;
                    donnees_reform_car[i] = "<div title='" + car + "'><img style='vertical-align:middle;' height='" + h + "' src='" + imgurl + "'></div>";
                })
                .error(function () {
                    imgurl = "./img/driver_default_" + car + ".png?cache=" + nocache;
                    donnees_reform_car[i] = "<div title='" + car + "'><img style='vertical-align:middle;' height='" + h + "' src='" + imgurl + "'></div>";
                });
            img = null;
        } else {
            return donnees_reform_car[i];
        }
        //return "<div title='"+car+"'><img style='vertical-align:middle;' height='" + h + "' src='./img/driver_" + donnees.d[i].uid + ".png?cache=" + nocache + "'></div>";
    } else if (car_mode == 5) {
        if (donnees_reform_car[i] === undefined) {  // si on n'a pas encore fait le reform
            imgurl = "./img/team_" + donnees.d[i].tid + ".png?cache=" + nocache;
            img = new Image();
            img.src = imgurl;
            $(img)
                .load(function () {
                    // On prend l'image team_xxxx.png défnie car elle existe
                    imgurl = "./img/team_" + donnees.d[i].tid + ".png?cache=" + nocache;
                    donnees_reform_car[i] = "<div title='" + car + "'><img style='vertical-align:middle;' height='" + h + "' src='" + imgurl + "'></div>";
                })
                .error(function () {
                    imgurl = "./img/team_default_" + car + ".png?cache=" + nocache;
                    donnees_reform_car[i] = "<div title='" + car + "'><img style='vertical-align:middle;' height='" + h + "' src='" + imgurl + "'></div>";
                });
            img = null;
        } else {
            return donnees_reform_car[i];
        }
        //return "<div title='"+car+"'><img style='vertical-align:middle;' height='" + h + "' src='" + imgurl + "'></div>";
    } else if (car_mode == 6) {
        if (donnees.d[i].uid in driver_) {
            return "<div title='" + car + "'>" + driver_[donnees.d[i].uid] + "</div>";
        } else {
            return "<div title='" + car + "'></div>";
        }
    } else if (car_mode == 7) {
        if (donnees.d[i].tid in team_) {
            return "<div title='" + car + "'>" + team_[donnees.d[i].tid] + "</div>";
        } else {
            return "<div title='" + car + "'></div>";
        }
    } else if (car_mode == 1) {
        return "<span style='font-size: " + (h * 20 / 40) + "px'>" + car + "</span>";
    } else if (car_mode == 8 || car_mode == 9) {
        // Le 0.1*h c'est pour rajouter une marge de 10% au-dessus du logo --> je l'ai enlevé car plus besoin avec le middle
        //return "<div title='"+car+"'><img style='vertical-align:top;margin-top:" + 0.1*h + "px;' height='" + h*0.8 + "' src='./cars - logos/" + car + ".png?cache=" + nocache + "'></div>";
        // REM : on va lire directement dans le dossier 'cars - logos - default'.
        if (is_dashboard == 0) {
            if (is_cars_logos_perso == 0) {
                return "<div title='" + car + "'><img style='vertical-align:middle;margin-top:" + 0.1 * h * 0 + "px;' height='" + h * 0.8 + "' src='./cars - logos - default/" + car + ".png?cache=" + nocache + "'></div>";
            } else {
                if (donnees_reform_car[i] === undefined) {  // si on n'a pas encore fait le reform
                    imgurl = "./cars - logos - perso/" + car + ".png?cache=" + nocache;
                    img = new Image();
                    img.src = imgurl;
                    $(img)
                        .load(function () {
                            imgurl = "./cars - logos - perso/" + car + ".png?cache=" + nocache;
                            donnees_reform_car[i] = "<div title='" + car + "'><img style='vertical-align:middle;margin-top:" + 0.1 * h * 0 + "px;' height='" + h * 0.8 + "' src='" + imgurl + "'></div>";
                        })
                        .error(function () {
                            imgurl = "./cars - logos - default/" + car + ".png?cache=" + nocache;
                            donnees_reform_car[i] = "<div title='" + car + "'><img style='vertical-align:middle;margin-top:" + 0.1 * h * 0 + "px;' height='" + h * 0.8 + "' src='" + imgurl + "'></div>";
                        });
                    img = null;
                } else {
                    return donnees_reform_car[i];
                }
                //return "<div title='" + car + "'><img style='vertical-align:middle;margin-top:" + 0.1 * h * 0 + "px;' height='" + h * 0.8 + "' src='./cars - logos - perso/" + car + ".png?cache=" + nocache + "'></div>";
            }
        } else {
            if (is_cars_logos_perso == 0) {
                return "<img style='vertical-align:top; height:100%;' src='./cars - logos - default/" + car + ".png?cache=" + nocache + "'>";
            } else {
                if (donnees_reform_car_dashboard[car] === undefined) {  // si on n'a pas encore fait le reform
                    imgurl = "./cars - logos - perso/" + car + ".png?cache=" + nocache;
                    img = new Image();
                    img.src = imgurl;
                    $(img)
                        .load(function () {
                            imgurl = "./cars - logos - perso/" + car + ".png?cache=" + nocache;
                            donnees_reform_car_dashboard[car] = "<img style='vertical-align:top; height:100%;' src='" + imgurl + "'>";
                        })
                        .error(function () {
                            imgurl = "./cars - logos - default/" + car + ".png?cache=" + nocache;
                            donnees_reform_car_dashboard[car] = "<img style='vertical-align:top; height:100%;' src='" + imgurl + "'>";
                        });
                    img = null;
                } else {
                    return donnees_reform_car_dashboard[car];
                }
                //return "<img style='vertical-align:top; height:100%;' src='./cars - logos - perso/" + car + ".png?cache=" + nocache + "'>";
            }
        }
    } else {
        return "<div title='"+car+"'><img style='vertical-align:middle;' height='" + h + "' src='./img/car" + i + team + ".png?cache=" + nocache + "'></div>";
    }
}

function reformat_skies(skies) {
    if (skies == 0)
        return "Clear";
    else if (skies == 1)
        return "Partly Cloudy";
    else if (skies == 2)
        return "Mostly Cloudy";
    else if (skies == 3)
        return "Overcast";
    else
        return "";

}

function reformat_clubname(clubname, clubname_mode, name, teamname, i, is_dashboard, uid, tid) {

    // uid et tid sont utilisés pour le dashboard uniquement car sinon donnees.d[i].tid ne fonctionnera pas
    if (is_dashboard == 0 && i in donnees.d) {  // c'est qu'on vient du timing
        uid = donnees.d[i].uid;
        tid = donnees.d[i].tid;
    }

    var h;
    if (is_dashboard == 0) {  // c'est qu'on vient du timing
        if (disp_param == 0) {
            reference_w_ = reference_w
        } else {
            reference_w_ = 2000
        }
        if (responsive) h = window_innerWidth / reference_w_ * ligne_h / dpi_factor_;
        else h = ligne_h / dpi_factor_;
    }

    if (clubname_mode == 1) {
        return "<span style='font-size: " + (h * 20 / 40) + "px'>" + clubname + "</span>";
    } else {
        c = clubname;

        if (is_dashboard == 0) {
            var nocache = new Date().getTime();
        } else {
            var nocache = 0;  // sinon l'image clignote dans le dashboard car elle est rechargée
        }

        if (c.toString().substr(0,4) == "Hisp") {
            c = "Hispanoamerica";
        }

        // Personnalisation des flags
        flag_perso = null;
        if (donnees.teamracing == 0) {
            if (uid != undefined && uid != 0 && uid in flag_) {
                flag_perso = flag_[uid];
            }
        } else {
            if (tid != undefined && tid != 0 && tid in flag_) {
                flag_perso = flag_[tid];
            }
        }

        if (c in clubid || (flag_perso != null && (clubname_mode == 3 || is_dashboard))) {
            if (clubname_mode == 2) {
                if (is_dashboard == 0) {
                    if (is_clubs_logos_perso == 0) {
                        return "<img style='vertical-align:middle;' height='" + h + "' src='clubs - logos/" + clubid[c] + ".png?cache=" + nocache + "'>";
                    } else {
                        if (donnees_reform_clubname[c] === undefined) {  // si on n'a pas encore fait le reform

                            imgurl = "clubs - logos - perso/" + clubid[c] + ".png?cache=" + nocache;
                            img = new Image();
                            img.src = imgurl;
                            $(img)
                                .load(function () {
                                    // On est obligé de calculer le c ici car sinon on n'a pas la bonne valeur
                                    c = clubname;
                                    if (c.toString().substr(0,4) == "Hisp") {
                                        c = "Hispanoamerica";
                                    }

                                    imgurl = "clubs - logos - perso/" + clubid[c] + ".png?cache=" + nocache;
                                    donnees_reform_clubname[c] = "<img style='vertical-align:middle;' height='" + h + "' src='" + imgurl + "'>";
                                })
                                .error(function () {
                                    // On est obligé de calculer le c ici car sinon on n'a pas la bonne valeur
                                    c = clubname;
                                    if (c.toString().substr(0,4) == "Hisp") {
                                        c = "Hispanoamerica";
                                    }

                                    imgurl = "clubs - logos/" + clubid[c] + ".png?cache=" + nocache;
                                    donnees_reform_clubname[c] = "<img style='vertical-align:middle;' height='" + h + "' src='" + imgurl + "'>";
                                });
                            img = null;
                        } else {
                            return donnees_reform_clubname[c];
                        }
                        //return "<img style='vertical-align:middle;' height='" + h + "' src='clubs - logos - perso/" + clubid[c] + ".png?cache=" + nocache + "'>";
                    }
                } else {
                    if (is_clubs_logos_perso == 0) {
                        return "<img style='vertical-align:top; height: 100%;' src='clubs - logos/" + clubid[c] + ".png?cache=" + nocache + "'>";
                    } else {
                        if (donnees_reform_clubname_dashboard[c] === undefined) {  // si on n'a pas encore fait le reform
                            imgurl = "clubs - logos - perso/" + clubid[c] + ".png?cache=" + nocache;
                            img = new Image();
                            img.src = imgurl;
                            $(img)
                                .load(function () {
                                    // On est obligé de calculer le c ici car sinon on n'a pas la bonne valeur
                                    c = clubname;
                                    if (c.toString().substr(0,4) == "Hisp") {
                                        c = "Hispanoamerica";
                                    }

                                    imgurl = "clubs - logos - perso/" + clubid[c] + ".png?cache=" + nocache;
                                    donnees_reform_clubname_dashboard[c] = "<img style='vertical-align:top; height: 100%;' src='" + imgurl + "'>";
                                })
                                .error(function () {
                                    // On est obligé de calculer le c ici car sinon on n'a pas la bonne valeur
                                    c = clubname;
                                    if (c.toString().substr(0,4) == "Hisp") {
                                        c = "Hispanoamerica";
                                    }

                                    imgurl = "clubs - logos/" + clubid[c] + ".png?cache=" + nocache;
                                    donnees_reform_clubname_dashboard[c] = "<img style='vertical-align:top; height: 100%;' src='" + imgurl + "'>";
                                });
                            img = null;
                        } else {
                            return donnees_reform_clubname_dashboard[c];
                        }
                        //return "<img style='vertical-align:top; height: 100%;' src='clubs - logos - perso/" + clubid[c] + ".png?cache=" + nocache + "'>";
                    }
                }
            } else {  // mode 3 (country flags)

                if (is_dashboard == 0) {
                    if (flag_perso != null) {
                        return "<img style='vertical-align:middle;' height='" + h + "' src='img/" + flag_perso + "?cache=" + nocache + "'>";
                    } else {
                        return "<img style='vertical-align:middle;' height='" + h + "' src='flags - logos/" + clubid[c] + ".png?cache=" + nocache + "'>";
                    }
                } else {
                    if (flag_perso != null) {
                        return "<img style='vertical-align:top; height: 100%;' src='img/" + flag_perso + "?cache=" + nocache + "'>";
                    } else {
                        return "<img style='vertical-align:top; height: 100%;' src='flags - logos/" + clubid[c] + ".png?cache=" + nocache + "'>";
                    }
                }
            }
        } else {
            return "<img style='vertical-align:middle;' height='" + h + "' src='clubs - logos/000.png?cache=" + nocache + "'>"
        }
    }
}


function reformat_gain(gain) {

    if (donnees.styp == "Race" && gain != 999) {  // gain = 999 signifie qu'on ne veut pas l'afficher
        if (gain < 0) {
            return "<span style='color:#ff0000'>" + gain + "</span>"
        } else if (gain > 0) {
            return "<span style='color:#00dd00'>+" + gain + "</span>"
        } else {
            return "--"
        }
    } else {
        return "&nbsp;"
    }
}


function reformat_delta(delta, color_perso, nb_decimales) {
    if (nb_decimales == undefined) {
        nb_decimales = 2;
    }

    if (color_perso != undefined && color_perso == 1) {
        if (delta < 0) {
            return delta.toFixed(nb_decimales);
        } else {
            return "+" + delta.toFixed(nb_decimales);
        }
    } else {
        if (delta < 0) {
            return "<span style='color:#00dd00'>"+delta.toFixed(nb_decimales)+"</span>";
        } else {
            return "<span style='color:#ff0000'>+"+delta.toFixed(nb_decimales)+"</span>";
        }
    }
}


function reformat_name(name, teamname, disp_vW, caridx, is_dashboard, uid, tid, tmp_name_mode) {

    // disp_vW c'est pour afficher un asterix devant le nom du virtual winner

    // uid et tid sont utilisés pour le dashboard uniquement car sinon donnees.d[i].tid ne fonctionnera pas
    if (is_dashboard == 0 && caridx in donnees.d) {  // c'est qu'on vient du timing
        uid = donnees.d[caridx].uid;
        tid = donnees.d[caridx].tid;
    }

    //console.log(name, teamname);
    //var tmp_name_mode = name_mode;  // REM : maintenant le name_mode est en paramètre de la fonction
    if (is_dashboard == 1) {  // c'est qu'on vient du dashboard
        //tmp_name_mode = dashboard_name_mode;  // REM : maintenant le name_mode est en paramètre de la fonction
        if (name == "&nbsp;") {
            name = "";
        }
        if (teamname == "&nbsp;") {
            teamname = "";
        }
    }

    // Si ce n'est pas une course en team en passe du mode 5 ou du mode 6 au mode 1
    //if (is_dashboard == 0) {  // c'est qu'on vient du timing
        if ((tmp_name_mode == 5 || tmp_name_mode == 6) && (donnees.teamracing == undefined || donnees.teamracing == 0))
            name_mode_ = 1;
        else {
            name_mode_ = tmp_name_mode;
        }
    //} else {
    //    name_mode_ = tmp_name_mode;
    //}

    //name_mode_ = 5;  // DEBUG

    //name_old = name

    // personnalisation du nom du pilote
    //if (is_dashboard == 0) {  // c'est qu'on vient du timing
        if (uid != 0 && uid != undefined && uid in driver_) {
            name = driver_[uid];
        }

        // personnalisation du nom de la team
        if (tid != 0 && tid != undefined && tid != 0 && tid in team_) {
            teamname = team_[tid];
        }

        // Utile si on a personnalisé le nom du pilote et qu'on a sélectionné l'option "4. Team Name"
        if (tid == 0) {
            teamname = name;
        }
    //}

    if (name.length > 0) {
        nom_ = name.split(" ");
        if (nom_[0] != '') {
            prenom = nom_[0];
        } else if (nom_.length > 2)  {  // on met > 2 et pas 1 pour s'assurer que le nom et le prenom soient différents
            // pour éviter le bug avec les noms du type [A] Joel Guez comme dans le replay iRNL PCup de J. J. Bouwm...
            if (nom_.length > 4 && nom_[2] == '') {  // on met > 4 et pas 3 pour s'assurer que le nom et le prenom soient différents
                prenom = nom_[3];
            } else {
                prenom = nom_[1];
            }
        } else {  // il faut toujours définir prenom dans les autres cas pour éviter un plantage
            prenom = ' ';
        }

        if (prenom.length > 0) {
            lettreprenom = prenom[0];
        } else {
            lettreprenom = ' ';
        }

        nom = nom_[nom_.length - 1];
        nom_uppercase = nom_[nom_.length - 1].toUpperCase();
        if (nom.length > 0) {
            lettrenom = nom[0];
        } else {
            lettrenom = "";
        }

        tmp_name = "";
        for (var i = 0; i < 3; i++) {
            if (nom[i] != undefined) {
                tmp_name += nom[i];
            }
        }
        name_3letters = tmp_name;
    } else {
        return "";
    }

    var vW_txt = "";
    //if (is_dashboard == 0) {
        if (disp_vW) {
            vW_txt = "* ";  // * devant le virtual winner
        }
    //}

    //name_mode_ = 5;  // DEBUG

    if (name_mode_ == 1) {
        name = vW_txt + name;
    } else if (name_mode_ == 2) {
        name = vW_txt + lettreprenom + ". " + nom_uppercase;
    } else if (name_mode_ == 10) {
        name = vW_txt + lettreprenom + ". " + nom;
    } else if (name_mode_ == 3) {
        name = vW_txt + name_3letters;
    } else if (name_mode_ == 4) {
        name = vW_txt + teamname;
    } else if (name_mode_ == 5) {
        if (is_dashboard == 1) {  // c'est qu'on vient du dashboard
            name = "<div style='vertical-align: middle; display: inline-block; line-height: 100%;'>" + vW_txt + teamname + "<br>" + "<span style='color:#9e9e9e; font-weight:500;'>" + name + "</span>" + "</div>";
        } else {
            //name = vW_txt + teamname + "<br>" + "<span style='color:#9e9e9e; font-weight:500;'>" + name + "</span>";
            name = "<div style='line-height: " + (line_space_coef * 1.5) + "em;'>" + vW_txt + teamname + "<br>" + "<span style='color:#9e9e9e; font-weight:500;'>" + name + "</span>" + "</div>";
        }
    } else if (name_mode_ == 6) {
        name = vW_txt + teamname + "<span style='color:#9e9e9e; font-weight:500'> (" + lettreprenom + ". " + nom_uppercase + ")</span>"
    } else if (name_mode_ == 7) {
        name = vW_txt + prenom + " " + lettrenom + ".";
    } else if (name_mode_ == 8) {
        name = vW_txt + "<span style='font-weight:normal'>" + lettreprenom + "</span>" + " " + name_3letters;
    } else if (name_mode_ == 9) {
        name = vW_txt + nom_uppercase;
    }

    return name;
}


function reformat_pit_time(time) {
    if (time <= 0) return "";
    if (Math.abs(time) < 60) t = time.toFixed(1);
    else {
        if (time < 3600) {
            min = Math.floor(time / 60);
            sec = (Math.abs(time) % 60).toFixed(0);
            if (sec < 10) sec = "0" + sec;
            t = min + "'" + sec
        } else {
            heu = Math.floor(time / 3600);
            min = Math.floor((Math.abs(time-3600*heu) / 60));
            if (min < 10) min = "0" + min;
            t = heu + "h" + min
        }
    }
    return t
}


function reformat_speed(speed, option) {
    if (speed > 500 || speed <= 0) return "";
    var s = Math.floor(1000*speedfactor*speed)/1000;

    var mode = speed_mode;
    if (option == "last") {  // on utilise le last_mode
        mode = last_mode;
    }
    if (option == "best") {  // on utilise le best_mode
        mode = best_mode;
    }
    if (option == "qualy") {  // on utilise le qualy_mode
        mode = qualy_mode;
    }

    if (mode == 1) {
        return s.toFixed(0);
    } else if (mode == 3) {
        return s.toFixed(2);
    } else if (mode == 4) {
        return s.toFixed(3);
    } else {  // mode 2
        return s.toFixed(1);
    }
}


function reformat_accel(accel) {
    var a = accel.toFixed(1);
    if (a >= 0) a = "+" + a;
    return a
}


function reformat_gap(gap) {

    if (gaps_decimal == undefined) {
        gaps_decimal = 1;  // 2 décimales par défaut si jamais on passe par une page où ce n'est pas défini (dashboard, timing_horizontal, ...)
    }
    var nb_decimals = gaps_decimal + 1;

    //gap = 22.478;  // DEBUG

    //if (gap == 0) return "&nbsp";
    if (gap == 0) return "";  // REM : si on met &nbsp; on ne peut pas utiliser le CSS selecteur g:empty pour par exemple ne pas afficher le gap s'il est vide
    var abs_gap = Math.abs(gap);
    if (abs_gap < 60) g = abs_gap.toFixed(nb_decimals);
    else {
        if (abs_gap < 3600) {
            min = Math.floor(abs_gap / 60);
            //sec = (abs_gap % 60).toFixed(0);
            //sec = Math.floor(abs_gap - 60*min);
            sec = (abs_gap - 60*min).toFixed(nb_decimals);
            if (sec < 10) sec = "0" + sec;
            g = min + "'" + sec;
        } else {
            heu = Math.floor(abs_gap / 3600);
            min = Math.floor((abs_gap-3600*heu) / 60);
            sec = (abs_gap - 60*min - 3600*heu).toFixed(nb_decimals);
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;
            g = heu + "h" + min + "'" + sec;
        }
    }
    if (gap >= 0) g = "+" + g;
    else g = "-" + g
    return g
}


// On affiche le chrono sous la forme h:mm:sec.xx
function reformat_chrono(gap) {
    //if (gap == 0) return "&nbsp";
    if (gap == 0) return "";  // REM : si on met &nbsp; on ne peut pas utiliser le CSS selecteur g:empty pour par exemple ne pas afficher le gap s'il est vide
    var abs_gap = Math.abs(gap);
    g = abs_gap;
    heu = 0;
    min = 0;
    if (g >= 3600) {
        heu = Math.floor(g / 3600);
        g = g % 3600;
    }
    sec = (g % 60).toFixed(2);
    if (sec < 10) sec = "0" + sec;
    min = Math.floor(g / 60);
    if (min < 10 && heu != 0) min = "0" + min;

    if (heu != 0) {
        g = heu + "h" + min + "'" + sec;
    } else {
        g = min + "'" + sec;
    }
    return g;
}


function reformat_lc(lc) {
    if (lc <= 0) return "--";
    return lc
}


function reformat_laptime(laptime, nb_decimals) {

    if (nb_decimals == undefined) {
        nb_decimals = 3;
    }

    if (laptime <= 0) return "--'--.---";
    min = Math.floor(laptime / 60);
    //sec = (laptime % 60 - 0.00001).toFixed(3);
    sec = (laptime % 60).toFixed(nb_decimals);
    if (sec < 0) sec = 0;
    if (sec < 10) sec = "0" + sec;
    if (min > 0) {
        return min + "'" + sec;
    } else {
        return sec;
    }
    //return laptime
}


function reformat_lic(lic, sub) {
    var h;

    if (disp_param == 0) {
        reference_w_ = reference_w
    } else {
        reference_w_ = 2000
    }
    var l = "?";
    if ((lic_mode == 1) || (lic_mode == 3)) {
        if (lic == "0x8800a0") l = "IA";  // IA
        if (lic == "0xfc0706") l = "R";
        if (lic == "0xfc8a27") l = "D";
        if (lic == "0xfeec04") l = "C";
        if (lic == "0xc702") l = "B";
        if (lic == "0x153db") l = "A";
        if (lic == "0x0") l = "P";
    } else {
        if (lic == "0x8800a0") l = "IA";  // IA
        if (lic == "0xfc0706") l = "Rookie";
        if (lic == "0xfc8a27") l = "CLASS D";
        if (lic == "0xfeec04") l = "CLASS C";
        if (lic == "0xc702") l = "CLASS B";
        if (lic == "0x153db") l = "CLASS A";
        if (lic == "0x0") l = "Pro";
    }
    var s = " " + (sub/100).toFixed(2);
    bcol = lic.slice(2);
    for (var n = bcol.length; n < 6; n++) {
        bcol = "0" + bcol
    }
    if (bcol == "fc8a27" || bcol == "feec04") col = "#000000";
    else col = "#FFFFFF";
    bcol = "#" + bcol;

    if (lic_mode >= 3) {
        if (responsive) h = window_innerWidth / reference_w_ * ligne_h / dpi_factor_;
        else h = ligne_h / dpi_factor_;
        pw = h/1.5*16/40;
        ph = h/5*16/40;
        if (coef_ligne / (window_innerWidth / reference_w_ / dpi_factor_)==2) ph += h/2.5;
        return "<span style='padding:"+ph+"px "+pw+"px;border: 1px solid #555555;background-color:"+bcol+";color:"+col+";vertical-align:top;line-height:"+coef_ligne*ligne_h / dpi_factor_+"px;font-size:"+(h * 16 / 40)+"px'>" + l + s + "</span>";
    } else {
        return l + s;
    }
}


function reformat_lic_dashboard(elt_id, lic, sub, alpha) {
    var l = "?";
    if (lic == "0x8800a0") l = "IA";  // IA
    if (lic == "0xfc0706") l = "R";
    if (lic == "0xfc8a27") l = "D";
    if (lic == "0xfeec04") l = "C";
    if (lic == "0xc702") l = "B";
    if (lic == "0x153db") l = "A";
    if (lic == "0x0") l = "P";
    var s = " " + (sub/100).toFixed(2);
    bcol = lic.slice(2);
    for (var n = bcol.length; n < 6; n++) {
        bcol = "0" + bcol
    }
    if (bcol == "fc8a27" || bcol == "feec04") col = "#000000";
    else col = "#FFFFFF";
    bcol = "#" + bcol;

    set_style_bg_alpha(elt_id, bcol, alpha);
    set_style_color(elt_id, col);

    return l + s
}


function reformat_timeremain(time) {
    if (time != "unlimited") {
        if (time < 167*3600 && time >= 0) {
            heu = Math.floor(time / 3600);
            min = Math.floor((time - 3600 * heu) / 60);
            sec = Math.floor(time - 3600 * heu - 60 * min);
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;
            t = heu + ":" + min + ":" + sec;
            return t
        } else {
            if (time == -1) {
                return "<span style='font-size: 0.75em; vertical-align: top; top: 25%;'>Last lap</span>"
            } else if (time == -2) {
                return "<span style='font-size: 0.75em; vertical-align: top; top: 25%;'>Finishing</span>"
            } else if (time == -3) {
                return "<span  style='font-size: 0.75em; vertical-align: top; top: 25%;'>Official</span>"
            } else {
                return "--"
            }
        }
    } else {
        return time
    }
}


// Fonction qui convertit un nombre de secondes dans une horloge à un format précisé
function reformat_clock(time, mode_24h, with_seconds) {
    if (mode_24h == undefined) mode_24h = 1;
    if (with_seconds == undefined) with_seconds = 1;

    var heu = Math.floor(time / 3600);
    var min = Math.floor((time - 3600 * heu) / 60);
    var sec = Math.floor(time - 3600 * heu - 60 * min);
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    var str_12h = "";
    if (!mode_24h) {
        if (heu > 12) {
            heu -= 12;
            str_12h = " pm";
        } else {
            str_12h = " am";
        }
    }

    var t;
    if (with_seconds) {
        t = heu + ":" + min + ":" + sec + str_12h;
    } else {
        t = heu + ":" + min + str_12h;
    }

    return t
}


function reformat_lapsremain(laps, font_color) {
    //
    // REM: le paramètre font_color n'est utilisé qu'en cas de personnalisation de la couleur de font sur le dashboard
    //

    /*lapdistpctraw_s = 0;
    l = 0;
    if (selected_idxjs in donnees.d)
        lapdistpctraw_s = Math.floor(10*(donnees.d[selected_idxjs].dp - donnees.d[selected_idxjs].lc))/10;
    if ((selected_idxjs in donnees.d) && (donnees.p1 in donnees.d)) {
        l = laps + 1 - lapdistpctraw_s;
        if (donnees.d[donnees.p1].dp - donnees.d[donnees.p1].lc < donnees.d[selected_idxjs].dp - donnees.d[selected_idxjs].lc)  // Si le pilote n'est pas dans le même tour
            l += 1
    }
    if (l < 0) l = 0;
    return l.toFixed(1)*/

    // On indique si l'estimation n'est pas correcte lorsque le leader n'est pas connecté
    if (font_color){
        set_style_color("lapsremain", font_color);
    } else {
        if (donnees.estim_status == 0) {
            //document.getElementById("lapsremain").style.color = "#666666";
            set_style_color("lapsremain", "#666666");
        } else {
            //document.getElementById("lapsremain").style.color = "#ff9900";
            set_style_color("lapsremain", "#ff9900");
        }
    }

    if (laps < 0) return "--";
    if (laps > 32000) return "&infin;";
    if (laps > 9999) {
        return "9999";
    } else if(laps > 999) {
        return (laps - 0.05).toFixed(0);
    } else {
        return (laps - 0.05).toFixed(lapsremain_decimal);
    }
}


function reformat_winddir(dir) {
    dir = dir % 360;
    if (Math.abs(dir - 45) <= 22.5 )
        return "NE";
    else if (Math.abs(dir - 90) <= 22.5 )
        return "E";
    else if (Math.abs(dir - 135) <= 22.5 )
        return "SE";
    else if (Math.abs(dir - 180) <= 22.5 )
        return "S";
    else if (Math.abs(dir - 225) <= 22.5 )
        return "SW";
    else if (Math.abs(dir - 270) <= 22.5 )
        return "W";
    else if (Math.abs(dir - 315) <= 22.5 )
        return "NW";
    else
        return "N"
}


function reformat_wave_by1(dp, classleader_dp) {

    //var pacecar_ldp = donnees.pace_car_ldp;
    var pacecar_ldp = donnees.pacing_line_leader_ldp;

    var ldp = dp % 1;
    var classleader_ldp = classleader_dp % 1;

    // Calcul de l'écart avec le pace car
    var ecartSC = pacecar_ldp - ldp;
    var classleader_ecartSC = pacecar_ldp - classleader_ldp;
    if (ecartSC < 0) ecartSC++;
    if (classleader_ecartSC < 0) classleader_ecartSC++;

    //if (ecartSC <= classleader_ecartSC && donnees.pace_car_tracksurface == 3) { // que si le pace car est sorti
    if (ecartSC <= classleader_ecartSC) {
        return "<div style = 'color: #00ff00;'>WB1</div>";
    } else {
        return "<div>&nbsp;</div>";
    }
}


function reformat_wave_by2(dp, classleader_dp) {

    //var pacecar_ldp = donnees.pace_car_ldp;
    var pacecar_ldp = donnees.pacing_line_leader_ldp;

    var ldp = dp % 1;
    var classleader_ldp = classleader_dp % 1;

    // Calcul de l'écart avec le pace car
    var ecartSC = pacecar_ldp - ldp;
    var classleader_ecartSC = pacecar_ldp - classleader_ldp;
    if (ecartSC < 0) ecartSC++;
    if (classleader_ecartSC < 0) classleader_ecartSC++;

    //if (donnees.pace_car_tracksurface == 3 && (ecartSC <= classleader_ecartSC || classleader_dp > dp + 1)) { // que si le pace car est sorti
    if (ecartSC <= classleader_ecartSC || classleader_dp > dp + 1) {
        return "<div style = 'color: #00ff00;'>WB2</div>";
    } else {
        return "<div>&nbsp;</div>";
    }
}


function reformat_pace_flags(pace_flags) {
    // end_of_line  = 0x0001
    // free_pass    = 0x0002
    // waved_around = 0x0004

    var bg = "#0000000";  // transparent par défaut
    var txt = ""
    var col = "#ffffff";
    var flag = pace_flags.toString(2);  // on convertit en binaire

    if (donnees.pace_car_tracksurface == 3) {  // On n'affiche les flags que si le pace car est sorti
        if (flag.slice(-1) == "1" && pace_flags_EOL) {  // EOL
            txt += "<span style='color: red'>EOL</span>";
        }

        if (flag.slice(-2, -1) == "1" && pace_flags_FP) {  // FP
            if (txt != "") txt += " / ";
            txt += "<span style='color: #0088ff'>FP</span>";
        }

        if (flag.slice(-3, -2) == "1" && pace_flags_WA) {  // WA
            if (txt != "") txt += " / ";
            txt += "<span style='color: #00ff00'>WA</span>";
        }
    }

    if (txt == "") txt = "&nbsp;";

    return "<div style = 'color: " + col + "; background-color: " + bg + ";'>" + txt + "</div>";
}


function reformat_driver_flag(driver_flag) {
    var bg = "#0000000";  // transparent par défaut
    var txt = "&nbsp;";
    var col = "#ffffff";
    var flag = driver_flag.toString(2);  // on convertit en binaire
    if (flag.slice(-1) == "1") {
        bg = "#000" // checkered
        txt = '<div style="position: relative; transform-origin: top left; transform: scaleY(0.25); display: grid; background-color: black; grid-template-columns: repeat(6, minmax(0, 1fr)); grid-template-rows: repeat(4, minmax(0, 1fr));">' +
            '<div style="background-color: white; grid-column: 1; grid-row: 1;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 3; grid-row: 1;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 5; grid-row: 1;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 2; grid-row: 2;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 4; grid-row: 2;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 6; grid-row: 2;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 1; grid-row: 3;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 3; grid-row: 3;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 5; grid-row: 3;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 2; grid-row: 4;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 4; grid-row: 4;">&nbsp;</div>' +
            '<div style="background-color: white; grid-column: 6; grid-row: 4;">&nbsp;</div>' +
            '</div>';
    } else if (flag.slice(-4, -3) == "1") {
        bg = "#ffff00";  // yellow
    } else if (flag.slice(-9, -8) == "1") {
        bg = "#ffff00";  // yellow waving
    } else if (flag.slice(-15, -14) == "1") {
        bg = "#ffff00";  // caution
    } else if (flag.slice(-16, -15) == "1") {
        bg = "#ffff00";  // caution waving
    } else if (flag.slice(-6, -5) == "1") {
        bg = "#0000ff";  // blue
    } else if (flag.slice(-2, -1) == "1") {
        bg = "#ffffff";  // white
    } else if (flag.slice(-3, -2) == "1") {
        bg = "#00ff00";  // green
    } else if (flag.slice(-21, -20) == "1") {
        bg = "#000000";  // meat ball
        col = "#ff4400";
        txt = "&#11044;";  // gros cercle rouge
    } else if (flag.slice(-17, -16) == "1") {
        bg = "#000000";  // black
        col = "#ff4400";
        txt = "BF";
    } else if (flag.slice(-20, -19) == "1") {
        bg = "#000000";  // furled black (Slow Down) -> avertissement avant un éventuel drapeau noir
        col = "#ff4400";
        txt = "F";
    } else if (flag.slice(-18, -17) == "1") {
        bg = "#000000";  // Disqualified
        col = "#ff4400";
        txt = "DQ";
    //} else if (flag.slice(-19, -18) == "1") {
    //    bg = "#666666";  // Servicible ??
    //    col = "#ff4400";
    //    txt = "S";
    }

    //console.log(flag)
    return "<div style = 'color: " + col + "; background-color: " + bg + ";'>" + txt + "</div>";
}


function reformat_track_status(track_status) {

    // -2: vide (ne pas afficher)
    // -1: not in the world
    //  0: off track
    //  1: in pit stall
    //  2: approaching pits
    //  3: on track
    //  4: outlap
    //  5: outlap et off track

    var col = "#00ff00";
    var txt = "RUN";

    switch (track_status) {
        case -1:
            col = "#ff0000";
            txt = "RET";
            break;
        case 0:
            col = "#cc88ff";
            txt = "OFF";
            break;
        case 1:
            col = "#ff8800";
            txt = "BOX";
            break;
        case 2:
            col = "#ff8800";
            txt = "PIT";
            break;
        case 3:
            col = "#00ff00";
            txt = "RUN";
            break;
        case 4:
            col = "#ffff00";
            txt = "OUT";
            break;
        case 5:
            col = "#ffff00";
            txt = "OUT <span style='color: #cc88ff'>OFF</span>";
            break;
    }

    return "<span style='color:" + col + ";'>" + txt+ "</span>"
}


//function reformat_laps_deltas(temps_de_passage, temps_de_passage_ref, rel2, rel2start, position, position_ref, rel, sessiontype, N, disp_total, disp_current) {
function reformat_laps_deltas(temps_de_passage, temps_de_passage_ref, rel2, rel2start, sessiontype, N, disp_total, disp_current, disp_details, nb_decimals) {
    // temps_de_passage_ref sont les temps de passage du pilote sélectionné avec lequel on va faire le calcul des deltas
    // rel est le gap relatif avec le pilote sélectionné
    // sessiontype est le type de session

    N = Math.max(1, Math.min(N, 10));  // on ne peut pas dépasser 10 car ce n'est pas prévu dans le serveur JRT et on ne peut pas mettre 0 ou moins

    // DEBUG
    //reformat_delta(delta, color_perso)
    //return "-- laps deltas -- " + N + " -- " + selected_idxjs;

    // On n'affiche rien si c'est le pilote sélectionné car les deltas seronts forcément 0
    /*if (position == position_ref) {
        return "";
    }*/

    var ret = "";
    var ret_pre = "<div style='width: 100%; height: 100%; display: grid; grid-template-columns: repeat(" + (N*disp_details + 2 + disp_total + disp_current - 2) + ", minmax(0, 1fr));'>";
    var ret_suff = "</div>";

    ret = ret_pre;

    var delta = [];
    var t1 = t2 = t1_ref = t2_ref = t = t_ref = 0;

    //if (sessiontype == "Race") {
    // REM : en practice, le rel2 est calculé avec le rcf3 dans deltas_and_gapcolor.js
        delta[0] = rel2 - rel2start;
        if (isNaN(delta[0])) {
            delta[0] = "--";
        }
    //} else {
        // Si on n'est pas en course, on ne peut pas calculer le delta pour le tour en cours car il n'y a pas de relatif
        // Il se peut aussi que certaines valeurs de delta soient exotiques, et faudra les éliminer
    //    delta[0] = "--";
    //}

    var total = 0;
    var decale = 0;
    var decale_ref = 0;

    var col;


    // On essaie de calculer intelligemment le decalage pour la comparaison des temps de passage
    // Ex, les temps de passage du pilote sont [94, 64, 31, 1, ...]
    // et ceux du pilote sélectionné (ref) sont {63, 33, 2, ...],
    // on va faire decale = 1 et decale_ref = 0
    //
    // Il y a 3 cas de figure possible à déterminer :
    // #1. decale = 0 et decale_ref = 0
    // #2. decale = 1 et decale_ref = 0
    // #3. decale = 0 et decale_ref = 1
    var diff1 = diff2 = diff3 = 0;
    // #1
    t = temps_de_passage[0];
    t_ref = temps_de_passage_ref[0];
    if (t != 0 && t_ref != 0) {
        diff1 = Math.abs((t - t_ref));
    }
    // #2
    t = temps_de_passage[1];
    t_ref = temps_de_passage_ref[0];
    if (t != 0 && t_ref != 0) {
        diff2 = Math.abs((t - t_ref));
    }
    // #3
    t = temps_de_passage[0];
    t_ref = temps_de_passage_ref[1];
    if (t != 0 && t_ref != 0) {
        diff3 = Math.abs((t - t_ref));
    }
    // On calcule les décalages decale et decale_ref
    var diff_min = Math.min(diff1, diff2, diff3);
    if (diff2 == diff_min) {
        decale = 1;
    } else if (diff3 == diff_min) {
        decale_ref = 1;
    }

    for (var n = 1; n <= N; n++) {

        /* ANCIENNE METHODE QUI TIENT COMPTE DES POSITIONS
         decale = 0;
         decale_ref = 0;
         if (position < position_ref) {
         t1 = temps_de_passage[n];
         t2 = temps_de_passage[n - 1];
         t1_ref = temps_de_passage_ref[n];
         t2_ref = temps_de_passage_ref[n - 1];
         if (t2_ref < t2) {
         decale = 1;
         }
         t1 = temps_de_passage[n + decale];
         t2 = temps_de_passage[n - 1 + decale];
         } else {
         t1 = temps_de_passage[n];
         t2 = temps_de_passage[n - 1];
         t1_ref = temps_de_passage_ref[n];
         t2_ref = temps_de_passage_ref[n - 1];
         if (t2_ref > t2) {
         decale_ref = 1;
         }
         t1_ref = temps_de_passage_ref[n + decale_ref];
         t2_ref = temps_de_passage_ref[n - 1 + decale_ref];
         }
         */

        // NOUVELLE METHODE
        if (n + decale <= 11) {
            t1 = temps_de_passage[n + decale];
            t2 = temps_de_passage[n - 1 + decale];
        } else {
            t1 = 0;
            t2 = 0;
        }
        if (n + decale_ref <= 11) {
            t1_ref = temps_de_passage_ref[n + decale_ref];
            t2_ref = temps_de_passage_ref[n - 1 + decale_ref];
        } else {
            t1_ref = 0;
            t2_ref = 0;
        }

        if (t1 != 0 && t2 != 0 && t1_ref != 0 && t2_ref != 0) {
            // t2 - t1 correspond en fait au temps du dernier tour
            delta[n] = (t2_ref - t1_ref) - (t2 - t1);
            total += delta[n];
        } else {
            delta[n] = 0;
        }

        col = "#ffffff";
        if (delta[n] < 0) {
            col = "#00dd00";
        } else if (delta[n] > 0) {
            col = "#ff0000";
        }
        if (delta[n] != 0) {
            delta[n] = reformat_delta(delta[n], 1, nb_decimals);
        } else {
            delta[n] = "--";
        }

        //if (ret == "") {
        //    ret = delta[n];
        //} else {
        //    ret = delta[n] + " &nbsp; " + ret;
        //}

        if (disp_details) {
            if (delta[n] == "--") {
                ret += "<div class='laps_deltas_details_null' style='color: " + col + "; grid-column: " + (N + 1 - n + disp_total) + "; grid-row: 1;'>" + delta[n] + "</div>";
            } else {
                if (delta[n] <= 0) {
                    ret += "<div class='laps_deltas_details_negative' style='color: " + col + "; grid-column: " + (N + 1 - n + disp_total) + "; grid-row: 1;'>" + delta[n] + "</div>";
                } else {
                    ret += "<div class='laps_deltas_details_positive' style='color: " + col + "; grid-column: " + (N + 1 - n + disp_total) + "; grid-row: 1;'>" + delta[n] + "</div>";
                }
            }
        }
    }

    col = "#000000";
    if (delta[0] != "--") {
        // REM : finalement, il ne vaut mieux pas ajouter le delta en cours au total car cela peut être perturbant puisque que le total va bouger tout le temps ...
        //total += delta[0];
        if (delta[0] <= 0) {
            col = "#00aa00";  // comme le fond est blanc on affiche un vert plus foncé
        } else if (delta[0] > 0) {
            col = "#ff0000";
        }
        delta[0] = reformat_delta(delta[0], 1, nb_decimals);
    }
    //ret = ret + " &nbsp; " + "<span style='color: " + col + "; background-color: #ffffff;'> " + delta[0] + " </span>";

    if (disp_current) {
        if (delta[0] == "--") {
            ret += "<div class='laps_deltas_current_null' style='grid-column: " + (N * disp_details + 2 + disp_total - 1) + "; grid-row: 1; color: " + col + "; background-color: #ffffff;'>" + delta[0] + "</div>";
        } else {
            if (delta[0] <= 0) {
                ret += "<div class='laps_deltas_current_negative' style='grid-column: " + (N * disp_details + 2 + disp_total - 1) + "; grid-row: 1; color: " + col + "; background-color: #ffffff;'>" + delta[0] + "</div>";
            } else {
                ret += "<div class='laps_deltas_current_positive' style='grid-column: " + (N * disp_details + 2 + disp_total - 1) + "; grid-row: 1; color: " + col + "; background-color: #ffffff;'>" + delta[0] + "</div>";
            }

        }
    }


    var bg = "#000000";
    col = "#ffffff";
    if (total > 0) {
        bg = "#ff0000";
    } else if (total <= 0) {
        bg = "#00dd00";
        col = "#000000";
    }

    //ret = "<span style='color: #ffffff; font-weight: bold;'><i><span style='color: " + col + "; background-color: " + bg + ";'> " + reformat_delta(total, 1, nb_decimals) + " </span></i><b>" + " &nbsp; " + ret + "</b></span>";

    if (disp_total) {
        if (total == 0) {
            ret += "<div class='laps_deltas_total_null' style='grid-column: " + 1 + "; grid-row: 1; color: " + col + "; background-color: " + bg + ";'>" + reformat_delta(total, 1, nb_decimals) + "</div>";
        } else {
            if (total <= 0) {
                ret += "<div class='laps_deltas_total_negative' style='grid-column: " + 1 + "; grid-row: 1; color: " + col + "; background-color: " + bg + ";'>" + reformat_delta(total, 1, nb_decimals) + "</div>";
            } else {
                ret += "<div class='laps_deltas_total_positive' style='grid-column: " + 1 + "; grid-row: 1; color: " + col + "; background-color: " + bg + ";'>" + reformat_delta(total, 1, nb_decimals) + "</div>";
            }
        }
    }

    ret += ret_suff;

    return ret;
}
