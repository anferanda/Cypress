//Import login js
import './login'
        beforeEach(()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        })
describe ("Add Pengguna", ()=> {
    //it ('Should contain url/login',()=>{
    //cy.Login() //diambil dari commands
    //})
    it ('Berhasil Add Pengguna', ()=>{
        cy.Login()
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(8) > div').click()
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.get('#nama').type("Automation")
        cy.get('#email').type("automation@yahoo.com")
        cy.get('#password').type ("123")
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
        cy.wait(1500)
    })

    it ('Berhasil Add Pelanggan',()=>{
        cy.Login()
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9) > div').click()
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.get('#nama').type("Auto")
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div:nth-child(2) > div').type("081234567890")
        cy.get('#alamat').type("alamat")
        cy.get('#keterangan').type("keterangan")
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
    })
})
