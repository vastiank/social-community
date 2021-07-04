describe('Check user not found', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('login and view users', () => {
        cy.contains('Choose an option').click()
        cy.contains('LogIn').click()
        cy.get('[placeholder="Email"]').type('test@test.com')
        cy.get('[placeholder="Password"]').type('test')
        cy.contains('Go').click()
    })
})