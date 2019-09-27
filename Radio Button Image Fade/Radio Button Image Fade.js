// For full API documentation, including code examples, visit http://wix.to/94BuAAs
let FadeOptions = {
	"duration": 750,
	"delay": 0
};

$w.onReady(function () {});

export function radioGroup1_change(event) {
	let RadioValue = $w("#radioGroup1").value;
	console.log(RadioValue);
	switch (RadioValue) {
	case 'Radio button1':
		$w("#image1").hide("fade", FadeOptions);
		$w("#image2").show("fade", FadeOptions);
		$w("#image3").hide("fade", FadeOptions);
		break;
	case 'Radio button2':
		$w("#image1").show("fade", FadeOptions);
		$w("#image2").hide("fade", FadeOptions);
		$w("#image3").hide("fade", FadeOptions);
		break;
	case 'Radio button3':
		$w("#image1").hide("fade", FadeOptions);
		$w("#image2").hide("fade", FadeOptions);
		$w("#image3").show("fade", FadeOptions);
		break;
	}
}