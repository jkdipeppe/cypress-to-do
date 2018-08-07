describe('Adds a todo', () => {
  it('Visits ToDoMVC', function() {
    cy.visit('https://todomvc.com/examples/react/#/')
  })

  it('types/submits ToDo', function() {
    cy.get('[data-reactid=".0.0.1"]')
      .type('send cypress tests to basket{enter}')
  })
  
  it('types/submits ToDo', function() {
    cy.get('[data-reactid=".0.0.1"]')
      .type('send second cypress tests to basket{enter}')
  })

  it('checks for ToDo', function() {
    cy.get('label:contains(send cypress tests to basket)').should('have.text', 'send cypress tests to basket')
  })

})
