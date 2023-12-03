describe("Login Failed", () => {
    it("shows error message for invalid login credentials", () => {
      cy.visit("https://bjonne696.github.io/social-media-client/");
  
      cy.wait(1500);
  
      cy.get("#registerForm button.btn.btn-outline-success").contains("Login").click();
  
      cy.get("input#loginEmail").type("invalid@noroff.no", { force: true });
      cy.get("input#loginPassword").type("invalidPassword", { force: true });
  
      cy.get("#loginForm button").contains("Login").should("be.visible").click();
  
      //Checking alert text
      cy.on("window:alert", (txt) => {
        //Assertion
        expect(txt).to.contains("Your username was not found or your password is incorrect");
      });
    });
  });