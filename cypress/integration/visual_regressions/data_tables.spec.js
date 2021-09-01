describe('Visual Regression of a Data table', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
        cy.fixture('valid_user').then(user => {
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
        })
        cy.get('#user_remember_me').click()
        cy.get('input[name="submit"]').click()
    })

    it('should navigate to account activity Data table', () => {
        cy.get('#account_activity_tab').click()
    })

    it('should compare table snapshots', () => {
        cy.matchImageSnapshot()
    })
})