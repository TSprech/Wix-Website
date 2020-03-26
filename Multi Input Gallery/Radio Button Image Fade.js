class Radio_Slideshow {
	constructor(slideshow_name, radio_button_group_name) {
		this._radio_button_group_id = "#" + $w(radio_button_group_name).id;
		this._slideshow_id = "#" + $w(slideshow_name).id;

		var _current_radio_value = 0;
	}

	SwitchSlides(activeNumber) {
		$w(this._slideshow_id).changeSlide(activeNumber);
	}

	update_current_radio_value() {
		this._current_radio_value = $w(this._radio_button_group_id).value;
		console.log(this._current_radio_value);
		this._new_radio_set_value = parseInt(this._current_radio_value, 10);
		$w(this._slideshow_id).changeSlide(this._new_radio_set_value);
	}

	get_radio_button_group_id() {
		return this._radio_button_group_id;
	}

	get_slideshow_id() {
		return this._slideshow_id;
	}
}

var control_panel_slide_group;

$w.onReady(function () {
	//New radio button group controlled slideshow
	control_panel_slide_group = new Radio_Slideshow("#controlPanelSlideshow", "#controlPanelRadio");
});

export function controlPanelRadio_change_1(event) {
	control_panel_slide_group.update_current_radio_value();
	console.log("Radio Change\n");
}



















var radioIdToGet = "#" + "controlPanelRadio";
var slideshowIdToGet = "#" + "controlPanelSlideshow";
var radioId;
var switchId;

var radioNum = 0;

function SwitchSlides(activeNumber) {
	$w(slideshowId).changeSlide(activeNumber);
}

$w.onReady(function () {
	radioId = "#" + $w(radioIdToGet).id;
	slideshowId = "#" + $w(slideshowIdToGet).id;
	console.log("SliderId of Element Used = " + radioId);
	console.log("SlideshowId of Element Used = " + slideshowId);
});

//Change the "radioGroup1" to the ID of the radio button group
export function controlPanelRadio_change_1(event) {
	let radioValue = $w(radioId).value; //Number the values of the radio buttons to make it simpler
	console.log(radioValue);
	radioNum = parseInt(radioValue, 10);
	if (radioModifier) {
		radioNum += 4;
	}
	SwitchSlides(radioNum);
}

















var radioIdToGet = "#" + "radioGroup1";
var switchIdToGet = "#" + "switch1";
var radioId;
var switchId;

var radioModifier = false;
var radioNum = 0;

function SwitchSlides(activeNumber) {
	$w("#slideshow1").changeSlide(activeNumber);
}

$w.onReady(function () {
	radioId = "#" + $w(radioIdToGet).id;
	switchId = "#" + $w(switchIdToGet).id;
	console.log("RadioId of Element Used = " + radioId);
	console.log("SwitchId of Element Used = " + switchId);
});

export function switch1_change(event) {
	if ($w(switchId).checked) {
		radioNum += 4;
		radioModifier = true;
		SwitchSlides(radioNum);
	} else {
		radioModifier = false;
		radioNum -= 4;
		SwitchSlides(radioNum);
	}
	console.log("Switch Value = " + radioModifier);
}

//Change the "radioGroup1" to the ID of the radio button group
export function radioGroup1_change_1(event) {
	let radioValue = $w(radioId).value; //Number the values of the radio buttons to make it simpler
	console.log(radioValue);
	radioNum = parseInt(radioValue, 10);
	if (radioModifier) {
		radioNum += 4;
	}
	SwitchSlides(radioNum);
}