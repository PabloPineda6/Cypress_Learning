class BasePage {
    static loadHomePage() {
        cy.visit ('https://devexpress.github.io/testcafe/example/')
    }
    static wait(number) {
        cy.wait (number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }
    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe ('Abstraction with classes', () => {
    before(function() { // Hook 1: Before
        // runs before the first test inside the describe
        // useful to setup test data and test context
        // or to seed or reset database
        HomePage.loadHomePage()
    })
    after(function() { // Hook 2: After
        // runs after the last test inside the describe
        // useful to clean up test leftover data
        // or clear cookies or local storage
    })
    beforeEach(function() { // Hook 2: Before each
        // runs before each one of the tests inside the describe
        // useful to change or reset data between tests
    })
    afterEach(function() { // Hook 2: After
        // runs after each one of the tests inside the describe
        // useful to clean up test leftover data
        // or clear cookies or local storage
    })
        
    it.only('should scroll down and up in the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
    it.skip('should skip this test', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
    it('should scroll down and up in the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
    it('should scroll down and up in the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
    it('should scroll down and up in the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})