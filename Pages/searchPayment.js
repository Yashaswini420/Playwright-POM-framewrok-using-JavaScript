exports.searchPayment=class searchPayment{

    constructor(page){

        this.page=page;
        this.viewproduct=page.getByRole('link', { name: ' View Product' }).first();
        this.clickonadd=page.getByRole('button', { name: ' Add to cart' });
        this.viewincart=page.getByRole('link', { name: 'View Cart' });
        this.checkout=page.getByText('Proceed To Checkout');
        this.placeorder= page.getByRole('link', { name: 'Place Order' });


        //filling
        this.fillname=page.locator('input[name="name_on_card"]');
        this.fillcardno= page.locator('input[name="card_number"]');
        this.fillcode=page.getByRole('textbox', { name: 'ex.' });
        this.fillmonth= page.getByRole('textbox', { name: 'MM' });
        this.fillyear=page.getByRole('textbox', { name: 'YYYY' });
        this.confirm=page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.continue=page.getByRole('link', { name: 'Continue' })


    }

    //methods
    async viewandplaceorder(){
        await this.viewproduct.click();
        await this.clickonadd.click();
        await this.viewincart.click();
        await this.checkout.click();
        await this.placeorder.click();
    }

    async fillingDetails(name,cardno,code,month,year){
        await this.fillname.fill(name);
        await this.fillcardno.fill(cardno);
        await this.fillcode.fill(code);
        await this.fillmonth.fill(month);
        await this.fillyear.fill(year);
    }

    async finaleclick(){
        await this.confirm.click();
        await this.continue.click();
    }
}