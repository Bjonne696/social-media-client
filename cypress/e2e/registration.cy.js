describe("User Registration", () => {
    it("creates a new user profile", () => {
      const testName = "Test";
      const testEmail = Cypress.env("emailForTesting");
      const testPassword = Cypress.env("passwordForTesting");
      const testAvatarUrl = "https://gravatar.com/avatar/60d3c9caa7dcb6652ef943877dd1ebed?s=400&d=robohash&r=x";
  
      cy.visit("https://bjonne696.github.io/social-media-client/");
      cy.wait(1500);
  
      cy.get(`#registerForm button`).contains("Create Profile").should("exist");
      cy.get("form#registerForm input#registerName").type(testName);
      cy.get("form#registerForm input#registerEmail").type(testEmail);
      cy.get("form#registerForm input#registerPassword").type(testPassword);
      cy.get("form#registerForm input#registerAvatar").type(testAvatarUrl);
  
      cy.get("form#registerForm button").contains("Create Profile").should("be.visible").click();
    });
  });