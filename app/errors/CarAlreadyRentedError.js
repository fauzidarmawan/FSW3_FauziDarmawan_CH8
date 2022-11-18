const ApplicationError = require("./ApplicationError");

class CarAlreadyRentedError extends ApplicationError {
  constructor(car) {
    super(`${car.name} is already rented!!`);
  this.name=car
  }

  get details() {
    return { car : this.name}
  }
}

module.exports = CarAlreadyRentedError;
