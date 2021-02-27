Feature: : Calculator testing

    Scenario Outline: Cases of testing Scenarios

        Given I am in Testsheepng basic calculator
        When I enter the "<First_number>" and "<Second_number>"
        When I select an "<Operation>"
        When I click the calculate button
        Then The result value should be "<Answers>"

        Examples:
            | scenario | First_number | Second_number | Operation   | Answers | val |
            | 1        | 5            | 3             | Add         | 8       | 1   |
            | 2        | 10           | 9             | Multiply    | 90      | 3   |
            | 3        | 28           | 1             | Subtract   | 27      | 2   |
            | 4        | 16           | 5             | Divide      | 3.2     | 4   |
            | 5        | 6            | 4             | Concatenate | 64      | 5   |