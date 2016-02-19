# Angular JS Unit Testing App

## Tutorial is at https://app.pluralsight.com/library/courses/angularjs-ngmock-unit-testing/table-of-contents

   * SpecRunner.html file ties everything together.

## Requirements

   ```$ node --version```

   ```$ sudo npm install -g karma-cli```


## Headless (in the cloud) options

For headless WebKit scripting, you can use **PhantomJS**

For additional (beyond *Chrome*) karma support you need to add special karma-launcher packages.

See https://www.npmjs.com/browse/keyword/karma-launcher.

E.g. for PhantomJS you need to do:

   ```$ npm install karma-phantomjs-launcher --save-dev```

### PhantomJS installation

Phantom JS is needed to work with headless testing. See http://phantomjs.org. **However**, looks like https://www.npmjs.com/package/phantomjs-prebuilt is a node module that contains a version of PhantomJS,
and `karma-phantomjs-launcher` has it as a dependency, so then npm installation may also install ```phantomjs```correctly!
(_Circa February 2016, this option worked fine for C9 Ubuntu (Ubuntu 14.04.2 LTS) and Mac OS X El Capitan 10.11.3_)

If that's not the case, head to http://phantomjs.org to download and install the PhantomJS binary appropriate for your system.

## Running the code

   * ```$ node index.js``` to run server

   * ```$ npm test``` to run the Jasmine test suite via Karma, with PhantomJS. (also watches the changes and reruns the tests if source files change)

and/or

   * Locally open `SpecRunner.html` in a browser to run the Jasmine test suite in a browser.
