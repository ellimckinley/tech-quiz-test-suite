// cypress/e2e/quiz.cy.js

describe('Tech Quiz E2E Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // or your deployed URL
  });

  it('starts quiz and displays first question', () => {
    cy.contains('Start Quiz').click();
    cy.get('.question').should('exist'); // adjust selector
  });

  it('completes quiz and displays score', () => {
    cy.contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('button.answer-option').first().click(); // adjust selector
    }

    cy.contains('Your Score').should('be.visible');
  });

  it('can start a new quiz after finishing one', () => {
    cy.contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('button.answer-option').first().click();
    }

    cy.contains('Start New Quiz').click();
    cy.get('.question').should('exist');
  });
});
