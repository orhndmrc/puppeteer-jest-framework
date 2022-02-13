export default class BasePage{
    async wait(time){
        await page.waitFor(time)
    }
    async getTitle(){
        return await page.title()
    }
    async getUrl(){
        return await page.url()
    }
    async getText(selector){
        return await page.$eval(selector, el => el.textContent) 
    }
}