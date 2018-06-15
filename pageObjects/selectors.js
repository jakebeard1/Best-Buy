module.exports = {
    url: 'https://www.bestbuy.com/',
    elements: {
        closeBtn: 'button[data-track="Close"]',

        acctBtn: {
            selector: '(//a[@id="profileMenuWrap1"])[1]',
            locateStrategy: 'xpath'
        },
        signInBtn: '.lam-signIn__button',

        emailInput: '#fld-e',

        passwordInput: '#fld-p1',

        submitBtn: '.cia-form__submit-button',

        searchInput: '.search-input',

        searchBtn: '.header-search-button',

        resultsTitle:'.type-page-label-alt',

        addToCart: {
            selector: '(//button[@class="btn btn-sm btn-block button-state-default btn-primary btn-leading-ficon "])[1]',
            locateStrategy: 'xpath'
        },
        goToCheckout: '.go-to-cart.v-fw-medium',

        itemInCart: {
            selector: '(//a[@class="cart-item__title"])[1]',
            locateStrategy: 'xpath'
        },

        removeFromCart: '.cart-item__remove'
    }

}