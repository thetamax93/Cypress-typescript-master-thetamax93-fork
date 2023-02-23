import { JsxEmit } from "typescript"
// Fungsi ini digunakan untuk mengimport library untuk file typescript.

export class LoginPage{
    txt_username = '#user-name'
    txt_password = '#password'
    btn_login = '#login-button'
//Fungsi export digunakan untuk mengekspor class ke login.ts

    navigate(url: string){
        cy.visit(url)
    }
    inputUsername(username: string){
        cy.get(this.txt_username).type(username)
    }
    inputPassword(password: string){
        cy.get(this.txt_password).type(password)
    }
    clickLogin(){
        cy.get(this.btn_login).click()
    }
//Code diatas cukup sederhana dalam mengatur cypress untuk dasar login
    assertLogin(){
        cy.get('.title').should('be.visible')
        cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')
    }
//Assertion Login digunakan untuk mengassert bahwa credential login yang valid yang masuk ke input textbox.
    assertLoginFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }
//Assertion Login Fail digunakan untuk mengassert bahwa credential login yang invalid yang masuk ke input textbox.
    login(url : string,username : string,password : string){
        this.navigate(url)
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin()
    }
}
//Kode ini digunakan untuk memastikan bahwa proses login berjalan sebagaimana mestinya dengan membaca text tentang akun dan password yang tercantum di website.