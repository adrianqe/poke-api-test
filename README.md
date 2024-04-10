# PokeAPI Testing with Cypress

This project contains a set of automated tests for the PokeAPI using Cypress, an end-to-end testing tool that enables you to perform tests on web applications quickly and easily.

## Requirements

Before running the tests, make sure you have the following installed in your development environment:

- Node.js and npm (latest stable version is recommended)
- Cypress

## Installation

To get started, you need to install the project dependencies. Run the following command:


`npm install`

## Running the Tests

###### You can run the tests using one of the following commands:

To open the Cypress Test Runner (GUI mode), run:

`npm run cypress:open`

To run the tests in headless mode (command line), run:

`npm run cypress:run`

To generate an HTML report after running the tests, run:

`npm run html-report`

This command will generate an HTML report with test results.

## Project Structure
###### The project is structured as follows:

**cypress/integration:** Contains all the test files written in JavaScript to test different aspects of the PokeAPI.

**cypress/support:** Contains support files that are loaded before running the tests, such as custom commands and configurations.

**cypress/plugins:** Contains Cypress plugin files that can extend or modify its behavior.

**cypress.json:** Cypress configuration file that defines global settings for the tests.

## Contributing

If you would like to contribute to this project, you are welcome to do so! We are always open to new ideas, improvements, and bug fixes. Feel free to open issues or submit pull requests.

> License
This project is licensed under the ISC License.
