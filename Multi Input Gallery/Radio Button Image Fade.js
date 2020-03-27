class Radio_Slideshow {
	constructor(slideshow_name, radio_button_group_name) {
		this._slideshow_id = "#" + $w(slideshow_name).id;
		this._radio_button_group_id = "#" + $w(radio_button_group_name).id;

		this._current_radio_value = 0;
	}

	_switch_slide(_new_slide_value) {
		$w(this._slideshow_id).changeSlide(_new_slide_value);
	}

	update_current_radio_value() {
		this._current_radio_value = $w(this._radio_button_group_id).value;
		this._current_radio_value = parseInt(this._current_radio_value, 10);

		//Update current slide to new slide
		this._switch_slide(this._current_radio_value);
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
}

class Radio_Switch_Slideshow {
	constructor(slideshow_name, radio_button_group_name, switch_name) {
		this._slideshow_id = "#" + $w(slideshow_name).id;
		this._radio_button_group_id = "#" + $w(radio_button_group_name).id;
		this._switch_id = "#" + $w(switch_name).id;

		this._current_radio_value = 0;
		this._current_switch_value = false;
	}

	_switch_slide(_new_slide_value) {
		$w(this._slideshow_id).changeSlide(_new_slide_value);
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
			this._current_switch_value = true;
			console.log(this._current_radio_value);
			this._current_radio_value += 4;
			this._current_radio_value = parseInt(this._current_radio_value, 10);
			this._switch_slide(this._current_radio_value);
		} else {
			this._current_switch_value = false;
			console.log(this._current_radio_value);
			this._current_radio_value -= 4;
			this._current_radio_value = parseInt(this._current_radio_value, 10);
			this._switch_slide(this._current_radio_value);
		}
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
}

//Place object variables here
var control_panel_slide_group;
var smug_bay_slide_group

//Construct objects here
$w.onReady(function () {
	//New radio button group controlled slideshow
	control_panel_slide_group = new Radio_Slideshow("#controlPanelSlideshow", "#controlPanelRadio");
	smug_bay_slide_group = new Radio_Switch_Slideshow("#smugBaySlideshow", "#smugBayRadio", "#smugBaySwitch");
});

//Update changes to the state of inputs here
export function controlPanelRadio_change_1(event) {
	control_panel_slide_group.update_current_radio_value();
	console.log(control_panel_slide_group.get_radio_button_group_id() + " changed to value of " + control_panel_slide_group.get_current_radio_value() + "\n\n");
}

export function smugBayRadio_change(event) {
	smug_bay_slide_group.update_current_radio_value();
	console.log(smug_bay_slide_group.get_radio_button_group_id() + " changed to value of " + smug_bay_slide_group.get_current_radio_value() + "\n");
	console.log(smug_bay_slide_group.get_current_switch_id() + " switched to value of " + smug_bay_slide_group.get_current_switch_value() + "\n\n");
}

export function smugBaySwitch_change(event) {
	smug_bay_slide_group.update_current_switch_position();
	console.log(smug_bay_slide_group.get_radio_button_group_id() + " changed to value of " + smug_bay_slide_group.get_current_radio_value() + "\n");
	console.log(smug_bay_slide_group.get_current_switch_id() + " switched to value of " + smug_bay_slide_group.get_current_switch_value() + "\n\n");
}