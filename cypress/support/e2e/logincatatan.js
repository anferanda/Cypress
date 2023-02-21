describe ("Open KasirAja URL", ()=> {
    it ('Should contain url/login',()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include','/login')
    })

    it ('User success login to KasirAja',()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        //cy.url().should('include','/login')

        //Input username and password
        cy.get('#email').type("ferandaannisa@yahoo.com")
        cy.get('#password').type("anferfer03")

        //Click Login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        //Assert
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
    })
})