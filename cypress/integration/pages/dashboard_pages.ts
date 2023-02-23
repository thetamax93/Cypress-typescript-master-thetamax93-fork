// Fungsi ini digunakan untuk mengexport script ke login.ts
export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
}
//Code ini menggunakan cy.contains supaya cypress bisa mengclick tulisan yang akan diuji dan memberi akses ke PDP Page