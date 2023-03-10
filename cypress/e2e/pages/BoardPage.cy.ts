/// <reference types="cypress" />

import { BASE_URL } from "../../../src/utils/constants";

describe("run application", () => {
  beforeEach(() => {
    cy.visit(BASE_URL.LOCAL);
  });

  it("displays Board", () => {
    cy.get(".sc-beySbM").should("have.text", "Card");
  });
});
