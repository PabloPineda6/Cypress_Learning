describe ('Screenshots taking test', () => {
    it('full page screenshots taking', () => {
        cy.visit ('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})
    })
    it('single elements screenshots taking', () => {
        cy.get('header').screenshot()
        cy.get('#populate').screenshot()
    })
})