describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

context("App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  describe("Homepage", () => {
    it("does not display the user details or language box on first view", () => {
      cy.get(".userDetails").should("not.have.value", "Fave language:");
      cy.get(".userDetails").should("not.exist");
      cy.get(".favouriteLanguage").should("not.exist");
    });
  });
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

  it("clears the search bar once the user has pressed enter", () => {
    cy.get(".nameBox").type("riannemcc");
    cy.get(".button").click();
    cy.get(".nameBox").should("not.have.value", "riannemcc");
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
