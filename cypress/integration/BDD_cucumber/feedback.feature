Feature: Verifications for Feedback form

    As a user
    I want to verify the behavior of the Feedback form

    Scenario: Submit the Feedback form correctly
        Given a user navigates to the feedback page
        When the user fills the feedback form
        And the user clicks on the send button
        Then the user verifies the URL contains '/sendFeedback.html'