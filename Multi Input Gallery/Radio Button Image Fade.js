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
		if (radioModifier){
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