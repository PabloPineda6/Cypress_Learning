import { defineStep } from "cypress-cucumber-preprocessor/steps"

defineStep('the user waits for {int} milliseconds', time => {
    cy.wait(time)
})

defineStep('the user verifies the title contains {string}', title => {
    cy.title().should('include', title)
})

defineStep('the user verifies the URL contains {string}', url => {
    cy.url().should('include', url)
})

defineStep('the user reloads the browser', () => {
    cy.reload()
})
