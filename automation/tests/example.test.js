describe('Google Test', ()=>{
    it('should open google', async ()=>{
        jest.setTimeout(15000)
        await page.goto('https://google.com')
        await page.waitFor(2000)
      
    })
})