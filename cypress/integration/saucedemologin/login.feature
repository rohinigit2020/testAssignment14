Feature: Login validations for Saucedemo.com

    Scenario Outline: Different User Scenarios

        Given When I am in Saucedemo Site
        When user name is "<username>" and password is "<password>"
        Then Error logged is "<error to validate>"


        Examples:
            | username        | password     | error to validate                                           |
            |                 |              | Username is required                                        |
            | standard_user   |              | Password is required                                        |
            | standard_user   | secret_pass  | Username and password do not match any user in this service |
            | locked_out_user | secret_sauce | Sorry, this user has been locked out                        |