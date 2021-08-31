describe('Searchbox Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should type into searchbox and submit by pressing enter', () => {
        cy.get('#searchTerm').type('some text {enter}')
    })
    
    it('should land on the search results page', () => {
        cy.get('h2').contains('Search Results:')
    })
})