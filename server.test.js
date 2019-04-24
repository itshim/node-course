const request = require("supertest");
const expect = require("expect");

let app = require("./server").app;

describe("server", () => {
  it("should return response", done => {
    request(app)
      .get("/")
      .expect(200)
      .end(done);
  });
});
