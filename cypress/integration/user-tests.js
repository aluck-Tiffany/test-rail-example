/// <reference types="cypress" />

describe('User tests', () => {
  it('T22 User can log in', () => {
    cy.wait(1000)
  })

  it('C112 User can log out', () => {
    cy.log('in the last test!')
    cy.wait(1000)
  })
})
