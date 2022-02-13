
const { password } = require("../config");
const { default: HomePage } = require("../pages/components/HomePage")

describe('Homepage Nav', ()=>{
    let homepage;
    beforeAll(async ()=>{
        homepage = new HomePage()
        jest.setTimeout(15000)
        
        
    })
    it('should go to home page', async ()=>{
        await homepage.visit()
        const title = await homepage.getTitle()
        console.log(title)
        expect(title).toBe('Zero - Personal Banking - Loans - Credit Cards')
        

      
    })
    it('navbar should display', async ()=>{
        await homepage.isNavbarDisplayed()
    })
})