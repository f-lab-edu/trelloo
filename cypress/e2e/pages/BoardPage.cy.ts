/// <reference types="cypress" />

import { URL } from "../../../src/constants";

describe("run application", () => {
  beforeEach(() => {
    cy.visit(URL.BASE);
  });

  it("displays Board", () => {
    cy.get(".sc-beySbM").should("have.text", "Card");
  });
});
