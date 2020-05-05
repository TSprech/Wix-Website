class Radio_Slideshow {
	constructor(slideshow_name, radio_button_group_name, debug, initialization_slide, initialization_radio) {
		this._slideshow_id = "#" + $w(slideshow_name).id;
		this._radio_button_group_id = "#" + $w(radio_button_group_name).id;
		this._debug_bool = debug;

		this._current_radio_value = initialization_radio;

		this._switch_slide(initialization_slide)
		this._set_radio_position(initialization_radio);
	}

	_switch_slide(_new_slide_value) {
		$w(this._slideshow_id).changeSlide(_new_slide_value);

		if (this._debug_bool) { //If debugging is enabled, print out input variable states
			this._radio_console_debug();
			console.log("\n");
		}
	}

	update_current_radio_value() {
		this._current_radio_value = $w(this._radio_button_group_id).value;
		this._current_radio_value = parseInt(this._current_radio_value, 10);

		//Update current slide to new slide
		this._switch_slide(this._current_radio_value);
	}

	_set_radio_position(_set_value) {
		$w(this._radio_button_group_id).value = _set_value;
	}

	get_current_radio_value() {
		return this._current_radio_value;
	}

	get_radio_button_group_id() {
		return this._radio_button_group_id;
	}

	get_slideshow_id() {
		return this._slideshow_id;
	}

	_radio_console_debug() {
		console.log(this._radio_button_group_id + " changed to value of " + this._current_radio_value + "\n");
	}
}

class Radio_Switch_Slideshow {
	constructor(slideshow_name, radio_button_group_name, switch_name, debug, initialization_slide, initialization_radio, initialization_switch) {
		this._slideshow_id = "#" + $w(slideshow_name).id;
		this._radio_button_group_id = "#" + $w(radio_button_group_name).id;
		this._switch_id = "#" + $w(switch_name).id;
		this._debug_bool = debug;

		this._current_radio_value = initialization_radio;
		this._current_switch_value = initialization_switch;

		this._switch_slide(initialization_slide);
		this._set_radio_position(initialization_radio);
		this._set_switch_position(initialization_switch);
	}

	_switch_slide(_new_slide_value) {
		$w(this._slideshow_id).changeSlide(_new_slide_value);

		if (this._debug_bool) { //If debugging is enabled, print out input variable states
			this._radio_console_debug();
			this._switch_console_debug();
			console.log("\n");
		}
	}

	update_current_radio_value() {
		this._current_radio_value = $w(this._radio_button_group_id).value;
		this._current_radio_value = parseInt(this._current_radio_value, 10);

		if (this._current_switch_value) {
			this._current_radio_value += 4;
		}

		//Update current slide to new slide
		this._switch_slide(this._current_radio_value);
	}

	update_current_switch_position() {
		if ($w(this._switch_id).checked) {
			this._change_switch_position(true, '+');
		} else {
			this._change_switch_position(false, '-');
		}
	}

	_change_switch_position(_new_boolean, _add_subtract) {
		this._current_switch_value = _new_boolean;
		if (_add_subtract === '+') {
			this._current_radio_value += 4;
		} else {
			this._current_radio_value -= 4;
		}
		this._current_radio_value = parseInt(this._current_radio_value, 10);
		this._switch_slide(this._current_radio_value);
	}

	_set_radio_position(_set_value) {
		$w(this._radio_button_group_id).value = _set_value;
	}

	_set_switch_position(_set_boolean) {
		$w(this._switch_id).checked = _set_boolean;
	}

	get_current_radio_value() {
		return this._current_radio_value;
	}

	get_current_switch_value() {
		if (this._current_switch_value) {
			return "true";
		} else {
			return "false";
		}
	}

	get_radio_button_group_id() {
		return this._radio_button_group_id;
	}

	get_current_switch_id() {
		return this._switch_id;
	}

	get_slideshow_id() {
		return this._slideshow_id;
	}

	_radio_console_debug() {
		console.log(this._radio_button_group_id + " changed to value of " + this._current_radio_value + "\n");
	}

	_switch_console_debug() {
		console.log(this._switch_id + " switched to value of " + this._current_switch_value + "\n");
	}
}

//Place object variables here
var chassis_slide_group;
var control_panel_slide_group;
var smug_bay_slide_group;

//Construct objects here
$w.onReady(function () {
	//New radio button group controlled slideshow
	chassis_slide_group = new Radio_Slideshow("#chassisSlideshow", "#chassisRadio", true, 0, 0);
	control_panel_slide_group = new Radio_Slideshow("#controlPanelSlideshow", "#controlPanelRadio", true, 0, 0);
	smug_bay_slide_group = new Radio_Switch_Slideshow("#smugBaySlideshow", "#smugBayRadio", "#smugBaySwitch", true, 0, 0, false);
});

//Update changes to the state of inputs here
export function controlPanelRadio_change(event) {
	control_panel_slide_group.update_current_radio_value();
}

export function chassisRadio_change(event) {
	chassis_slide_group.update_current_radio_value();
}

export function smugBayRadio_change(event) {
	smug_bay_slide_group.update_current_radio_value();
}

export function smugBaySwitch_change(event) {
	smug_bay_slide_group.update_current_switch_position();
}