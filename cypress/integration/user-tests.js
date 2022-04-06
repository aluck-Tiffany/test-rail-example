/// <reference types="cypress" />

describe('User tests', () => {
  it('C2 User can log in', () => {
    cy.wait(1000)
  })

  it('C3 User can log out', () => {
    cy.log('in the last test!')
    cy.wait(1000)
  })
})
