import { test, expect } from '@playwright/test';
import {Login} from '../../Pages/Login'

// test('logintest',async({page})=>{

//   const letslogin=new Login(page)
//   letslogin.gotoLogin();
//   letslogin.login('Yaana1234@gmail.com','123456')
  
// })
test('logintest', async ({ page }) => {
    // Create Page Object
    const loginPage = new Login(page);

    // Open website
    await loginPage.openWebsite();

    // Navigate to Login page
    await loginPage.clickSignupLogin();

    // Enter credentials and click Login
    await loginPage.login(
        'Yaana1234@gmail.com',
        '123456'
    );

    // Verify login result
    //await expect(page.getByText('Logged in as')).toBeVisible();
});


// test('logintest', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();
//   await page.getByRole('link', { name: ' Signup / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('Yaana1234@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//   await page.getByRole('button', { name: 'Login' }).click();
// });