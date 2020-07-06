describe ('Browser Actionns on Example url', () => {
    it('Should load example url', () => {
        cy.visit('http://example.com/', {timeout: 10000})
        cy.title().should('contain', 'Example Domain')
    })
    it('Should check for correct url', () => {
        cy.url().should('include', 'example.com')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
        
        cy.clearCookies({log: true})
        cy.clearLocalStorage('value of item to remove', {log: true})
    })
    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible').contains('Example Domain')
    })
    it('Implicit wait for 0.3 seconds', () => {
        cy.wait(300)
    })
    it('Should check for element not present on the page', () => {
        cy.get('h6').should('not.be.undefined')
    })
})

describe ('Browser Actionns on books to scrape url', () => {
    it('Should load books to scrape web site', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout: 10000})
        cy.title().should('contain', 'All products | Books to Scrape - Sandbox')
        cy.url().should('include', 'index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })
    it('Should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
    it('Should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })
    it('Should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })
    it('Should click on Olio book', () => {
        cy.get('h3').contains('Olio').click()
    })
    it('Should check on price of Olio book', () => {
        cy.get('td').contains('£23.88')
        cy.get('.price_color').contains('£23.88')
    })
})