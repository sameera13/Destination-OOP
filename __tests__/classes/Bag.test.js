const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

describe("Bag class", () => {
  test("should create a Bag instance", () => {
    const bag = new Bag(23, 101);
    expect(bag).toBeInstanceOf(Bag);
  });

  test("should set weight and id correctly", () => {
    const bag = new Bag(30, 202);
    expect(bag.weight).toBe(30);
    expect(bag.id).toBe(202);
  });

  test("should initialize with null owner", () => {
    const bag = new Bag(15, 303);
    expect(bag.getOwner()).toBeNull();
  });

  test("should assign owner to a Bag", () => {
    const bag = new Bag(20, 404);
    const person = new Person("Alex", "JFK");
    bag.assignOwner(person);
    expect(bag.getOwner()).toBe(person);
  });
});
