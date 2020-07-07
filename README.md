# Cypress_Learning
Automation for software testing with Cypress


# This project is being created following the course: Automated Software Testing With Cypress [2020], part of the platform www.Udemy.com. The code editor used is Visual Studio Code

## To configurate the project 
1. Create a containing folder in your PC 
2. Open that folder with the explorer of Visual Studio Code

## Project configuration and Cypress install
1. Open the therminal and type: npm init, and fill the information required (any info can be eddited or added later in the package.json file) 
2. Install Cypress by typing: npm install cypress (the version installed can be checked in the package.json file)

## Prettier install and rules definition 
1. Install Prettier by typing in the therminal: npm install prettier. Prettier is an automated code formating tool (the version installed can be checked in the package.json file) 
2. Create a prettier configuration file named .prettierrc.json at the root of the project (right click - New file) 
3. Create a Json specifying the prettier rules for the project. This are the rules recomended in the course: 
{ "semi": false, "singleQuote": true, "useTabs": true, "tabWidth": 2, "bracketSpacing": true, "arrowParens": "avoid", "trailingComma": "es5" }

## Setup inteligent code completion (so you don't need to memorize all Cypress comands) 
1. Open Cypress so it autogenerates it's Cypress folder and structures by typing: npx cypress open 
2. It generates a file cypress.json and a folder names cypress. Create a new file in the cypress folder named tsconfig.json 
3. Copy and paste the next Json to configurate the inteligent code completion: 
{ "compilerOptions": { "allowJs": true, "baseUrl": "../node_modules", "types": [ "cypress" ] }, "include": [ "**/." ] }

## Cypress comands on the file package.json, under the option "scripts"
* Delete option not used: The option "test": "echo "Error: no test specified" && exit 1" won't be used, Let's delete it
* To open cypress: "cy:open": "cypress open" (So Cypress will open when typing in the therminal: npm run cy:open)
* To run test in Headless mode: "cy:run": "cypress run" (So Cypress will run without a browser displaying when typing in the therminal: npm run cy:run)