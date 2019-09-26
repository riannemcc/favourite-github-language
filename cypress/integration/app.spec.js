describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

context("App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  describe("User can enter their username", () => {
    it("allows the user to enter text into input box", () => {
      cy.get(".nameBox")
        .type("riannemcc")
        .should("have.value", "riannemcc");
    });
  });

  describe("User can submit their name", () => {
    it("allows the user to click the submit button", () => {
      cy.get(".button").click();
    });
  });

  describe("shows nickname", () => {
    it("displays the user's nickname upon clicking the button", () => {
      cy.get(".nameBox").type("riannemcc");
      cy.get(".button").click();
      cy.get(".userDetails").should("contain", "Rianne");
    });
  });

  describe("shows avatar", () => {
    it("displays the user's avatar upon clicking the button", () => {
      cy.get(".nameBox").type("riannemcc");
      cy.get(".button").click();
      cy.get(".userDetails")
        .find("img")
        .should("be.visible");
    });
  });

  describe("returns favourite language", () => {
    it("dispplays the user's most popular language from github", () => {
      cy.get(".nameBox").type("riannemcc");
      cy.get(".button").click();
      cy.get(".favouriteLanguage").should("contain", "Ruby");
    });
  });
});
