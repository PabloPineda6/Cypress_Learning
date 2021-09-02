import { GeneralEventEmitter, When, Then, Given  } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('a user navigates to the login page', () => {
    LoginPage.visitLoginPage()
})

When('the user submits the login information as a {string}', (userType) => {
    cy.fixture(userType).then(user => {
        const username = user.username
        const password = user.password
        LoginPage.fillUsername(username)
        LoginPage.fillPassword(password)
    })
    LoginPage.submit()
})

Then('the user should be redirected to the Homepage', () => { // This should be in the Homepage Step Definitions, but to keep it simple, for now, it'll be put here
    cy.get('ul.nav-tabs').should('be.visible')
})

Then('the user should receive a {string} error', () => {
    LoginPage.loginError()
})