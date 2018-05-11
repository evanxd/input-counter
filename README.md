# Input Counter
A JavaScript Bookmarklet to count the keyboard and mouse inputs times on a web app.

## Usage
To print the all input times, keyboard input times, and mouse input times:
```js
var counter = new InputCounter();
counter.oninput = function(e) {
  console.log(e.inputTimes, e.keyboardInputTimes, e.mouseInputTimes);
};
```
