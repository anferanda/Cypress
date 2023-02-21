Cypress.Commands.add('Login',()=>{
    cy.get('#email').type("ferandaannisa@yahoo.com")
    cy.get('#password').type("anferfer03")
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
    
    cy.url().should('include','/dashboard')
    cy.contains("kasirAja")
})