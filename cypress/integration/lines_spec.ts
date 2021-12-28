beforeEach(() => {
    cy.visit('/lines')
    cy.window().should('have.property', 'appStarted')
  })

it('should display lines', async () => {
    cy.compareSnapshot('lines', 0);
});