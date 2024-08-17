import mainPage from './mainPage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class LoginPage extends mainPage{
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return cy.get('[data-qa="login-email"]');
    }

    get inputPassword () {
        return cy.get('[data-qa="login-password"]');
    }

    get btnSubmit () {
        return cy.get('[data-qa="login-button"]');
    }

    get msgLogedUser () {
        return cy.xpath('//a[contains(text(), " Logged in as ")]');
    }

    get btnDeleteUser () {
        return cy.xpath('//h2[contains(text(), "Login to your account")]');
    }

    get msgDeletedUser () {
        return cy.contains('Delete Account');
    }

    get msgInvalidUser () {
        return cy.contains('Your email or password is incorrect!');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        this.inputUsername.type(username);
        this.inputPassword.type(password);
        this.btnSubmit.click();
    }
}

export default new LoginPage();
