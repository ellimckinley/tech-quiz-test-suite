// cypress/e2e/quiz.cy.ts
describe('Tech Quiz E2E Test', () => {
  it('runs a full quiz flow from start to finish', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestions');
    cy.visit('/');

    // Start the quiz
    cy.contains('Start Quiz').should('be.visible').click();

    cy.wait('@getQuestions');
    // Confirm a question is shown
    cy.get('h2').should('exist'); // question is shown in <h2> in Quiz.tsx

    // Click through 10 answers (first button each time)
    for (let i = 0; i < 10; i++) {
      cy.get('button').first().click();
    }

    // Final score should be visible
    cy.contains('Your score').should('exist');

    // Optionally test retake button
    cy.contains('Take New Quiz').should('be.visible');
  });
});
