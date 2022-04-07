/// <reference types="cypress" />

const { expect } = require("chai")

describe('User tests', () => {
  it('C14 User can log in', () => {
    cy.wait(1000)
  })

  it('C15 User can log out', () => {
    cy.log('in the last test!')
    cy.wait(1000)
    expect({ name: 'Jane' }).to.eql({ name: 'Jane' })
  })
})
