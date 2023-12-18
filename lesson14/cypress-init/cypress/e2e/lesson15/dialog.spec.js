describe("Dialod page", () => {
  it("Should show modal window with all elements", () => {
    cy.visit("/pages/modal-overlays/dialog");

    const name = "aboba";

    cy.get('nb-card[class="form-input-card"]')
      .first()
      .find("button.status-primary")
      .click();

    cy.get('ngx-dialog-name-prompt[class="ng-star-inserted"]')
      .as("form")
      .should("be.visible");
    cy.get("@form")
      .first()
      .find("nb-card-header")
      .as("header")
      .then(($element) => {
        const headerText = "Enter your name";
        cy.wrap($element).then(() => {
          expect(headerText).to.deep.equal("Enter your name");
        });
      });

    cy.get("@form")
      .first()
      .find("button.status-danger")
      .then(($elements) => {
        const buttonsText = ["Cancel", "Submit"];
        cy.wrap($elements).then(() => {
          cy.log(`BUTTONS TEXT : ${JSON.stringify(buttonsText)}`);
          expect(buttonsText).to.deep.equal(["Cancel", "Submit"]);
        });
        cy.get("@form")
          .first()
          .find(
            'button[class="cancel appearance-filled size-medium status-danger shape-rectangle transitions"]'
          )
          .click()
          .as("Cancel button check");

        cy.get('nb-card[class="form-input-card"]')
          .first()
          .find("button.status-primary")
          .click();

        cy.get("@form").find('input[placeholder="Name"]').as("nameInput");
        cy.get("@nameInput").type(name);
        cy.get("@nameInput").invoke("val").should("be.equal", name);
        cy.get("@form")
          .first()
          .find('button[status="success"]')
          .click()
          .as("Submit button check");

        cy.get('nb-card[class="form-input-card"]')
          .first()
          .find('li[class="ng-star-inserted"]')
          .then(($el) => {
            const liText = "aboba";
            cy.wrap($el)
              .then(() => {
                expect(liText).to.deep.equal(name);
              })
              .as("Expected result");
          });
      });
  });
});
