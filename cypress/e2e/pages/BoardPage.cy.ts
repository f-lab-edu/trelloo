/// <reference types="cypress" />

import { URL } from "../../../src/constants";

describe("run application", () => {
  beforeEach(() => {
    cy.visit(URL.BASE);
  });

  it("displays Board", () => {
    cy.contains("Trelloo").should("be.visible");
  });
});
