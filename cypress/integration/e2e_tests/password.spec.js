describe('Forgotten password Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should click on the signin button', () => {
        cy.get('#signin_button').click()
    })

    it('should click on the "forgot your password?" text', () => {
        cy.get('.offset3 > a').click()
    })

    it('should fill the email form', () => {
        cy.get('#user_email').type('test.emaill@email.com')
    })

    it('should submit the email form', () => {
        cy.contains('Send Password').click()
    })
})