// cypress/component/Quiz.cy.jsx
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('<Quiz /> Component Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json'
    }).as('getQuestions');
  });

  it('shows Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('displays a question after starting the quiz', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('What is the output of print(2 ** 3)?').should('exist'); // from fixture
  });

  it('displays final score after answering all questions', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

  cy.fixture('questions.json').then((questions) => {
    Cypress._.times(questions.length, () => {
      cy.get('button').first().click();
    });

    cy.contains('Your score').should('exist');
  });

    cy.contains('Your score:').should('exist');
  });
});
