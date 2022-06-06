import HomePage from '../pages/components/HomePage'

describe('Homepage Nav', ()=>{
    // beforeAll(async ()=>{
    //     jest.useRealTimers();
        
        
    // })
    it('should go to home page', async ()=>{
        await HomePage.visit()
        const title = await HomePage.getTitle()
        console.log(title)
        console.log(username)
        expect(title).toBe('Zero - Personal Banking - Loans - Credit Cards')
        
        

      
    })
    it('navbar should display', async ()=>{
        await HomePage.isNavbarDisplayed()
    })
})