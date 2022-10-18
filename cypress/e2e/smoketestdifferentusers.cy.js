describe('login with different users', ()=>{

    it('login with standard user', ()=>{
        cy.goToApp()
        cy.login("standard")
    })


    it('login with locked user', ()=>{
        cy.goToApp()
        cy.login("locked_user")
        cy.get('[data-test="error"]').should("be.visible").contains("Epic sadface: Sorry, this user has been locked out.")
    })

    it('login with problem user', ()=>{
        cy.goToApp()
        cy.login("problem_user")

    })
    it('login with performance_glitch_user', ()=>{
        cy.goToApp()
        cy.login("performance_glitch_user")

    })
})