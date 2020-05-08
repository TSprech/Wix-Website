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
![Click "Turn on Dev Mode" under "Dev Mode" in the Wix toolbar](https://github.com/TSprech/Wix-Website/blob/README/Graphics/EnablingDevMode.png)

![The dev mode "Code" panel, located at the bottom of the page, is where code for each webpage will go](https://github.com/TSprech/Wix-Website/blob/README/Graphics/DevModeFlyout.png)

If the code panel is not shown, click "Open" in the bottom right as shown.

![The dev mode "Code" panel is not shown, click "Open" in the far right corner](https://github.com/TSprech/Wix-Website/blob/README/Graphics/DevModePanel.png)

### Adding Events for Wix to Recognize
Wix has a property panel which allows for the attachment of events to function names. It is important to set each property up correctly otherwise the elements will not work. The following images show how to properly set it up.

Make sure the Properties Panel is enabled

<img src="https://github.com/TSprech/Wix-Website/blob/README/Graphics/EnablingPropertiesPanel.png" alt="Ensure the Property Panel is enabled under Tools" width="346" height="330">

Hover over an option in the Properties Panel and click the + sign next to it

<img src="https://github.com/TSprech/Wix-Website/blob/README/Graphics/onChangePlus.png" alt="In the Properties Panel, hover over an option and click the + sign next to it" width="166" height="317">

Go to the end of the selection and delete the "_1" at the end of it

<img src="https://github.com/TSprech/Wix-Website/blob/README/Graphics/Delete_1.png" alt="In the Properties Panel, hover over an option and click the + sign next to it" width="166" height="317">

In the end it should look like this

<img src="https://github.com/TSprech/Wix-Website/blob/README/Graphics/FinalResult.png" alt="In the Properties Panel, hover over an option and click the + sign next to it" width="166" height="317">

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

## Classes

### Radio Buttons
#### Elements Required
- [Slideshow](https://www.wix.com/corvid/reference/$w.Slideshow.html)
- [Radio Button Group](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html)

### Radio Buttons Switch
#### Elements Required
- [Slideshow](https://www.wix.com/corvid/reference/$w.Slideshow.html)
- [Radio Button Group](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html)
- [Switch](https://www.wix.com/corvid/reference/$w.Switch.html)

### Slider
#### Elements Required
- [Slideshow](https://www.wix.com/corvid/reference/$w.Slideshow.html)
- [Slider](https://www.wix.com/corvid/reference/$w.Slider.html)

## HTML


## License
[MIT](https://choosealicense.com/licenses/mit/)