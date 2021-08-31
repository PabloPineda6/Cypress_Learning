describe('Visual Regression Test', () => {

    it('should be a very simple visual Regression', () => {
        cy.visit("https://example.com/") // Load website
        cy.matchImageSnapshot() // Compare Snapshots
    })
})