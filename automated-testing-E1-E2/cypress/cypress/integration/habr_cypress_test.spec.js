describe("Cypress tests", () => {
    it("Non existent login test", () => {
            cy.fixture('cypressTest').then(data => {
                cy.log('Go to authorization page.')
                cy.visit(data.main_url);

                cy.log('Enter non existent login.');
                cy.get('input[id="passp-field-login"]')
                    .type(data.non_existent_login);

                cy.log('Click to "Enter" button');
                cy.get('div.passp-button.passp-sign-in-button button[type="submit"]')
                    .click();
                cy.log('Should appear an error element');
                cy.get('div.Textinput-Hint_state_error')
                    .should('exist');
            })
    })
})