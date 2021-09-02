const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_FIELD = '#name'
const EMAIL_FIELD = '#email'
const SUBJECT_FIELD = '#subject'
const COMMENT_FIELD = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {
    static visitFeedbackPage() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME_FIELD).type("Name")
        cy.get(EMAIL_FIELD).type("Name@email.com")
        cy.get(SUBJECT_FIELD).type("Feedback subject")
        cy.get(COMMENT_FIELD).type("Feedback comment")
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedbackPage