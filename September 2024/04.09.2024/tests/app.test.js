const request = require("supertest");
const app = require("../server.js"); // Adjust this path to point to your Express app

describe("GET /products", () => {
 it("should response with code 200", async () => {
  const response = await request(app).get(`/products`);
  expect(response.statusCode).toBe(200);
  expect(response.body).toBeDefined();
 });
});

describe("GET /products/1", () => {
 it("should response with code 200", async () => {
  const response = await request(app).get(`/products/1`);
  expect(response.statusCode).toBe(200);
  expect(response.body).toBeDefined();
 });
});

describe("GET /products/1448", () => {
 it("should response with code 404", async () => {
  const response = await request(app).get(`/products/1448`);
  expect(response.statusCode).toBe(404);
  expect(response.body).toBeDefined();
 });
});

describe("GET /prdaf", () => {
 it("should response with code 404", async () => {
  const response = await request(app).get(`/prdaf`);
  expect(response.statusCode).toBe(404);
 });
});

describe("post /api/products", () => {
 it("should response with code 200", async () => {
  const product = {
   title: "test product",
   price: 13.5,
   description: "lorem ipsum set",
   image: "https://i.pravatar.cc",
   category: "electronic",
  };
  const response = await request(app).get(`/products`).send(product);
  expect(response.statusCode).toBe(200);
  expect(response.body).toBeDefined();
 });
});
