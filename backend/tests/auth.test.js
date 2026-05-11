import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
describe("Auth API", () => {

  // REGISTER TEST
  it("should register a new user", async () => {

    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Jest User",
        email: "jest@test.com",
        password: "123456",
        role: "user",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  // LOGIN TEST
  it("should login existing user", async () => {

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "jest@test.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

});

afterAll(async () => {
  await mongoose.connection.close();
});