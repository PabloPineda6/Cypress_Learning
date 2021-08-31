describe('Navbar options navigation Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should click on "Online Banking" option to display its content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', '/online-banking.html')
        cy.get('h1').should('be.visible').contains('Online Banking')
    })

    it('should click on "Bank" option to display homepage content', () => {
        cy.contains('Home').click()
        cy.url().should('include', '/index.html')
        cy.get('h4').should('be.visible').and('contain', 'Online Banking')
    })

    it('should click on "Feedback" option to display  content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', '/feedback.html')
        cy.get('h3').should('be.visible').and('contain', 'Feedback')
    })

    it('should click on "Zero Bank" title to display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', '/index.html')
        cy.get('h4').should('be.visible').contains('Online Banking')
    })
})