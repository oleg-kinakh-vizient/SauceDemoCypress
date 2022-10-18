// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// Creating different users

import '@testing-library/cypress/add-commands'
require('cypress-xpath');

Cypress.Commands.add('login', (role) => {
    window.localStorage.clear();
    cy.clearCookies()
    let username
    let password
///locked_out_user
// problem_user
// performance_glitch_user
    switch (role) {
        case 'standard':
            username = "standard_user"
            password = "secret_sauce"
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            cy.get('[data-test="login-button"]').click();
            break
        case 'locked_user':
            username = "locked_out_user"
            password = "secret_sauce"
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            cy.get('[data-test="login-button"]').click();
            break
        case 'problem_user':
            username = "problem_user"
            password = "secret_sauce"
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            cy.get('[data-test="login-button"]').click();
            break
        case 'performance_glitch_user':
            username = "performance_glitch_user"
            password = "secret_sauce"
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            cy.get('[data-test="login-button"]').click();
            break
        default:console.log("Invalid role")
    }
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('password', password)
})

Cypress.Commands.add('goToApp', () => {
        cy.visit('/')
    }
)
