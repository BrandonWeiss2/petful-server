const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

let queueLength = people.all().length

// --------------------
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  get() {
    return people.all()
  },

  enqueue(person) {
    people.enqueue(person)
  },
  dequeue() {
    let ran = random(store.people.length);
    let queueLength = people.all().length
    if(queueLength <= 5) {
      people.enqueue(store.people[ran])
    }
    people.dequeue()
  }
}
