describe('Check users load', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('login and view users', () => {
        cy.contains('Choose an option').click()
        cy.contains('LogIn').click()
        cy.get('[placeholder="Email"]').type('eve.holt@reqres.in')
        cy.get('[placeholder="Password"]').type('cityslicka')
        cy.contains('Go').click()
        cy.contains('Choose an option').click()
        cy.contains('Users').click()
    })
})