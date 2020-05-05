class Radio_Slideshow {
    constructor(slideshow_name, radio_buttons_name, debug, initialization_slide, initialization_radio) {
        this._slideshow_id = "#" + $w(slideshow_name).id;
        this._radio_buttons_id = "#" + $w(radio_buttons_name).id;
        this._debug_bool = debug;

        if (this._debug_bool) { console.log(this._slideshow_id + " has an initial slide value of " + initialization_slide + " and the radio buttons modifier " + this._radio_buttons_id + " which has an initial value of " + initialization_radio + "\n\n"); }

        this._current_radio_value = initialization_radio;

        this._switch_slide(initialization_slide)
        this._set_radio_position(initialization_radio);
    }

    _switch_slide(_new_slide_value) {
        if (this._debug_bool) { console.log(this._slideshow_id + " had a value of " + $w(this._slideshow_id).currentIndex + " which changed to " + _new_slide_value + "\n"); }

        $w(this._slideshow_id).changeSlide(_new_slide_value);
    }

    update_current_radio_value() {
        this._current_radio_value = $w(this._radio_buttons_id).value;
        this._current_radio_value = parseInt(this._current_radio_value, 10);

        //Update current slide to new slide
        this._switch_slide(this._current_radio_value);
    }

    _set_radio_position(_set_value) {
        $w(this._radio_buttons_id).value = _set_value;
    }

    get_current_radio_value() {
        return this._current_radio_value;
    }

    get_radio_buttons_id() {
        return this._radio_buttons_id;
    }

    get_slideshow_id() {
        return this._slideshow_id;
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
    debugging - (true/false) boolean that toggles debugging output to the console
    initial_slide_number - (number) slide number that the slideshow will be set to when initialized
    initial_radio_buttons_value - (number) value that the radio buttons will be set to when initialized*/

    //New radio buttons controlled slideshow
    example_variable_name_here = new Radio_Slideshow("#slideshowName", "#radioButtonsName", debugging, initial_slide_number, initial_radio_buttons_value);
});

//Update changes to the state of inputs here
export function radioButtonsName_change(event) { //Change "radioButtonsName" to the name of your radio buttons
    example_variable_name_here.update_current_radio_value(); //Change "example_variable_name_here" to match your object variable declared above
}