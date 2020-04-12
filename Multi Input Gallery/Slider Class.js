class Slider_Slideshow {
	constructor(slideshow_name, slider_name, debug, initialization_slide, initialization_slider) {
		this._slideshow_id = "#" + $w(slideshow_name).id;
		this._slider_id = "#" + $w(slider_name).id;
		this._debug_bool = debug;

		this._init_slider_length();

		this._current_slider_value = initialization_slider;

		this._switch_slide(initialization_slide)
		this._set_slider_position(initialization_slider);
	}

	_set_slider_max(_slider_max) {
		this._slider_max_int = parseInt(_slider_max, 10);
		$w(this._slider_id).max = (this._slider_max_int - 1);
	}

	_set_slider_min(_slider_min) {
		this._slider_min_int = parseInt(_slider_min, 10);
		$w(this._slider_id).min = this._slider_min_int;
	}

	_init_slider_length() {
		this._slides_array = $w(this._slideshow_id).slides;
		this._slideshow_length = this._slides_array.length;
		this._slideshow_min_value = 0;

		this._set_slider_min(this._slideshow_min_value);
		this._set_slider_max(this._slideshow_length);

		if (this._debug_bool) { console.log(this._slideshow_id + " has a minimum value of " + this._slideshow_min_value + " and a maximum value of " + this._slideshow_length + "\n"); }
	}

	_switch_slide(_new_slide_value) {
		if (this._debug_bool) { console.log(this._slideshow_id + " had a value of " + $w(this._slideshow_id).currentIndex + " which changed to " + _new_slide_value + "\n"); }

		$w(this._slideshow_id).changeSlide(_new_slide_value);
	}

	update_current_slider_value() {
		if (this._debug_bool) { this._update_current_slider_value_logger = (this._slider_id + " had a value of " + this._current_slider_value); }

		this._current_slider_value = $w(this._slider_id).value;
		this._current_slider_value = parseInt(this._current_slider_value, 10);

		if (this._debug_bool) { console.log(this._update_current_slider_value_logger + " which changed to " + this._current_slider_value + "\n"); } //If debugging is enabled, print out input variable states

		//Update current slide to new slide
		this._switch_slide(this._current_slider_value);
	}

	_set_slider_position(_set_value) {
		$w(this._slider_id).value = _set_value;
	}

	get_current_slider_value() {
		return this._current_slider_value;
	}

	get_slider_button_group_id() {
		return this._slider_id;
	}

	get_slideshow_id() {
		return this._slideshow_id;
	}
}

//Place object variables here
var heat_press_slide_group;

//Construct objects here
$w.onReady(function () {
	//New slider controlled slideshow
	heat_press_slide_group = new Slider_Slideshow("#heatPressSlideshow", "#heatPressSlider", true, 0, 0);
});

//Update changes to the state of inputs here
export function heatPressSlider_change(event) {
	heat_press_slide_group.update_current_slider_value();
}