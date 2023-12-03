/* global jest, describe, it, expect, beforeEach */

/*
 * Test Suite: Verifying the login process for token retrieval and storage
 */

import { login } from "./login.js";
import { save } from "../../storage/index.js";

// Setting up global fetch mock
global.fetch = jest.fn();
jest.mock("../../storage/index.js");

describe("Testing the login process", () => {
  // Resetting mocks before each test
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("successfully stores a token on login", async () => {
    // Mocking fetch to simulate successful login
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ accessToken: "testToken", additionalData: "data" }),
    });

    await login("BjoJaa36212@stud.noroff.no", "12345678");

    // Assertions for successful token storage
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith("token", "testToken");
    expect(save).toHaveBeenCalledWith("profile", { additionalData: "data" });
  });

  it("handles login failure correctly", async () => {
    // Mocking fetch to simulate failed login
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    // Assertions for handling failed login
    await expect(login("invalid@noroff.no", "invalidpass")).rejects.toThrow("Unauthorized");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).not.toHaveBeenCalled();
  });
});