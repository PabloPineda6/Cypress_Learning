describe ('Screenshots taking test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
    })
    it('should click on element using XPath', () => {
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click()
    })
    it('should display login form and assert using XPath', () => {
        cy.xpath('//form').should('have.length', 1)
    })
})