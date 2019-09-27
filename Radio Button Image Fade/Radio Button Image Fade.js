// For full API documentation, including code examples, visit http://wix.to/94BuAAs

//These set up the durations
let FadeOptions = {
	"duration": 750,
	"delay": 0
};

function ImageHide(ActiveNumber, NumOfPhotos, StartPhotoNum) {
	var ChangeImg; // Used to store the ID of the image to be hidden/shown

	for (var i = StartPhotoNum; i <= NumOfPhotos; i++) {
        // If the ID of the photo that is to be shown comes up
        // show that image then skip to the next iteration of hiding
		if (i == ActiveNumber) {
			ChangeImg = "#image" + i;
			console.log("Showing" + ChangeImg);
			$w(ChangeImg).show("fade", FadeOptions);
			continue;
		}
        // Hide all other images
		ChangeImg = "#image" + i;
		console.log("Hiding" + ChangeImg);
		$w(ChangeImg).hide("fade", FadeOptions);
	}
}

$w.onReady(function () {});

//Change the "radioGroup1" to the ID of the radio button group
export function radioGroup1_change(event) {
	let RadioValue = $w("#radioGroup1").value; //Number the values of the radio buttons to make it simpler
	console.log("Radio Button Group Value: " + RadioValue);
    
    //Call the hiding and showing image funciton
	ImageHide(RadioValue, 3, 1);
}