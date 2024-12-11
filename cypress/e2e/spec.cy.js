
// describe("Data-driven tests", () => {
//   beforeEach(() => {
//     cy.fixture('data').then((data) => {
//       cy.wrap(data).as('testData'); // Save the data for use in tests
//     });
//   });

//   it('should log in with multiple users', function () {
//     this.testData.forEach(({ username, password }) => {
//       cy.visit('/login');
//       cy.get('#username').type(username);
//       cy.get('#password').type(password);
//       cy.get('#loginButton').click();
//       cy.contains('Welcome').should('be.visible');
//       cy.get('#logoutButton').click(); // Log out for the next test
//     });
//   });
// });
describe('My Test', () => {
  it('should log in using fixture data', () => {
    cy.fixture('data').then((data) => {
      data.forEach(({ username, password }) => {
        cy.visit('https://il.iherb.com/');
        cy.wait(1000);
        //change language to english
        cy.get('.selected-country-wrapper').first().click();
        cy.wait(1000);
        cy.contains('עברית').click();
        cy.wait(4000);
        cy.contains('English').click();
        cy.contains('Save').click();
        cy.wait(4000);
        //checking for visible elements
        cy.get('.iherb-header-cart').should("be.visible");
        cy.contains('Sign in').should('be.visible');
        cy.wait(1000);
        // Input fields+ subscribe
        cy.get('.email-subscription-input-and-validation-wrapper').last().type(username);
        cy.wait(1000);
        cy.contains('Sign up').click({force: true});
        //Search for smth
        cy.get('.search-box').type('Vitamin c kids gummies');
        cy.get('.search-keyword').first().click();

        // cy.get('.action-email').type(username);
        // // Verify that the input value matches
        // cy.get('.action-email').should('have.value', username);

      });
    });
  });
});
