describe('Visual Regression Test', () => {

    it('should be a very simple visual Regression', () => {
        cy.visit("https://example.com/") // Load website
        
        // let currentTime = new Date(Date.UTC(2021, 1, 1)).getDate()
        // cy.clock(currentTime) // Th set screen clocks to a fixed time, so visual regressions won't fail

        cy.matchImageSnapshot() // Compare Snapshots
    })
})