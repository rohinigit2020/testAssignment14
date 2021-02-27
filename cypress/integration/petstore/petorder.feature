Feature: Pet Store Order


    Scenario: Ordering a pet
        Given I am in a Jpetstore website
        When I select product
        Then The pet Product page opens
        When I select a favourite Product 
        Then The Items List page opens
        When I select my item
        Then The Item Details page opens
        When I select Add to cart
        Then Shopping cart page opens with my pet
        When I click Proceed to Checkout
        Then mandetory Sign In page opens
        When I click Register Now
        # Then User registration form opens
        # When I enter all details and click Save Account Information
        # Then The home page opens
        # When I click Sign In
        # Then Sign in page opens
        # When I enter my user name and password
        # Then I login to my account page
        # When I click cart
        # Then My cart page opens
        # When I Proceed to checkout
        # Then The payment page opens
        # When I enter payment details
        # And I confirm my order
        # Then The order confirm page opens