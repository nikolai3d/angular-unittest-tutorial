# Angular JS Unit Testing App

## Tutorial is at https://app.pluralsight.com/library/courses/angularjs-ngmock-unit-testing/table-of-contents

   * SpecRunner.html file ties everything together.

## Requirements

   ```$ node --version```

   ```$ sudo npm install -g karma-cli```


## Headless (in the cloud) options

For additional (beyond *Chrome*) karma support you need to add special karma-launcher packages.

See https://www.npmjs.com/browse/keyword/karma-launcher.

E.g. for PhantomJS you need to do:

   ```$ npm install karma-phantomjs-launcher --save-dev```

### Option 2: Install karma-phantomjs-launcher and it'll pull the phantomjs as dependency

### Install PhantomJS first.

Phantom JS is needed to work with headless testing. See http://phantomjs.org. *However*, looks like https://www.npmjs.com/package/phantomjs-prebuilt is a node module that contains a version of PhantomJS,
and `karma-phantomjs-launcher` has it as a dependency, so then npm installation may also install ```phantomjs```correctly!
(_Circa February 2016, this option worked fine for C9 Ubuntu (Ubuntu 14.04.2 LTS) and Mac OS X El Capitan 10.11.3_)

If that's not the case, head to http://phantomjs.org to download and install the PhantomJS binary appropriate for your system.
