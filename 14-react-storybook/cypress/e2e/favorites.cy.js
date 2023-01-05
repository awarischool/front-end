describe('Favorites flow', () => {

    it('should open the site correctly', () => {
        cy.visit('/');
    });

    it('should render the list correctly', () => {
        cy.get("[data-testid='list']").should('be.visible');
    });

    it('should render list items correctly', () => {
        cy.get("[data-testid='list-item-1']").should('be.visible');
        cy.get("[data-testid='list-item-20']").should('be.visible');
    });

    it('should add item to favorite correctly', () => {
        // Item 1
        cy.get("[data-testid='heart-1']").click();
        cy.get("[data-testid='heart-1']").should('have.class', 'heart-selected');

        // Item 2
        cy.get("[data-testid='heart-2']").click();
        cy.get("[data-testid='heart-2']").should('have.class', 'heart-selected');

        // Item 3
        cy.get("[data-testid='heart-3']").click();
        cy.get("[data-testid='heart-3']").should('have.class', 'heart-selected');
    });

    it('should remove item to favorite correctly', () => {
        // Item 1
        cy.get("[data-testid='heart-1']").should('have.class', 'heart-selected');

        // Item 2
        cy.get("[data-testid='heart-2']").should('have.class', 'heart-selected');
        cy.get("[data-testid='heart-2']").click();
        cy.get("[data-testid='heart-2']").should('not.have.class', 'heart-selected');

        // Item 3
        cy.get("[data-testid='heart-3']").should('have.class', 'heart-selected');
        cy.get("[data-testid='heart-3']").click();
        cy.get("[data-testid='heart-3']").should('not.have.class', 'heart-selected');
    });
});