Feature: Login to "Zero Bank" application

    As a user
    I want to verify the behavior of the Zero Bank application login

    Scenario: Valid login into Zero Bank application
        Given a user navigates to the login page
        When the user submits the login information as a "valid_user"
        Then the user should be redirected to the Homepage
        And the user verifies the title contains 'Account Summary'
        And the user verifies the URL contains '/account-summary.html'

    Scenario: Invalid login into Zero Bank application
        Given a user navigates to the login page
        When the user submits the login information as a "user"
        Then the user should receive a "failed login" error
