//Code Review:
import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
/*Code diatas berfungsi untuk mengimport script dari file lain sehingga membuat script disini menjadi lebih ramping
dan lebih mudah mencari issue dari code/script ketika muncul error*/
//New Import Code:
import {PDPPage} from "./pages/pdp_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
//New let:
let pdpPage = new PDPPage()
const URL = 'https://www.saucedemo.com/'
/*Code ini digunakan untuk membuat definisi dan mangambil url situs yang akan diuji. Untuk loginpage dan dashboardpage
didefinisikan new supaya page yang dibuka tetap baru*/

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})
//Code ini digunakan untuk memanggil fungsi login pada file login_pages.ts

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})
//Code ini sama seperti yang sebelumnya, digunakan untuk memanggil fungsi login failed pada file login_pages.ts

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})
/*Yang menarik pada code ini adalah dengan adanya kewajiban untuk memanggil fungsi login sebelum menuju dashboard page
dikarenakan setiap sesi testing baru halaman yang terbuka adalah login page*/
//New Test Scenarios:

it('Test Sauce Demo Sauce labs product add to cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    pdpPage.addToCart()
})
//Test Secenario 1 adalah untuk menguji apakah user bisa menambah produk ke shopping cart
it('Test Sauce Demo Sauce labs product go to shopping cart page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    pdpPage.addToCart()
    pdpPage.shoppingCart()
})
//Test Secenario 2 adalah untuk menguji apakah user bisa masuk ke halaman shopping cart
