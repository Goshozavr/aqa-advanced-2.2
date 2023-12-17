describe("Dialod page", () => {
  it("Should show modal window with all elements", () => {
    cy.visit("/pages/modal-overlays/dialog");

    cy.get('nb-card[class="form-input-card"]')
      .first()
      .find("button.status-primary")
      .click();

    cy.get('ngx-dialog-name-prompt[class="ng-star-inserted"]').as("form");
    cy.get("@form").find("nb-card-header").as("header");
    cy.get("@form").find('[placeholder="Name"]').as("nameInput");
    cy.get("@form")
      .first()
      .find("button.status-danger")
      .then(($elements) => {
        const buttonsText = ["Cancel", "Submit"];
        cy.wrap($elements).then(() => {
          cy.log(`BUTTONS TEXT : ${JSON.stringify(buttonsText)}`);
          expect(buttonsText).to.deep.equal(["Cancel", "Submit"]);
        });
      });
  });
});
