describe('Adds a todo', () => {
  it('Visits ToDoMVC', function() {
    cy.visit('https://todomvc.com/examples/react/#/')
  })

  it('types/submits ToDo', function() {
    cy.get('.new-todo')
      .type('send cypress tests to basket{enter}')
  })

  it('checks for ToDo', function() {
    cy.contains('send cypress tests to basket')
  })

})
