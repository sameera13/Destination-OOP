const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person");

describe("Plane class", () => {
  test("should create a Plane instance with company and destination", () => {
    const plane = new Plane("Delta", "LAX");
    expect(plane.company).toBe("Delta");
    expect(plane.destination).toBe("LAX");
  });

  test("should initialize with empty passengers array", () => {
    const plane = new Plane("United", "JFK");
    expect(plane.getPassengers()).toEqual([]);
  });

  test("should add a passenger", () => {
    const plane = new Plane("Southwest", "SEA");
    const passenger = new Person("Max", "SEA");
    plane.addPassenger(passenger);
    expect(plane.getPassengers()).toContain(passenger);
  });
});
