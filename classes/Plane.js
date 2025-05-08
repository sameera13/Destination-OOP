const Airport = require('./Airport');

class Plane {
  constructor(company, destination) {
    this.company = company;
    this.origin = Airport.airportCode;
    this.destination = destination;
    this.passengers = [];
  }

  addPassenger(passenger) {
    this.passengers.push(passenger);
  }

  getPassengers() {
    return this.passengers;
  }
}

module.exports = Plane;
