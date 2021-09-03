const pages = ["https://example.com/", 'http://zero.webappsecurity.com/', 'https://devexpress.github.io/testcafe/example/']

const sizes = ["iphone-6", "ipad-2", [1200, 800]]

describe('Responsive Visual Regression Test', () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`should match ${page} in resolution ${size}`, () => {
                let currentTime = new Date(Date.UTC(2021, 1, 1)).getDate()
                cy.clock(currentTime) // Th set screen clocks to a fixed time, so visual regressions won't fail
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
        })
    })
})