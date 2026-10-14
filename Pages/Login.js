exports.Login = class Login{
    constructor(page) {
        this.page = page;

        // Locators
        this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });

        this.emailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');

        this.passwordInput = page.getByRole('textbox', {name: 'Password'});

        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

    // Page methods
    async openWebsite() {
        await this.page.goto('https://automationexercise.com/');
    }

    async clickSignupLogin() {
        await this.signupLoginLink.click();
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    // Complete login action
    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}


