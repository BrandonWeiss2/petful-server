const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    let nextCat = pets.cats.show();
    let nextDog = pets.dogs.show();
    let nextPets = {
      nextCat, 
      nextDog,
    }
    return nextPets
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type === 'dog') {
      return pets.dogs.dequeue();
    }
    if(type === 'cats') {
      return pets.cats.dequeue();
    }
  }
}
