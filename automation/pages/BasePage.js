export default class BasePage{
    
    constructor() {
        this.title = 'Sign In with BioBright';
        this.baseUrl = 'http://zero.webappsecurity.com/index.html'
        
    }
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
    async getEndpoint() {
        return await page.goto(this.baseUrl)
      }
}