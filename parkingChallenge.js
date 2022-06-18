// For this challenge, you have to implement a class in JavaScript. That class should consist of variables and methods that simulate how a parking lot works. Here are the details:

// We should be able to create the parking lot with a given size (number of parking spots)
// We don’t differentiate between different vehicles – we consider them all the same
// Our class provides a method for parking new cars in the parking lot
// Our class provides a method for removing already parked cars, and
// Our class provides a method for getting the size of the parking lot (total count of slots)

class ParkingLot {
  slots = []

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null)
  }

  park(carId) {
    console.log(`Parking car: ${carId}`)
    if(this.slots.every((slot) => slot !== null)){
      return false
    }
    for(let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i]
      if(slot === null) {
        this.slots[i] = carId
        return true
      }
    }
  }
  remove(carId) {
    console.log(`Leaving car: ${carId}`)
    if(this.slots.every((slot) => slot !== carId)) {
      return false
    }
    for(let i = 0;  i < this.slots.length; i++) {
      const slot = this.slots[i];

      if(slot === carId) {
        this.slots[i] = null
        return true
      }
    }
  
  }
  getSlots() {
    console.log(`Parking slots: ${this.slots}`)
    return this.slots
  } 
  getSize() {
    console.log(`Parking lot size is: ${this.slots.length}`)
    return this.slots.length
  }

  getAvailable() {
    const remainingSlots = this.slots.filter((item) => item === null).length
    console.log(`Avaible parking spots: ${remainingSlots}`)
    return remainingSlots
  }

  isFull() {
    return this.getAvailable() === 0;
  }
}