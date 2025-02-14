it('Info tab of the example exists and has content', () => {
  cy.login('manager1', 'farmdata2')
  cy.visit('/farm/fd2-example')

  // Check that the header has the right text.
  cy.get('h3').should('have.text', 'FarmData2 Example Module')

  // Check that there are at least two paragraphs of information.
  cy.get('p').should('have.length.greaterThan', 1)

  // Check that first paragraph likely describes the sample module.
  cy.get('[data-cy=intro]').should('contain.text', 'sample module')
  cy.get('[data-cy=intro]').invoke('text').should('have.length.greaterThan',25)

  // Check that there is also some content in the second paragraph.
  cy.get('[data-cy=detail').invoke('text').should('have.length.greaterThan',25)
})
