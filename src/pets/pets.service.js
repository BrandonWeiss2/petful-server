const Queue = require('../queue/Queue')
const store = require('../../store')
const { cats } = require('../../store')

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
      if(pets.dogs.show() === pets.dogs.last.value) {
        pets.dogs.dequeue();
        store.dogs.forEach(dog => pets.dogs.enqueue(dog))
      } else {
        pets.dogs.dequeue();
      }
    }
    if(type === 'cat') {
      if(pets.cats.show() === pets.cats.last.value) {
        pets.cats.dequeue();
        store.cats.forEach(cat => pets.cats.enqueue(cat))
      } else {
        pets.cats.dequeue();
      }
    }
    if(type === 'both') {
      if(pets.dogs.show() === pets.dogs.last.value) {
        pets.dogs.dequeue();
        store.dogs.forEach(dog => pets.dogs.enqueue(dog))
      } else {
        pets.dogs.dequeue();
      }
      if(pets.cats.show() === pets.cats.last.value) {
        pets.cats.dequeue();
        store.cats.forEach(cat => pets.cats.enqueue(cat))
      } else {
        pets.cats.dequeue();
      }
    }
  }
}
