describe("Page not found", function () {
  before("", function () {
    cy.visit("/");
  });

  it("should assert url", function () {
    cy.url("**automationpractice.com**");
  });
});
