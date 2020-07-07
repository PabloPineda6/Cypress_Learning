describe ('Keyboard key press simulation', () => {
    it('Should load zero webappsecurity bank web site', () => {
        cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
        cy.title().should('contain', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.url().should('include', 'zero.webappsecurity')
   })
    it('should submit searchbox content when pressing enter', () => {
        cy.get('#searchTerm').type('any text you want {enter}')
    })
    
})