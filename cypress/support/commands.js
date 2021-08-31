// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('loginExample', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear().type(username) // {delay: 10000} // Delay not working
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
})

import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"

addMatchImageSnapshotCommand ({
    failureThreshold: 0.00,  // How many pixels of difference will we allow before marking a test as Failed
    failureThresholdType: "percent", // To specify if we wanna use Percentage or Pixel count
    customDiffConfig: {threshold: 0.0},
    capture: "viewport" // If you want to capture the whole Viewport
})

Cypress.Commands.add("setResolution", (size) => {
    if (Cypress._.isArray(size)) { // If we receive size as an array (width, height), for example in a desktop version
        cy.viewport(size[0], size[1]) // We need to fill width and height with the array information, like [1200, 800]
    } else {
        cy.viewport(size) // Else, we are just receiving a picture size as a device, like "iphone-6"
    }
})