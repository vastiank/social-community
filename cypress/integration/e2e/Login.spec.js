describe('Check login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('render social community', () => {
        cy.contains('Social Community')
    })

    it('login and view users', () => {
        cy.contains('Choose an option').click()
        cy.contains('LogIn').click()
        cy.get('[placeholder="Email"]').type('eve.holt@reqres.in')
        cy.get('[placeholder="Password"]').type('cityslicka')
        cy.contains('Go').click()
    })
})