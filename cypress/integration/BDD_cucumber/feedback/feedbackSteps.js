import { GeneralEventEmitter, When, Then, Given  } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('a user navigates to the feedback page', () => {
    FeedbackPage.visitFeedbackPage()
})

When('the user fills the feedback form', () => {
    FeedbackPage.fillFeedbackForm()
})

When('the user clicks on the send button', () => {
    FeedbackPage.submit()
})