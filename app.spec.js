const supertest = require("supertest");
const app = require("./app");

describe("Hello World App", () => {
  describe("GET /", () => {
    test("should return 404", async () => {
      await supertest(app).get("/").expect(404);
    });
  });

  describe("GET /hello", () => {
    test("should say hello world", async () => {
      const response = await supertest(app).get("/hello").expect(200);
      expect(response.text).toEqual("Hello World!");
    });
  });

  describe("GET /hello/:name", () => {
    test("should say hello with the name", async () => {
      const name = "PeterPan";
      const response = await supertest(app).get(`/hello/${name}`).expect(200);
      expect(response.text).toEqual(`Hello ${name}!`);
    });
  });
});
