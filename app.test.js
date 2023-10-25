// import our express app and super test for http requests
const request = require("supertest");
const app = require("./app");

test("It should respond with Hello World!", async () => {
  // we are going to send a request to our application
  // and verify that the response matches what we expect

  const res = await request(app).get("/");
  // 'string' === 'string'
  expect(res.text).toBe("Hello World!");
});

test("It should respond with Hello World", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello World!");
});

test("It should respond with Here are the students", async () => {
  const response = await request(app).get("/students");
  expect(response.text).toBe("Here are the students");
});

test("It should show the students name", async () => {
  const name = "Vandhana";
  const response = await request(app).get(`/students/${name}`);
  expect(response.text).toBe(`Profile: ${name}`);
});

test("It should show the admin dashboard", async () => {
  const response = await request(app).get("/dashboard");
  expect(response.text).toBe("Admin Dashboard");
});
