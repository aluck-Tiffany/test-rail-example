/// <reference types="cypress" />

// import { module } from 'module-package'

describe('User tests', () => {
  it('C14 User can log in', () => {
    cy.wait(1000)
  })

  it('C15 User can log out', () => {
    cy.log('in the last test!')
    cy.wait(1000)
    // expect.to.equal(2)
  })
})
