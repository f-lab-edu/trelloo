/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("displays Board", () => {
    cy.get(".sc-beySbM").should("have.text", "Card");
  });
});
