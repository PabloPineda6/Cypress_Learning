 # Cypress_Learning
Automation for software testing with Cypress


# This project is being created following the course: Automated Software Testing With Cypress [2020], part of the platform www.Udemy.com. The code editor used is Visual Studio Code

# Cypress comands for using in the therminal
- `npm run cy:open` to open cypress "cypress open"
- `npm run cy:run` to run tests in Headless mode "cypress run" (Cypress will run all tests without a browser displaying)
- `npx cypress run --spec="cypress/integration/examples/scroll.spec.js"` (npx cypress run --spec="route to spec from root") to run specific test in Headless mode

## Assertion
`.should('have.value', '...'), // or other options instead of have.value`

## To configurate the project 
1. Create a containing folder in your PC 
2. Open that folder with the explorer of Visual Studio Code

### Project configuration and Cypress install
1. Install Node Js and NPM using the URL https://nodejs.org/en/download/
    1.1. (Windows) After installation, the system will automatically create nodejs folder in this path “C:\Program Files (x86)” or “C:\Program Files “.
    1.2. (Windows) Open Control Panel -> User Accounts -> Change my environmental variable and verify the path Variable value “C:\Program Files (x86)\nodejs” or “C:\Program Files \nodejs “.
    1.3. (Windows) new => user = path => value = C:\Program Files (x86)\nodejs and after apply that and close Editor and restart it.
2. Open the therminal and type: `npm init`, -> and fill the information required (any info can be eddited or added later in the package.json file), so you can just click enter as meny times as required.
3. Install Cypress by typing: `npm install cypress` (the version installed can be checked in the package.json file)

- Delete option not used in the file package.json, under the option **"scripts"**: The option `"test": "echo "Error: no test specified" && exit 1"` won't be used, Let's delete it and place this two commands to configure how to run the project through the command window or terminal:
```
"cy:open": "cypress open",
"cy:run": "cypress run"
```

### Prettier install and rules definition 
1. Install Prettier by typing in the therminal: `npm install prettier`. Prettier is an automated code formating tool (the version installed can be checked in the package.json file) 
2. Create a prettier configuration file named `.prettierrc.json` at the root of the project (right click - New file) 
3. Create a Json specifying the prettier rules for the project. This are the rules recomended in the course: 
```
{
    "semi": false,
    "singleQuote": true,
    "useTabs": true,
    "tabWidth": 2,
    "bracketSpacing": true,
    "arrowParens": "avoid",
    "trailingComma": "es5"
}
```

### Setup inteligent code completion (so you don't need to memorize all Cypress comands) 
1. Open Cypress so it autogenerates it's Cypress folder and structures by typing: `npx cypress open` or `npm run cy:open` (thanks to the configuration we did in the file package.json)
2. It generates a file cypress.json and a folder names cypress. Create a new file in the cypress folder named `tsconfig.json`
3. Copy and paste the next Json to configurate the inteligent code completion: 
```
{
    "compilerOptions": {
        "allowJs": true,
        "baseUrl": "../node_modules",
        "types": [
            "cypress"
        ]
    },
    "include": [
        "**/*.*"
    ]
}
```

### cypress.json file configuration (commonly used options) must erase comments for file to work
```
{
    "baseUrl": "https://www.google.com/", // base URL of your specific project
    "whatchForFileChanges": false, // if true: every change you save activtes automation running
    "viewportWidth": 1000, // default: 1000
    "viewportHeight": 600, // default: 600
    "waitForAnimation": true, // if true: wait for animation to finish before next action
    "animationDistanceTreshold": 20, // ammount of pixels that need to change for Cipress to consider it an animation and use the wait for animation command
    "defaultCommandTimeout": 5000, // default: 4 seconds = 4000 ms, but is typical to use 5000 ms
    "execTimeout": 6000, // time to wait for exit functions before timeout, one minute: 6000 ms is recommended
    "pageLoadTimeout": 6000, // how long to wait until load event is finished, 1 minute recomended
    "requestTimeout": 15000, // how long to wait for all requests to be finished, usually 15 s
    "responseTimeout": 15000, // how long to wait for an answer from the server, usuallu 15 s
    "video": false, // if true: Cypress will record video when executing on headless mode
    "failOnStatusCode": false // if true: Cypress returns error on server responses diferent from 2xx or 3xx
}
```

### Custom commands creation at file support \ commands.json
example login command:

```
Cypress.Commands.add("loginExample", (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear().type(username) // {delay: 10000} // Delay not working
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
})
```

# Course archives generation order 
## First files (in integration \ examples folder)
 1. simple.spec.js
 2. web_navigation.spec.js
 3. device_responsive.spec.js
 4. login.spec.js
 5. fixture.spec.js - also: fixtures \ user.json
 6. keyboard.spec.js
 7. custom.spec.js - also modyfiyng: support \ commands.json
 8. select.spec.js
 9. screenshots.spec.js - also creates images at folder: screenshots \ examples \ screenshots.spec.js
10. scroll.spec.js
11. data.spec.js - Also creates \ log.json and \log.txt
12. class_n_hooks.spec.js - Also skip and only use
13. xpath.spec.js - Work with xpath (not supported by default NOR RECOMMENDED)
    a. Install plugin: **npm install cypress-xpath**
    b. In support \ index.js, require plugin by typing: **require('cypress-xpath')**
14. $.spec.js - jQuery use, not recommended because Cypress methods are faster and consume less memory

## E2E tests guide (in in integration \ e2e_tests folder)
15. search.spec.js - it's not trully an E2E, we are just refreshing concepts and warming up
16. password.spec.js - Simple E2E to keep warming up
17. navbar.spec.js - Still quite simple E2E
18. feedback.spec.js
19. login.spec.js
20. new_payee.spec.js
21. payment.spec.js
22. currency_exchange.spec.js
23. transfer_funds.spec.js
24. find_transaction.spec.js
25. 