// Fungsi ini digunakan untuk mengexport script ke login.ts
export class PDPPage{
    link_addToCart = '[data-test="add-to-cart-sauce-labs-backpack"]'
    link_shoppingCart = '.shopping_cart_link'
//Testcase 1 menambah produk ke shopping cart
    addToCart(): void{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click({force:true}) 
        cy.wait(3000)
    }
//Testcase 2 mengakses shopping cart
    shoppingCart(): void{
        cy.get('.shopping_cart_link').click({force:true}) 
        cy.wait(3000)
    }
}
//Code ini menggunakan cy.get dan berbeda pada code dashboard pages supaya cypress bisa mengclick elemen button.