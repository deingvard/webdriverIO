### Installation
This project is tested on **Node v12.0.0** and above.  While earlier versions of node may be compatible, but they have not been verified.
`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally. To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install `npm install -g  grunt-cli` globally.
`JDK 1.8:` It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.


### Run Some Sample Tests
To execute the entire test suite in local development, you can use any one of the options mentioned below
Option 1: `npm run test-local`. 
Option 2: `grunt webdriver:test-local`.  This executes all spec files in the [`./test/specs/*.js`] directory.

##### Dot
To use the dot reporter just add 'dot' to the reporters array in the config file. The dot reporter prints for each test spec a dot. If colors are enabled on your machine you will see three different colors for dots. Yellow dots mean that at least one browser has executed that spec. A green dot means all browser passed that spec and a red to means that at least one browser failed that spec. All config files have this turned on by default.

##### Spec
Test reporter, that prints detailed results to console.

##### Allure
The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.  Please note, this has been added in .config.
To generate and view an allure report locally, run `npm run allure-report`. A typical Allure report will look like this
