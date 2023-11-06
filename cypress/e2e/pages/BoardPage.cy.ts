/// <reference types="cypress" />

import { URL } from "../../../src/constants";

describe("Board page 렌더링", () => {
  beforeEach(() => {
    cy.visit(`${URL.BASE}board`);
  });

  it("test", () => {
    cy.contains("Trelloo").should("be.visible");
  });

  //   it("Header 표시", () => {
  //     cy.get(".sc-hAtEyd").should("be.visible");
  //   });

  //   it("Menu 표시", () => {
  //     cy.get('[data-cy="menu-button"]').should("be.visible");
  //   });

  //   it("Board 표시", () => {
  //     cy.get(".sc-eZYOHW").should("be.visible");
  //   });

  //   it("list1 텍스트를 포함한 카드 목록 렌더링", () => {
  //     cy.get(
  //       '[data-rbd-droppable-id="list1"] > .sc-oQLfA > .sc-hjsqBZ > [style="padding: 5px 10px 10px; border-radius: 0px 0px 12px 12px; background-color: rgb(234, 236, 240);"] > .sc-ejdXBC > .sc-ldFCYb',
  //     ).should("have.text", "list1");
  //   });

  //   it("card1 텍스트를 포함한 카드 렌더링", () => {
  //     cy.get('[data-rbd-draggable-id="card1"] > .sc-kiLEMZ > .ant-card > .ant-card-body > p').should(
  //       "have.text",
  //       "card1",
  //     );
  //   });

  //   it("카드, 카드 목록 추가 버튼 렌더링", () => {
  //     cy.get(":nth-child(4) > .sc-gUrTyy > .sc-csCMJt").should("have.text", "Add a card");
  //     cy.get(".sc-cmEail > form > .sc-gUrTyy > .sc-csCMJt").should("have.text", "Add a list");
  //   });
  // });

  // describe("로그인 페이지 리다이렉트 테스트", () => {
  //   beforeEach(() => {
  //     cy.visit(`${URL.BASE}board`);
  //   });

  //   it("카드 목록 추가 시 로그인 정보 없으면 로그인 페이지로 리다이렉트", function () {
  //     cy.get(".sc-cmEail > form > .sc-gUrTyy > .sc-csCMJt").should("have.text", "Add a list");
  //     cy.get(".sc-cmEail > form > .sc-gUrTyy > .sc-csCMJt").click();
  //     cy.get(".ant-input").should("have.attr", "placeholder", "Enter list title...");
  //     cy.get(".sc-kZGvTt > .sc-csCMJt").should("have.text", "Add list");
  //     cy.get(".sc-kZGvTt > .anticon > svg").should("be.visible");

  //     cy.get(".ant-input").type("list3");
  //     cy.get(".sc-kZGvTt > .sc-csCMJt").click();
  //     cy.location().should((loc) => {
  //       expect(loc.pathname).to.eq("/login");
  //     });
  //     cy.get(".sc-csCMJt").click();
  //   });
  // });

  // describe("카드 목록 테스트", () => {
  //   beforeEach(() => {
  //     cy.visit(`${URL.BASE}board`);
  //     localStorage.setItem("token", "testToken");
  //   });

  //   it("카드 목록 추가", function () {
  //     cy.get(".sc-cmEail > form > .sc-gUrTyy > .sc-csCMJt").should("have.text", "Add a list");
  //     cy.get(".sc-cmEail > form > .sc-gUrTyy > .sc-csCMJt").click();
  //     cy.get(".ant-input").should("have.attr", "placeholder", "Enter list title...");
  //     cy.get(".sc-kZGvTt > .sc-csCMJt").should("have.text", "Add list");
  //     cy.get(".sc-kZGvTt > .anticon > svg").should("be.visible");

  //     cy.get("form > :nth-child(1) > .ant-input").click();
  //     cy.get(".ant-input").type("list3");
  //     cy.get(".sc-kZGvTt > .sc-csCMJt").click();
  //   });

  //   it("카드 목록 삭제", () => {
  //     cy.visit("http://127.0.0.1:5173/board");
  //     cy.get(
  //       '[data-rbd-droppable-id="list1"] > .sc-oQLfA > .sc-hjsqBZ > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra',
  //     ).click();
  //   });

  //   it("카드 목록 이름 수정", () => {
  //     cy.visit("http://127.0.0.1:5173/board");
  //     cy.get(
  //       '[data-rbd-droppable-id="list1"] > .sc-oQLfA > .sc-hjsqBZ > [style="padding: 5px 10px 10px; border-radius: 0px 0px 12px 12px; background-color: rgb(234, 236, 240);"] > .sc-ejdXBC > .sc-ldFCYb',
  //     ).click();
  //     cy.get(".ant-input").should("have.value", "list1");
  //     cy.get(".ant-input").clear();
  //     cy.get(".ant-input").click();
  //     cy.get(".ant-input").type("edit list 1{enter}");
  //   });
  // });

  // describe("카드 테스트", () => {
  //   beforeEach(() => {
  //     cy.visit(`${URL.BASE}board`);
  //     localStorage.setItem("token", "testToken");
  //   });

  //   it("카드 추가", () => {
  //     //인풋 창 토글
  //     cy.visit("http://127.0.0.1:5173/board");
  //     cy.get(":nth-child(4) > .sc-gUrTyy > .sc-csCMJt").click();
  //     cy.get(".sc-kZGvTt > .anticon > svg").click();
  //     cy.get(":nth-child(4) > .sc-gUrTyy > .sc-csCMJt").should("have.text", "Add a card");

  //     //인풋 값 입력 후 제출
  //     cy.get(":nth-child(4) > .sc-gUrTyy > .sc-csCMJt").click();
  //     cy.get("input").type("card3");
  //     cy.get(".sc-kZGvTt > .sc-csCMJt").click();
  //   });

  //   it("카드 수정", () => {
  //     cy.get('[data-rbd-draggable-id="card1"] > .sc-kiLEMZ > .ant-card').realHover();
  //     cy.get('[data-rbd-draggable-id="card1"] > .sc-kiLEMZ > .ant-card > .ant-card-body > .anticon > svg').click();
  //     cy.get(".ant-input").click();
  //     cy.get(".sc-dQelHR > .sc-csCMJt").click();
  //   });

  //   it("카드 삭제", () => {
  //     cy.get('[data-rbd-draggable-id="card1"] > .sc-kiLEMZ > .ant-card').realHover();
  //     cy.get('[data-rbd-draggable-id="card1"] > .sc-kiLEMZ > .ant-card > .ant-card-body > .anticon > svg').click();
  //     cy.get(":nth-child(8) > .sc-csCMJt").click();
  //   });
});
