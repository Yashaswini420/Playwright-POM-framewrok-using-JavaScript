exports.Cart=class Cart{
    constructor(page){

        this.page=page;
        this.gotoProduct=page.getByRole('link', { name: ' Products' });
        this.clickonWomen=page.getByRole('link', { name: ' Women' });
        this.saareFilter=page.getByRole('listitem').filter({ hasText: 'Saree' });
        this.clickProduct=page.getByRole('link', { name: 'Saree' });
        this.addtocart=page.getByRole('link', { name: ' Add to cart' }).nth(1);
        this.continue=page.getByRole('button', { name: 'Continue Shopping' });
    
    }

    async wellgotoProduct(){

        await this.gotoProduct.click();
    }

    async wellclickWomen(){
        await this.clickonWomen.click();
    }

    async wellsaareFilter(){
        await this.saareFilter.click();
    }

    async wellclickProduct(){
        await this.clickProduct.click();
    }

    async welladdtocart(){
        await this.addtocart.click();
    }

    async wellcontinue(){
        await this.continue.click();
    }


}