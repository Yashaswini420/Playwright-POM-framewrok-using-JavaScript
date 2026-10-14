import { test, expect } from '@playwright/test';
import {Cart} from '../../Pages/Cart'
//import { join } from 'node:path';



test('AddToCart', async ({ page }) => {


    const nowaddCart= new Cart(page);

    await page.goto('https://automationexercise.com/');

    await nowaddCart.wellgotoProduct();
    await nowaddCart.wellclickWomen();
    await nowaddCart.wellsaareFilter();
    await nowaddCart.wellclickProduct();
    await nowaddCart.welladdtocart();
    await nowaddCart.wellcontinue();

//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Products' }).click();
//   await page.getByRole('link', { name: ' Women' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Saree' }).click();
//   await page.getByRole('link', { name: 'Saree' }).click();
//   await page.getByRole('link', { name: ' Add to cart' }).nth(2).click();
//   await page.getByRole('button', { name: 'Continue Shopping' }).click();
});