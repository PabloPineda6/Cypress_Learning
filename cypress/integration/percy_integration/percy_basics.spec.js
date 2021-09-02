describe('Visual Regression Test Using the Percy / Cypress integration', () => {

    it('should take a Percy Snapshot', () => {
        cy.visit("https://example.com/")
        cy.wait(1000)
        cy.percySnapshot("Snapshot's name")
    })
})