it('Add new todo test', () => {
    cy.visit('https://demo.playwright.dev/todomvc')

    //Creating to-do list
    cy.get('.new-todo').clear();
    cy.get('.new-todo').type('laundry{enter}');
    cy.get('.new-todo').type('cooking{enter}');
    cy.get('.new-todo').type('study{enter}');
  
    //Assert to-do list is created
    cy.get(':nth-child(1) > .view > [data-testid="todo-title"]').should('be.visible');
    cy.get(':nth-child(1) > .view > [data-testid="todo-title"]').should('have.text', 'laundry');

    cy.get(':nth-child(2) > .view > [data-testid="todo-title"]').should('be.visible');
    cy.get(':nth-child(2) > .view > [data-testid="todo-title"]').should('have.text', 'cooking');

    cy.get(':nth-child(3) > .view > [data-testid="todo-title"]').should('be.visible');
    cy.get(':nth-child(3) > .view > [data-testid="todo-title"]').should('have.text', 'study');

})

it('Check new todo test', () => {
    cy.visit('https://demo.playwright.dev/todomvc')

    //Creating to-do list
    cy.get('.new-todo').clear();
    cy.get('.new-todo').type('laundry{enter}');
    cy.get('.new-todo').type('cooking{enter}');
    cy.get('.new-todo').type('study{enter}');
  
    //Check to-do list
    cy.get(':nth-child(1) > .view > .toggle').check();
    cy.get(':nth-child(2) > .view > .toggle').check();
    cy.get(':nth-child(3) > .view > .toggle').check();

    //Assert to-do list is checked
    cy.get(':nth-child(1) > .view > .toggle').should('be.checked');
    cy.get(':nth-child(2) > .view > .toggle').should('be.checked');
    cy.get(':nth-child(3) > .view > .toggle').should('be.checked');
   
})

it('Delete new todo test', () => {
    cy.visit('https://demo.playwright.dev/todomvc')

    //Creating to-do list
    cy.get('.new-todo').clear();
    cy.get('.new-todo').type('laundry{enter}');
    cy.get('.new-todo').type('cooking{enter}');
    cy.get('.new-todo').type('study{enter}');
  
    //Delete to-do list
    cy.get(':nth-child(1) > .view > .destroy').click({force: true});
    cy.get(':nth-child(2) > .view > .destroy').click({force: true});
    cy.get(':nth-child(1) > .view > .destroy').click({force: true});


})