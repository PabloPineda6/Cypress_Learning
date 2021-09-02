const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_FIELD = '#user_login'
const PASSWORD_FIELD = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const LOGIN_ERROR = '.alert-error'

class LoginPage {
    static visitLoginPage() {
        cy.visit(URL)
    }

    static fillUsername(name) {
        cy.get(USERNAME_FIELD).type(name)
    }
    
    static fillPassword(password) {
        cy.get(PASSWORD_FIELD).type(password)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static loginError() {
        cy.get(LOGIN_ERROR).should('be.visible').and('contain', 'Login and/or password are wrong')
    }
}

export default LoginPage