describe('Tipalti Dog Test', () => {
    beforeEach(() => {
    // Step 1: Navigate to the site

      cy.visit('https://qa-tipalti-assignment.tipalti-pg.com/index.html');
    });
  
    it('should get menu items, validate the relevant dog option and send details', () => {
  
    // Step 2: Click on the Menu (hamburger) button to open the menu
      cy.get('a[href="#menu"]').first().click();
      
    // Step 3: Get all menu item texts and save them to an array
      let menuItems = [];
      cy.get('a').should('be.visible').each(($el) => {
        menuItems.push($el.text().trim());
      }).then(() => {
        console.log(menuItems);
  
    // Step 4: Validate that the relevant dog option exists in the array
        const dogMenuOption = 'Kimba';
        expect(menuItems).to.include(dogMenuOption);
  
    // Step 5: Click on the relevant menu option (use the actual dog name from the array)
        cy.get('a').contains(dogMenuOption).click({force: true});
  
    // Step 6: Fill out the contact details (fill out form elements as needed)
        cy.get('input[name="name"]').type('Alona');
        cy.get('input[name="email"]').type('alona@example.com');
        cy.get('textarea[name="message"]').type('This is a unique message for the dog.');
  
    // Step 7: Create a unique message containing the dog’s name
        cy.get('textarea[name="message"]')
          .type(` You are the cutest office manager ever ${dogMenuOption}!`);
  
    // Step 8: Send the details (click the send button)
        cy.contains('Send').click();

      });
    });
  });
  