/// <reference types="cypress" />

describe('User tests', () => {
  it('C14 User can log in', () => {
    cy.wait(1000)
    expect(2).to.equal(1+1)
    expect(true).to.equal(true)
  })

  it('C15 User can log out', () => {
    cy.log('in the last test!')
    cy.wait(1000)
    expect(2).to.equal(1+0)
    expect(true).to.equal(false)
  })
})
