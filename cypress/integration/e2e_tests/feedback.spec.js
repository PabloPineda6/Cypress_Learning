describe('Feedback form filling Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
        cy.contains('Feedback').click()
        cy.url().should('include', '/feedback.html')
        cy.get('h3').should('be.visible').contains('Feedback')
    })

    it('should verify loading the Feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('should fill the Feedback form', () => {
        cy.get('#name').type('persons name')
        cy.get('#email').type('test.emaill@email.com')
        cy.get('#subject').type('subject of the given feedback')
        cy.get('#comment').type('the full feedback to be given')
    })

    it('should submit the Feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('should assert on Feedback message', () => {
        cy.get('h3').should('be.visible').contains('Feedback')
        cy.get('.offset3').contains('Thank you for your comments, ')
    })
})