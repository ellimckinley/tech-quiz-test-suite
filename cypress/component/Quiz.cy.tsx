// cypress/component/Quiz.cy.jsx

import Quiz from '../../client/src/components/Quiz'; 
import { mount } from 'cypress/react';

describe('<Quiz /> Component Test', () => {
  it('renders Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz when the button is clicked', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.question').should('exist'); // update selector as needed
  });

  it('shows final score after all questions answered', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // click through all answers (assuming 10 questions with one button each)
    for (let i = 0; i < 10; i++) {
      cy.get('button.answer-option').first().click(); // update selector as needed
    }

    cy.contains('Your Score').should('be.visible');
  });
});
