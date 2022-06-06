import BasePage from "../BasePage";

class HomePage extends BasePage {

    get username(){return '#nav'}
    async visit() {
       await page.goto(URL)
        await page.waitForSelector(this.username)

    }
    async isNavbarDisplayed() {
        await page.waitForSelector('#pages-nav')
        await page.waitForSelector('#homeMenu')
        await page.waitForSelector('#onlineBankingMenu')
        await page.waitForSelector('#feedback')

    }

}
export default new HomePage();