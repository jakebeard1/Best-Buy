var home = {}



module.exports = {
    beforeEach: browser => {
        home = browser.page.selectors()
        home.navigate()
    },

    after: browser => {
        browser.end()
    },

    'Can I log in?': browser => {
        home
            .waitForElementVisible('@closeBtn', 2000)
            .click('@closeBtn')
            .waitForElementVisible('@acctBtn', 2000)
            .api.pause(500)
        home
            .click('@acctBtn')
            .waitForElementVisible('@signInBtn', 2000)
            .click('@signInBtn')
            .waitForElementVisible('@emailInput', 2000, 'Login Page Visible')
            .setValue('@emailInput', 'prislocks@gmail.com')
            .setValue('@passwordInput', 'prislocksunny')
            .click('@submitBtn')
            .waitForElementVisible('@searchInput', 2000, 'Home Page Visible')
            .expect.element('@acctBtn').text.to.equal('Hi, Sunny')

    },

    // 'Can I search?': browser => {
    //     home
    //     .setValue('@searchInput', 'xbox one')
    //     .api.pause(3000)
    //     home
    //     .click('@searchBtn')
    //     .waitForElementVisible('@resultsTitle', 5000, 'Results Page Visible')
    //     .expect.element('@resultsTitle').text.to.equal('"xbox one"')


    // },

    'can I add to cart?': browser => {
        home
        .setValue('@searchInput', 'xbox one')
        .api.pause(3000)
        home
        .click('@searchBtn')
        .waitForElementVisible('@resultsTitle', 2000, 'Results Page Visible')
        .expect.element('@resultsTitle').text.to.equal('"xbox one"')
        home
        .waitForElementVisible('@addToCart', 2000)
        .click('@addToCart')
        .waitForElementVisible('@goToCheckout', 2000)
        .click('@goToCheckout')
        .waitForElementVisible('@itemInCart', 2000)
        .click('@removeFromCart')
        .api.pause(2000)
    }

}