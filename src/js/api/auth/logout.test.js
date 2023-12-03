
/*
 * Test Suite: Ensuring the logout process effectively removes stored credentials
 */

import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("Testing the logout process", () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("clears the token from storage upon logout", () => {
    logout();

    // Verify that the token is removed
    expect(remove).toHaveBeenCalledWith("token");
  });

  it("clears the user profile from storage", () => {
    logout();

    // Verify that the profile information is removed
    expect(remove).toHaveBeenCalledWith("profile");
  });

  it("clears both token and profile data", () => {
    logout();

    // Verify both token and profile data are removed
    expect(remove).toHaveBeenCalledTimes(2);
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});

