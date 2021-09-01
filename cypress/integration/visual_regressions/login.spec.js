describe('Visual Regression of a login page', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
        })
        cy.get('#user_remember_me').click()
    })

    it('should compare for a Desktop Layout', () => {
        cy.setResolution([1280, 720])
        cy.matchImageSnapshot()
    })

    it('should compare for a Tablet Layout', () => {
        cy.setResolution('ipad-2')
        cy.matchImageSnapshot()
    })

    it('should compare for a cellphone Layout', () => {
        cy.setResolution('iphone-6')
        cy.matchImageSnapshot()
    })
})