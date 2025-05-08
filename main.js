const Bag = require('./Bag');
const Person = require('./Person');
const Plane = require('./Plane');
const Airport = require('./Airport');

function main() {
  const jfk = new Airport('John F. Kennedy International Airport');

  const person1 = new Person('Alice', 'Paris');
  const person2 = new Person('Bob', 'London');

  const bag1 = new Bag(23, 'BAG123');
  const bag2 = new Bag(15, 'BAG124');

  person1.addBag(bag1);
  person2.addBag(bag2);

  const plane1 = new Plane('Delta', 'Paris');
  plane1.addPassenger(person1);
  plane1.addPassenger(person2);

  jfk.addPlane(plane1);

  console.log(`Airport: ${jfk.name} (${Airport.airportCode})`);
  console.log(`Planes at the airport:`, jfk.getPlanes());
  console.log(`Passengers on plane:`, plane1.getPassengers().map(p => p.name));
  console.log(`Bags of ${person1.name}:`, person1.getBags().map(b => b.id));
  console.log(`Bag owner of ${bag1.id}:`, bag1.getOwner().name);
}

main();
