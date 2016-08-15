# YouTube Search App Example

### Use Bootstrap for styling the application.

See: [Bootstrap 4](http://v4-alpha.getbootstrap.com/getting-started/download/)

* Because we are not using NPM, just download and copy what is on the `dist` directory.
* Download [Tether](http://tether.io/) which Bootstrap requires. Copy what is on `dist` directory.

### HTML5 Boilerplate

* This project is a barebones HTML5 project with all dependencies needed for cross-browser compatibility. Simply download and copy all contents of unzipped file to the folder of your project. Choose `merge` and not `replace`.
* Remove `google analytics code` on `index.html`
* Do not delete the comments on the `index.html` file because IE will display that. Read about **conditional statements** [here](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx). You're practically saying you do not support their browser.

### Use jQuery

* The HTML5 boilerplate has a `vendor` directory. To be consistent, let's move all the dependencies like bootstrap on that directory.

### Load order is important

* Make sure you load `normalize` before your css files, and `jquery` before all JS dependencies.
* We primarily need `normalize` for cross-browser compatibility. Read through the CSS file if you have time.