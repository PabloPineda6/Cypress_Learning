describe ('Write / Read data from local Json or text file', () => {
    it('should write data into local Json', () => {
        cy.writeFile ('log.json', {name: 'Mike', age: 25})
    })
    it('should write data into local txt file', () => {
        cy.writeFile ('log.txt', 'Any text')
    })
    it('should read data from local Json and assert', () => {
        cy.readFile ('log.json').its('age').should('eq', 25)
    })
    it('should read data from local txt file and assert', () => {
        cy.readFile ('log.txt').should('eq', 'Any text')
    })
})
describe ('Read data from browser document content', () => {
    it('should read data from browser document content and assert', () => {
        cy.visit('http://example.com/', {timeout: 10000})
        cy.title().should('contain', 'Example Domain')
        cy.wait(2000) // if there is no wait, this process fails
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})