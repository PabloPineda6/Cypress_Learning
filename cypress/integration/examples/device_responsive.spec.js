describe ('Diferent devices test', () => {
    it('729p', () => {
        cy.viewport(1280,720)
        cy.visit('http://example.com/', {timeout: 10000})
        cy.wait(2000)
    })
    it('1080p', () => {
        cy.viewport(1980,1080)
        cy.visit('http://example.com/', {timeout: 10000})
        cy.wait(2000)
    })
    it('iPhone X', () => {
        cy.viewport('iphone-x')
        cy.visit('http://example.com/', {timeout: 10000})
        cy.wait(2000)
    })
    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://example.com/', {timeout: 10000})
        cy.wait(2000)
    })
    it('MacBook 15', () => {
        cy.viewport('macbook-15')
        cy.visit('http://example.com/', {timeout: 10000})
        cy.wait(2000)
    })
})