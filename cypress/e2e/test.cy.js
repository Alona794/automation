describe('Login', () => {
  const url = 'http://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(url); 
  });

  it('Logs in with valid credentials', () => {
    // Input valid credentials, successful login
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it('Fails to login with invalid credentials', () => {
    // Input invalid username, Error message
    cy.get('#username').type('alona');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click(); 

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');

    // Input invalid password, Error message
    cy.get('#username').clear().type('tomsmith');
    cy.get('#password').clear().type('alona');
    cy.get('.radius').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your password is invalid!');
  });

  it('Fails to login with empty fields', () => {
    // Login without credentials
    cy.get('.radius').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });
});