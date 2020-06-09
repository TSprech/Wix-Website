# Wix Corvid Classes for Interactive Design
While Wix offers a variety of interactive elements for building a site, many sites require a variety of other elements. This repository includes the various code used in my personal website to create user interactive elements.

- [Wix Corvid Classes for Interactive Design](#wix-corvid-classes-for-interactive-design)
  - [Usage](#usage)
    - [Enabling Dev Mode](#enabling-dev-mode)
    - [Adding Events for Wix to Recognize](#adding-events-for-wix-to-recognize)
    - [Implementing Classes // For Those Just Starting with JavaScript](#implementing-classes--for-those-just-starting-with-javascript)
  - [Classes](#classes)
    - [Radio Buttons](#radio-buttons)
      - [Elements Required](#elements-required)
    - [Radio Buttons Switch](#radio-buttons-switch)
      - [Elements Required](#elements-required-1)
    - [Slider](#slider)
      - [Elements Required](#elements-required-2)
  - [HTML](#html)
  - [License](#license)

## Usage
### Enabling Dev Mode
![Click "Turn on Dev Mode" under "Dev Mode" in the Wix toolbar](Graphics/EnablingDevMode.png)

![The dev mode "Code" panel, located at the bottom of the page, is where code for each webpage will go](Graphics/DevModePanel.png)

If the code panel is not shown, click "Open" in the bottom right as shown.

![The dev mode "Code" panel is not shown, click "Open" in the far right corner](Graphics/DevModePanel.png)

### Adding Events for Wix to Recognize
Wix has a property panel which allows for the attachment of events to function names. It is important to set each property up correctly otherwise the elements will not work. The following images show how to properly set it up.

![Ensure the Property Panel is enabled under Tools](Graphics/EnablingPropertiesPanel.png)

![In the Properties Panel, hover over an option and click the + sign next to it](Graphics/onChangePlus.png)
![Go to the end of the selection and delete the _1 at the end of it](Graphics/Delete_1.png)
![In the end there should be no _1 at the end](Graphics/FinalResult.png)

### Implementing Classes // For Those Just Starting with JavaScript
1. The only thing in the Dev Panel should be an onReady function:
```JS
$w.onReady(function () {
  //TODO: write your page related code here...

});
```

2. Classes are copied then pasted outside the onReady function at the top of the Dev Panel:
```JS
class Class_Name_Here {
  //Code for class
}

$w.onReady(function () {
  //TODO: write your page related code here...

});
```

1. A variable must be created outside the onReady function which will hold each instance of a class:
```JS
class Class_Name_Here {
  //Code for class
}

var example_variable_name_here;

$w.onReady(function () {
  //TODO: write your page related code here...

});
```

3. All constructors need to be instantiated inside the Wix onReady function:
```JS
class Class_Name_Here {
  //Code for class
}

var example_variable_name_here;

$w.onReady(function () {
  //TODO: write your page related code here...
  example_variable_name_here = new Class_Name("Constructors");
});
```
4. Event functions are placed outside the onReady function:
```JS
class Class_Name_Here {
  //Code for class
}

var example_variable_name_here;

$w.onReady(function () {
  //TODO: write your page related code here...
  example_variable_name_here = new Class_Name("Constructors");
});

export function object_change(event) {
    example_variable_name_here.class_update_function();
}
```

For more examples on how to use the classes, see some of the example files for greater detail on implementation.

## Classes

### Radio Buttons
#### Elements Required
- [Slideshow](https://www.wix.com/corvid/reference/$w.Slideshow.html)
- [Radio Button Group](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html)

The Radio Buttons Class gives the user a way to interact with a slideshow using a radio button group to give them distinct, labeled options instead of the typical scrolling slideshow.

### Radio Buttons Switch
#### Elements Required
- [Slideshow](https://www.wix.com/corvid/reference/$w.Slideshow.html)
- [Radio Button Group](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html)
- [Switch](https://www.wix.com/corvid/reference/$w.Switch.html)

The Radio Button Switch Class allows a modifier switch to be utilized with the Radio Buttons Class which takes a slideshow, divides it in half, and uses a switch element to move between the first half of the slideshow and the second, giving it the feeling of a completely different set of photos.

### Slider
#### Elements Required
- [Slideshow](https://www.wix.com/corvid/reference/$w.Slideshow.html)
- [Slider](https://www.wix.com/corvid/reference/$w.Slider.html)

The Slider Class is meant to allow users to view multiple forms or iterations of something without needing to click through multiple slides or buttons. It works best once the images are cached in the browser, then the images can be quickly scrubbed through.

## HTML
Syntax color highlighting is enabled via [Highlight.js](https://highlightjs.org/)

Wix requires a hosted form of Highlight.js and more info can be found at the [Github](https://github.com/highlightjs/highlight.js)

All HTML code required for highlighting can be found in the Highlight_JS folder

## License
[MIT](https://choosealicense.com/licenses/mit/)