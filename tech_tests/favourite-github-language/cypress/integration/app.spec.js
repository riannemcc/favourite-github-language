describe("Cypress", () => {
    it("is working", () => {
      expect(true).to.equal(true);
    });
  });

context('App', () => {
    beforeEach(() => {
      cy.visit("localhost:3000")
    })

describe("User can enter their username", () => {
    it("allows the user to enter text into inout box", () => {
        cy.get("#name_box")
            .type("riannemcc")
            .should(
                'have value',
                'riannemcc'  
            );
    })
})
})