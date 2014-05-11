Pull and Zoom
=============
pullAndZoom.js is a library that zoom the header while pulling a scrollable div, it mimic the behaviour of the profile card of the iOs native Twitter app. A small gif is worth a thousand words:

Chrome on Android
-----------------

![Demo on Android Chrome](http://www.sandropaganotti.com/wp-content/goodies/misc/android.gif)

Safari on iOs7
--------------

![Demo on iPhone](http://www.sandropaganotti.com/wp-content/goodies/misc/iphone.gif)

Getting Started
===============
The library requires [iScroll](http://iscrolljs.com/ "iScroll") to work properly on Chrome; on iOs it uses the native scroll. If the browser is not supported everything degrades gracefully to a standard scroll.

To use this library you need to initialize it as follow:

```
window.addEventListener('load',function(){
  new pullAndZoom({
    // the wrapper of the scrolling area
    mainPage: document.getElementById('mainpage'),
    // the wrapper of the zooming area
    backgroundImage: document.getElementById('background_image')
  }).ping();
});
```
Please refer to `demo.html` and `demo.css` in this repository for an example of the HTML and CSS structure required by this library.

Working Demo
============
A working demo is available here: [pullAndZoom working demo](http://www.sandropaganotti.com/wp-content/goodies/misc/tws/demo.html), you can also use this short URL: `bit.ly/tws-demo`
