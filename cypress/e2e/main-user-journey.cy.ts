import '../support/commands';

describe('Main User Journey', () => {
  it('should successfully submit the multi-step form', () => {
    cy.visit('/');

    // Step 1
    cy.getByData('name-input').type('John Smith');
    cy.getByData('email-input').type('john.smith@example.com');
    cy.getByData('phone-input').type('123-456-7890');
    cy.getByData('next-button').click();

    // Step 2
    cy.getByData('plan-input').first().check();
    cy.getByData('next-button').click();

    // Step 3 (optional)
    cy.getByData('next-button').click();

    // Step 4
    cy.getByData('confirm-button').click();
    cy.getByData('confirmation-message').should('be.visible');
  });
});
