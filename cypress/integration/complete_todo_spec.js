describe('Completes a ToDo', () => {
  it('Visits ToDoMVC', function() {
    cy.visit('https://todomvc.com/examples/react/#/')
  })

  it('submits ToDo', function() {
    cy.get('[data-reactid=".0.0.1"]')
      .type('I have to complete this todo{enter}')
  })
  it('submits second ToDo', function() {
    cy.get('[data-reactid=".0.0.1"]')
      .type('One more ToDo{enter}')
  })

  it('finds and clicks toggle', function() {
    cy.get('li:contains(complete this todo)').click('left').should('have.class', 'completed')

  })

})
