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
		console.log("\nSlider Max = " + this._slider_max_int);
		$w(this._slider_id).max = (this._slider_max_int - 1);
	}

	_set_slider_min(_slider_min) {
		this._slider_min_int = parseInt(_slider_min, 10);
		console.log("\nSlider Min = " + this._slider_min_int);
		$w(this._slider_id).min = this._slider_min_int;
	}

	_init_slider_length() {
		this._slides_array = $w(this._slideshow_id).slides
		this._slideshow_length = this._slides_array.length;
		//this._first_slide_value = this._slides_array[0].value;
		console.log("\nSlider Length = " + this._slideshow_length + " " + this._first_slide_value + " " + this._slideshow_id);
		//this._set_slider_min(this._first_slide_value);
		this._set_slider_min(0);
		this._set_slider_max(this._slideshow_length);
	}

	_switch_slide(_new_slide_value) {
		$w(this._slideshow_id).changeSlide(_new_slide_value);

		if (this._debug_bool) { //If debugging is enabled, print out input variable states
			this._slider_console_debug();
			console.log("\n");
		}
	}

	update_current_slider_value() {
		this._current_slider_value = $w(this._slider_id).value;
		this._current_slider_value = parseInt(this._current_slider_value, 10);

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

	_slider_console_debug() {
		console.log(this._slider_id + " changed to value of " + this._current_slider_value + "\n");
	}
}

//Place object variables here
var heat_press_slide_group;

//Construct objects here
$w.onReady(function () {
	//New radio button group controlled slideshow
	heat_press_slide_group = new Slider_Slideshow("#heatPressSlideshow", "#heatPressSlider", true, 0, 0);
});

//Update changes to the state of inputs here
export function heatPressSlider_change(event) {
	heat_press_slide_group.update_current_slider_value();
}