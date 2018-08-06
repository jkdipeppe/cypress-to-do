describe('Completes a ToDo', () => {
  it('Visits ToDoMVC', function() {
    cy.visit('https://todomvc.com/examples/react/#/')
  })

  it('submits ToDo', function() {
    cy.get('.new-todo')
      .type('I have to complete this todo{enter}')
  })

  it('finds toggle', function() {
    cy.get('.toggle').click()

  })




})
