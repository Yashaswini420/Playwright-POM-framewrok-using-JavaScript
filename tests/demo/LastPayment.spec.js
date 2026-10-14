import { test, expect } from '@playwright/test';
import{searchPayment} from '../../Pages/searchPayment'
import {Login} from '../../Pages/Login'

test('Finalsteps', async ({ page }) => {

    const loginPage = new Login(page);

    const buying = new searchPayment(page);

    await page.goto('https://automationexercise.com/');

    await loginPage.clickSignupLogin();
     await loginPage.login('Yaana1234@gmail.com','123456'    );

    await buying.viewandplaceorder();

    await buying.fillingDetails('Yaana','123456','311','09','2030');

    await buying.finaleclick();


  
});


// await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Signup / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('Yaana1234@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//   await page.getByRole('button', { name: 'Login' }).click();


//   await page.getByRole('link', { name: ' View Product' }).first().click();

//   await page.getByRole('button', { name: ' Add to cart' }).click();
//   await page.getByRole('link', { name: 'View Cart' }).click();
//   await page.getByText('Proceed To Checkout').click();
//   await page.getByRole('link', { name: 'Place Order' }).click();
//   await page.locator('input[name="name_on_card"]').fill('Yaana');
//   await page.locator('input[name="card_number"]').fill('123456');
//   await page.getByRole('textbox', { name: 'ex.' }).fill('311');
//   await page.getByRole('textbox', { name: 'MM' }).fill('09');
//   await page.getByRole('textbox', { name: 'YYYY' }).fill('2030');
//   await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
//   await page.getByRole('link', { name: 'Continue' }).click();