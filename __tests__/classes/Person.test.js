const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("Person class", () => {
  test("should create a Person instance", () => {
    const person = new Person("Sam", "LAX");
    expect(person).toBeInstanceOf(Person);
  });

  test("should set name and destination correctly", () => {
    const person = new Person("Jane", "ORD");
    expect(person.name).toBe("Jane");
    expect(person.destination).toBe("ORD");
  });

  test("should initialize with empty bags array", () => {
    const person = new Person("Dan", "DFW");
    expect(person.getBags()).toEqual([]);
  });

  test("should add a bag", () => {
    const person = new Person("Anna", "SFO");
    const bag = new Bag(22, 555);
    person.addBag(bag);
    expect(person.getBags()).toContain(bag);
  });
});
