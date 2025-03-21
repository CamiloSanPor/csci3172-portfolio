const request = require("supertest");
const app = require("../api").handler;

describe("API Tests", () => {
  test("GET /all-projects - should return list of projects", async () => {
    const response = await request(app).get("/.netlify/functions/api/all-projects");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /weather?city=London - should return weather data", async () => {
    const response = await request(app).get("/.netlify/functions/api/weather?city=London");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("city", "London");
    expect(response.body).toHaveProperty("temperature");
    expect(response.body).toHaveProperty("humidity");
  });

  test("GET /weather without city - should return 400 error", async () => {
    const response = await request(app).get("/.netlify/functions/api/weather");
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "City is required");
  });

  test("GET /weather with invalid city - should return 404 error", async () => {
    const response = await request(app).get("/.netlify/functions/api/weather?city=InvalidCity123");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("error", "City not found");
  });
});
