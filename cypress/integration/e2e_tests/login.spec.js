describe('Login / Logout Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
    })

    it('should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
        })
        cy.contains('Sign in').click()
    })

    it('should assert the displayed error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong')
    })

    it('should log into the application', () => {
/*         cy.get('#login_form').should('be.visible')
        cy.fixture('valid_user').then(user => {
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
        })
        cy.get('#user_remember_me').click()
        cy.contains('Sign in').click() */
        cy.loginExample('username', 'password') // using command in support folder instead of fixture
        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', '/index.html')
    })
})