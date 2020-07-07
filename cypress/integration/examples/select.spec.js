describe ('Select Box', () => {
    it('should load website containing select box', () => {
        cy.visit ('https://devexpress.github.io/testcafe/example/')
    })
    it('should select an option from select box', () => {
        cy.get('#preferred-interface').select('Command Line').should('have.value', 'Command Line')
        cy.get('#preferred-interface').select('JavaScript API').should('have.value', 'JavaScript API')
        cy.get('#preferred-interface').select('Both').should('have.value', 'Both')
    })
})