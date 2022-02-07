# Node version used 15.0.0 

# WebdriverIO - Mocha - Chai Page object model Framework

This project is to create a Page Object Model (POM) framework for UI automation using WebdriverIO, Mocha with Chai assertion library. To follow the coding standards, ESLinter is addapted.

# ![alt text](test/utilities/WebdriverIO-Mocha-Chai.png)

## Supports
* Multi browser automation
* Modes of run via CLI command
* Headless run
* Allure reports
* Failed Screenshots
* Tagging the tests
* Retries of failed tests
* Parallel Run
* ESLinter adapted


## Setup
* Clone this repository
* Navigate to the cloned folder
* Install node and npm using `brew install node`
* Install the dependencies with respect to this project by `npm install`


## To Run the tests

To run the tests with the existing password checked-in to this repo (in `/test/configs/production.js`) one need to have `private.key` file under secret_keys folder. This is to decrypt the encoded password which is implemented using Node-RSA package. Or to simply run the tests in your postman account, replace the username and password values in the `/test/configs/production.js` file.

To run all the tests, one can try
```
npm run test
```
This will run all the tests that matches `/test/*.spec.js`

### Parallel run
If you have multiple specs to run at a time, one can specify the number of threads that can be open in a single run through,
```
threads=2 npm run test
```
In ideal case, one can open upto two browsers in headless mode with 1GB RAM. By default the thread value is set to 1, based on machine capacity one can decide to increase the threads.

### Headless run
To run the tests in headless mode,
```
headless=true npm run test
```
By default headless mode is forced if we run the tests in OS other than MAC and Windows. In Mac and Windows if you need to run the tests in headless mode then you can specify from the commandline as above.

### Multi-Browser run
To run the tests in a specific browser,
```
browser=chrome npm run test
browser=firefox npm run test
```
if no browser option is specified, chrome is forced by default.

### Running specific tests
In order to run specific tests,
```
npm run test -- --mochaOpts.grep "sanity"
```
This is achieved by leveraging mocha's CLI option, one can specify any string (in the place of 'sanity') to run that specific tests.

### Tagged run
Mocha doesn't provide any explicit option to specify tags for each tests, we are trying to leverage the above `Mocha's grep` CLI to achieve the tagging functionality. In each test description one has to specify whether the test is sanity or regression or both sanity & regression like,

```
describe('Enter Details in workspace form and cancel -> regression', () => {
    // Test description
}

// or

describe('Create a new Personal Workspace -> regression, sanity', () => {
    // Test description
}
```
So, To run the tests based on the tags, we can directly use `npm run test -- --mochaOpts.grep "sanity"` or `npm run test -- --mochaOpts.grep "regression"`.


## Reports
For better illustration on the testcases, allure report has been integrated. Allure reports can also be integrated with jenkins to get a dashboard view. Failed screenshots will be automatically attached to the allure report.

### Allure
To open the allure results,
```
npm run report
```
To get this command working, make sure allure commandline is installed in your machine or allure plugin in case of jenkins.

## Retries
By default retry is set to 1 in this framework, upon need one can change this default value by changing `var runTimeRetries = process.env.retry || 1` line in the wdio.conf.js file. WebdriverIO has multiple retry options at each test level that can be seen [here](https://webdriver.io/docs/retry.html)


## Linters
ESLint has been integrated with this project structure. This helps in maintaining common code structure when multiple people involved in working with the same base code. To check the linter errors, one can run `npm run lint`. Unlike linters in other languages ESLint provides an option to fix the errors automatically, this can be invoked by using `npm run lint -- --fix`.

## Breakdown in to testcases

### Adding page methods to the project

1. Add page specific methods inside the `pages` folder structure. Name the page files with `<spec_name>.pages.js` so that we wont get confused with the file functionality. All the page files extends to the Page class, where we can hold any common methods that are needed across the page files.

```
class Toast extends Page {
  get toastTitle() {return $('.pm-toast-title');}

  isDisplayed() {
    this.toastBody.waitForExist(30000);
    return this.toastBody.isExisting();
  }
}
```

### Adding locator methods to the project 

1. Add locators inside the page file. For static locator one can use the getter method and declare the values as 

```
get toastTitle() {return $('.pm-toast-title');}
```

2. For dynamic locator, we need to declare them as a method and call them within the page functions as,

```
// Declare
newWorkspaceTypeToggle(text) {return $('.pm-toggle-switch__item=' + text);}

// Use
this.newWorkspaceTypeToggle(type).click();
```

### Creating a new spec file in the project

Spec files are generally crafted according to our needs, but few of the common practices are,

* Have a global `describe` in your spec file which describes your spec file as a whole.
* Have a sub `describe` to describe your current test case
* Have multiple `it` inside the describe file, this ensures that proper error message is thrown if the tests are failed
* Have all the assetions with custom message, since `expected: true, actual: false` default messages are not much helpful.
* This will ensure that the allure reports as well will have a proper structure.

## Built With

* [WebdriverIO](https://webdriver.io/) - To support browser actions
* [Mocha](https://mochajs.org/) - Core Test Framework
* [Chai](https://www.chaijs.com/) - Assertion Library
* [Allure](https://www.npmjs.com/package/@wdio/allure-reporter) - For Detailed reporting.

## Contributing

1. Clone the repo!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Create a pull request.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the GNU GPL-3.0 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* To all the open source contributors whose code has been referred in this project.
