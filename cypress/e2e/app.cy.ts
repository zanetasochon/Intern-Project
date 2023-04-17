describe('Home Page E2E test ', () => {
  it('Home Page shows up', () => {
    cy.visit('/')
  })
  it('loading shows up', () => {
    cy.visit('/')
    cy.contains("loading...")
    cy.wait(500)
    cy.contains('[data-testid="loading"]').should("not.exist")

  })
})

describe('Users', () => {
  it('All Users show up', () => {
    cy.visit('/')
    cy.get('[data-testid="singleUser"]').should("have.length", 10)
  })
})