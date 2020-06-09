class Radio_Switch_Slideshow {
	constructor(slideshow_name, radio_button_group_name, switch_name, debug, initialization_slide, initialization_radio, initialization_switch) {
		this._slideshow_id = "#" + $w(slideshow_name).id;
		this._radio_buttons_id = "#" + $w(radio_button_group_name).id;
		this._switch_id = "#" + $w(switch_name).id;
		this._debug_bool = debug;

		this._slides = $w(this._slideshow_id).slides
		this._number_of_slides = parseInt(this._slides.length, 10);

		this._radio_buttons_options = $w(this._radio_buttons_id).options;
		for (this._lcv = 0; this._lcv < this._number_of_slides / 2; this._lcv++) {
			this._radio_buttons_options[this._lcv].value = this._lcv;
		}

		for (this._lcv = 0; this._lcv < this._number_of_slides / 2; this._lcv++) {
			console.log(this._radio_buttons_options[this._lcv].value);
		}

		if (this._debug_bool) { console.log(this._slideshow_id + " has an initial slide value of " + initialization_slide + " and has " + this._number_of_slides + " slides," + " and the radio buttons modifier " + this._radio_buttons_id + " which has an initial value of " + initialization_radio + " with a switch modifier " + this._switch_id + "which has an initial value of " + initialization_switch + "\n\n"); }

		this._current_radio_value = initialization_radio;
		this._current_switch_value = initialization_switch;

		this._switch_slide(initialization_slide);
		this._set_radio_position(initialization_radio);
		this._set_switch_position(initialization_switch);
	}

	_switch_slide(_new_slide_value) {
		if (this._debug_bool) { console.log(this._slideshow_id + " had a value of " + $w(this._slideshow_id).currentIndex + " which changed to " + _new_slide_value + "\n"); }

		$w(this._slideshow_id).changeSlide(_new_slide_value);
	}

	update_current_radio_value() {
		this._current_radio_value = $w(this._radio_buttons_id).value;
		this._current_radio_value = parseInt(this._current_radio_value, 10);

		if (this._current_switch_value) {
			this._current_radio_value += this._number_of_slides / 2;
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
		if (this._debug_bool) { console.log(this._switch_id + " had a value of " + this._current_switch_value + " which changed to " + _new_boolean + "\n"); }

		this._current_switch_value = _new_boolean;
		if (_add_subtract === '+') {
			this._current_radio_value += this._number_of_slides / 2;
		} else {
			this._current_radio_value -= this._number_of_slides / 2;
		}
		this._current_radio_value = parseInt(this._current_radio_value, 10);
		this._switch_slide(this._current_radio_value);
	}

	_set_radio_position(_set_value) {
		$w(this._radio_buttons_id).value = _set_value;
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

	get_radio_buttons_id() {
		return this._radio_buttons_id;
	}

	get_current_switch_id() {
		return this._switch_id;
	}

	get_slideshow_id() {
		return this._slideshow_id;
	}

	get_slideshow_length() {
		return this._number_of_slides;
	}
}

//Place object variables here
var example_variable_name_here; //Name your radio buttons controlled slideshow object variable here

//Construct objects here
$w.onReady(function () {
    /*Change the following parameters to suite your needs
    example_variable_name_here - must match your object variable name declared above
    "#slideshowName" - (string) replace slideshowName with the ID of the slideshow that will be controlled
	"#radioButtonsName" - (string) replace radioButtonsName with the ID of the radio buttons that will control the slideshow
	"#switchName" - (string) replace switchName with the ID of the switch modifier
    debugging - (boolean) toggles debugging output to the console
    initial_slide_number - (number) slide number that the slideshow will be set to when initialized
	initial_radio_buttons_value - (number) value that the radio buttons will be set to when initialized
	initial_switch_value - (boolean) sets the switch to a default on or off position*/

	//New radio buttons controlled slideshow
	example_variable_name_here = new Radio_Switch_Slideshow("#slideshowName", "#radioButtonsName", "#switchName", debugging, initial_slide_number, initial_radio_buttons_value, initial_switch_value);
});

//Update changes to the state of inputs here
export function radioButtonsName_change(event) { //Change "radioButtonsName" to the name of your radio buttons
	example_variable_name_here.update_current_radio_value(); //Change "example_variable_name_here" to match your object variable declared above
}

export function switchName_change(event) { //Change "switchName" to the name of your switch
	example_variable_name_here.update_current_switch_position(); //Change "example_variable_name_here" to match your object variable declared above
}