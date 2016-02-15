# Angular JS Unit Testing App

## Tutorial is at https://app.pluralsight.com/library/courses/angularjs-ngmock-unit-testing/table-of-contents

   * SpecRunner.html file ties everything together.

## Requirements

   ```$ node --version```

   ```$ sudo npm install -g karma-cli```


## Headless (in the cloud) options

### Option 1: Install PhantomJS first.



Phantom JS is needed to work with headless testing. See http://phantomjs.org

For additional (beyond *Chrome*) karma support you need to add special karma-launcher packages. 

See https://www.npmjs.com/browse/keyword/karma-launcher.

E.g. for PhantomJS you need to do:

   ```$ npm install karma-phantomjs-launcher --save-dev```
   
(need to do *after PhantomJS is already installed*, npm install will verify and probably error if you hadn't installed a browser already)


### Option 2: Install karma-phantomjs-launcher and it'll pull the phantomjs as dependency

Looks like https://www.npmjs.com/package/phantomjs-prebuilt is a node module that contains a version of PhantomJS, 
so just `karma-phantomjs-launcher` installation may also pull that to install it quicker. 


