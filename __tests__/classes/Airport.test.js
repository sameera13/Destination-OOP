const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");

describe("Airport class", () => {
  test("should create an Airport instance", () => {
    const airport = new Airport("Heathrow");
    expect(airport.name).toBe("Heathrow");
  });

  test("should have a static airportCode", () => {
    expect(Airport.airportCode).toBeDefined();
    expect(typeof Airport.airportCode).toBe("string");
  });

  test("should initialize with empty planes array", () => {
    const airport = new Airport("LAX");
    expect(airport.getPlanes()).toEqual([]);
  });

  test("should add a plane", () => {
    const airport = new Airport("LHR");
    const plane = new Plane("British Airways", "JFK");
    airport.addPlane(plane);
    expect(airport.getPlanes()).toContain(plane);
  });
});

 