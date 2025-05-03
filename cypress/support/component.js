// cypress/support/component.js

import { mount } from 'cypress/react'

// Make mount globally available
Cypress.Commands.add('mount', mount)

// Optionally import global styles if needed
// import '../../client/src/index.css'
