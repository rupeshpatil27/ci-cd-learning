const request = require("supertest");
const { app, add } = require("../app");

describe("Unit Test - add function", () => {
  test("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("should throw error for non-number input", () => {
    expect(() => add("a", 3)).toThrow("Inputs must be numbers");
  });
});

describe("Integration Test - POST /add", () => {
  test("should return correct sum", async () => {
    const response = await request(app).post("/add").send({ a: 4, b: 6 });

    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(10);
  });

  test("should return 400 for invalid input", async () => {
    const response = await request(app).post("/add").send({ a: "x", b: 5 });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Inputs must be numbers");
  });
});
