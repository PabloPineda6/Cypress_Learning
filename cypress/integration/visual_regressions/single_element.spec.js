describe('Single element Snapshot as part of a Regression Test', () => {

    it('should take a snapshot to a single element on the page and match it', () => {
        cy.visit('https://example.com/')
        cy.get('h1').matchImageSnapshot()
    })
})