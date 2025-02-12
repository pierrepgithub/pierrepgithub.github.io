
// Définition des options spéciales du dashboard
// IMPORTANT! Tableau à modifier dans le fichier dashboard_special_options.js ainsi que dans var_param.py
function define_special_options_list() {

    special_options_list["conditional_colors_options"] = {
        'humidity': 1,
        'air_press': 1,
        'air_dens': 1,
        'fog': 1,
        'rain': 1,
        'track_wetness': 1,
        'air_temp': 1,
        'track_temp': 1,

        'rpm': 1,
        'speed': 1,

        'pit_speed_diff': 1,
        'pit_entry_speed': 1,
        'pit_entry_distance_speedlimit': 1,
        'pit_entry_distance_brakestart': 1,
        'pit_entry_distance': 1,
        'pit_stall_distance': 1,

        'oil': 1,
        'water': 1,

        'max_decel_lon': 1,
        'max_force_lat': 1,
        'max_accel_lon': 1,

        'iracing_fuel_add': 1,
        'iracing_compound_selected': 1,
        'weather_declared_wet': 1,

        'TireSetsAvailable': 1,
        'LeftTireSetsAvailable': 1,
        'RightTireSetsAvailable': 1,
        'FrontTireSetsAvailable': 1,
        'RearTireSetsAvailable': 1,
        'RRTiresAvailable': 1,
        'RFTiresAvailable': 1,
        'LFTiresAvailable': 1,
        'LRTiresAvailable': 1,

        'RRpressure': 1,
        'RFpressure': 1,
        'LFpressure': 1,
        'LRpressure': 1,
        'RRtempL': 1,
        'RRtempM': 1,
        'RRtempR': 1,
        'RFtempL': 1,
        'RFtempM': 1,
        'RFtempR': 1,
        'LFtempL': 1,
        'LFtempM': 1,
        'LFtempR': 1,
        'LRtempL': 1,
        'LRtempM': 1,
        'LRtempR': 1,
        'RRwearL': 1,
        'RRwearM': 1,
        'RRwearR': 1,
        'RFwearL': 1,
        'RFwearM': 1,
        'RFwearR': 1,
        'LFwearL': 1,
        'LFwearM': 1,
        'LFwearR': 1,
        'LRwearL': 1,
        'LRwearM': 1,
        'LRwearR': 1,

        'tank': 1,
        'timeremain': 1,
        'estlaps': 1,
        'estlaps_white_bar_pct': 1,
        'time_with_fuel': 1,
        'nblaps_before_pit_window': 1,
        'nblaps_to_equalize_stints': 1,
        'lapsremain': 1,
        'lapsremain_orange_bar_pct': 1,
        'lapsremain_gold_line_pct': 1,
        'refuel_mode': 1,
        'calculations_mode': 1,
        'fuelneed': 1,
        'fuelneed1': 1,
        'fuelneed5': 1,
        'fuelneedMAX': 1,
        'refuel_min': 1,
        'refuel_avg': 1,
        'refuel_avg_now': 1,
        'last_partial_fuel_fill': 1,
        'conso': 1,
        'conso1': 1,
        'conso5': 1,
        'consoMAX': 1,
        'target_stint_conso': 1,
        'target_stint_deltaconso': 1,
        'target_stint_nblaps_dashinfo': 1,
        'target_stint_plus1_conso': 1,
        'target_stint_plus1_deltaconso': 1,
        'target_stint_moins1_conso': 1,
        'target_stint_moins1_deltaconso': 1,
        'target_conso': 1,
        'est_conso': 1,
        'fuel_end': 1,
        'nbpits': 1,
        'nextpittimelost': 1,

        'pre_pos': 1,
        'pre_pos2': 1,
        'pre_cpos': 1,
        'pre_cpos2': 1,
        'pre_ir': 1,
        'pre_track_status': 1,

        'me_pos': 1,
        'me_pos2': 1,
        'me_cpos': 1,
        'me_cpos2': 1,
        'delta_best': 1,
        'delta_last': 1,
        'delta_reference': 1,
        'inc': 1,
        'points': 1,

        'post_pos': 1,
        'post_pos2': 1,
        'post_cpos': 1,
        'post_cpos2': 1,
        'post_ir': 1,
        'post_track_status': 1,

        'b_cont': 1,
        'brake2': 1,
        'brake3': 1,
        'peak_brake_pressure': 1,
        't_cont': 1,
        'throttle2': 1,
        'throttle3': 1,
        'c_cont': 1,
        'clutch2': 1,
        'ffbpct_cont': 1,
        'ffb': 1,
        'ffb2': 1,

        'bb': 1,
        'boo': 1,
        'wj': 1,

        'ers': 1,
        'ers_bar': 1,
        'ersco': 1,
        'mgul': 1,
        'mgu': 1,
        'regen_lap': 1,
        'regen_turn': 1,
        'regen_gain': 1,

        'iracing_fuel_box': 1,
        'iracing_windshield_box': 1,
        'iracing_fastrepair_box': 1,
        'iracing_lf_tire_box': 1,
        'iracing_rf_tire_box': 1,
        'iracing_lr_tire_box': 1,
        'iracing_rr_tire_box': 1,

    }

    special_options_list["compass_options"] = {
        "compass": 1,
    }

    special_options_list["checkmark_options"] = {
        "iracing_fuel_box": 1,
        "iracing_windshield_box": 1,
        "iracing_fastrepair_box": 1,
        "iracing_lf_tire_box": 1,
        "iracing_rf_tire_box": 1,
        "iracing_lr_tire_box": 1,
        "iracing_rr_tire_box": 1,
    }

    special_options_list["laps_deltas_options"] = {
        "pre_laps_deltas": 1,
        "post_laps_deltas": 1,
    }

    special_options_list["deltas_options"] = {
        "delta_avg": 1,
        "delta_tot": 1,
        "delta_tot0": 1,
        "delta_tot2": 1,
        "delta_best": 1,
        "delta_last": 1,
        "delta_reference": 1,
    }

    special_options_list["names_option"] = {
        "leader_name": 1,
        "cleader_name": 1,
        "pre_name": 1,
        "me_name": 1,
        "post_name": 1,
    }

    special_options_list["clock_options"] = {
        "time_of_day": 1,
        "time": 1,
    }

    special_options_list["add_unit_str"] = {
        'humidity': 1,
        'fog': 1,
        'rain': 1,
        'track_wetness': 1,
        'wind_dir_deg': 1,
        'wind_speed': 1,
        'air_temp': 1,
        'track_temp': 1,
        'oil': 1,
        'water': 1,
        'estlaps_white_bar_pct': 1,
        'lapsremain_orange_bar_pct': 1,
        'nextpittimelost': 1,
        'pit_entry_distance_speedlimit': 1,
        'pit_entry_distance_brakestart': 1,
        'pit_entry_distance': 1,
        'pit_stall_distance': 1,
    }

    special_options_list["add_pct_str"] = {
        'RRwearL': 1,
        'RRwearM': 1,
        'RRwearR': 1,
        'RFwearL': 1,
        'RFwearM': 1,
        'RFwearR': 1,
        'LFwearL': 1,
        'LFwearM': 1,
        'LFwearR': 1,
        'LRwearL': 1,
        'LRwearM': 1,
        'LRwearR': 1,
    }

    special_options_list["add_hash_option"] = {
        "pre_num": 1,
        "me_num": 1,
        "post_num": 1,
    }

    special_options_list["track_usage_option"] = {
        "track_usage": 1,
    }

    special_options_list["gauge_opacity_option"] = {
        "lapsremain": 1,
        "fuelneed": 1,
        "fuelneed1": 1,
        "fuelneed5": 1,
        "fuelneedMAX": 1,
        "estlaps": 1,
        "nbpits": 1,
    }

    special_options_list["lapsremain_options"] = {
        "lapsremain": 1,
    }

    special_options_list["fuelneedx_options"] = {
        "fuelneed": 1,
        "fuelneed1": 1,
        "fuelneed5": 1,
        "fuelneedMAX": 1,
    }

    special_options_list["estlaps_options"] = {
        "estlaps": 1,
    }

    special_options_list["nblaps_race_options"] = {
        "nblaps_race_winner": 1,
        "nblaps_race_driver": 1,
    }

    special_options_list["nbpits_options"] = {
        "nbpits": 1,
    }

    special_options_list["estlaptime_option"] = {
        "me_estlaptime": 1,
    }

    special_options_list["rpm_leds_color_options"] = {
        "rpm_leds": 1,
    }

    //add_carclasscolor_option_list = {};
    //add_carclasscolor_option_list["pre"] = {
    special_options_list["add_carclasscolor_option_pre"] = {
        "pre_pos": 1,
        "pre_pos2": 1,
        "pre_cpos": 1,
        "pre_cpos2": 1,
        "pre_num": 1,
        "pre_gain": 1,
        "pre_cgain": 1,
        "pre_best": 1,
        "pre_last": 1,
        "pre_rel": 1,
        "pre_stint": 1,
        "pre_name": 1,
        "pre_topspeed": 1,
        "pre_max_speed": 1,
        "pre_apex_speed": 1,
        "pre_p2p": 1,
        "pre_lic": 1,
        "pre_ir": 1,
        "pre_track_status": 1,
        "pre_tire_compound": 1,
        "pre_tires_stints": 1,
        "pre_tires_nb_changes": 1,
        "pre_nblaps_short_on_fuel": 1,
        "pre_club_name": 1,
        "pre_car_name": 1,
    }
    //add_carclasscolor_option_list["me"] = {
    special_options_list["add_carclasscolor_option_me"] = {
        "me_pos": 1,
        "me_pos2": 1,
        "me_cpos": 1,
        "me_cpos2": 1,
        "me_num": 1,
        "me_gain": 1,
        "me_cgain": 1,
        "me_best": 1,
        "me_last": 1,
        "me_current": 1,
        "me_estlaptime": 1,
        "me_stint": 1,
        "me_lc": 1,
        "me_name": 1,
        "delta_best": 1,
        "delta_last": 1,
        "reference_laptime": 1,
        "delta_reference": 1,
        "me_gap": 1,
        "me_cgap": 1,
        "me_topspeed": 1,
        "me_max_speed": 1,
        "me_apex_speed": 1,
        "delta_avg": 1,
        "delta_tot0": 1,
        "delta_tot": 1,
        "delta_tot2": 1,
        "inc": 1,
        "points": 1,
        "me_p2p": 1,
        "me_tire_compound": 1,
        "me_tires_stints": 1,
        "me_tires_nb_changes": 1,
        "me_nblaps_short_on_fuel": 1,
        "me_club_name": 1,
        "me_car_name": 1,
    }
    //add_carclasscolor_option_list["post"] = {
    special_options_list["add_carclasscolor_option_post"] = {
        "post_pos": 1,
        "post_pos2": 1,
        "post_cpos": 1,
        "post_cpos2": 1,
        "post_num": 1,
        "post_gain": 1,
        "post_cgain": 1,
        "post_best": 1,
        "post_last": 1,
        "post_rel": 1,
        "post_stint": 1,
        "post_name": 1,
        "post_topspeed": 1,
        "post_max_speed": 1,
        "post_apex_speed": 1,
        "post_p2p": 1,
        "post_lic": 1,
        "post_ir": 1,
        "post_track_status": 1,
        "post_tire_compound": 1,
        "post_tires_stints": 1,
        "post_tires_nb_changes": 1,
        "post_nblaps_short_on_fuel": 1,
        "post_club_name": 1,
        "post_car_name": 1,
    }
    special_options_list["add_carclasscolor_option"] = $.extend(true, special_options_list["add_carclasscolor_option_pre"], special_options_list["add_carclasscolor_option_me"], special_options_list["add_carclasscolor_option_post"]);

    special_options_list["bg_blink_options"] = {
        "pit_limiter_light": 1,
        "abs_light": 1,
        "pre_p2p_light": 1,
        "me_p2p_light": 1,
        "post_p2p_light": 1,
    }

}
