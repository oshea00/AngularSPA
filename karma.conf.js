// Karma configuration
// Generated on Thu Aug 01 2013 15:32:32 GMT-0700 (Pacific Daylight Time)


// base path, that will be used to resolve files and exclude
basePath = 'c:/projects';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'AngularSPA/AngularSPA/Scripts/jquery-1.9.1.min.js',
  'AngularSPA/AngularSPA/Scripts/jquery-ui-1.10.3.custom.js',
  'AngularSPA/AngularSPA/Scripts/bootstrap.js',
  'AngularSPA/AngularSPA/Scripts/underscore.js',
  'AngularSPA/AngularSPA/Scripts/angular.js',
  'AngularSPA/AngularSPA/Scripts/_app.js',
  'AngularSPA/AngularSPA/Scripts/tests/*.js',
  'AngularSPA/AngularSPA/Scripts/services/*.js',
  'AngularSPA/AngularSPA/Scripts/directives/*.js',
  'AngularSPA/AngularSPA/Scripts/controllers/*.js',
  'AngularSPA/AngularSPA/Scripts/tests/*.js',
  'AngularSPA/AngularSPA/Scripts/sinon-1.7.3.js'
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
