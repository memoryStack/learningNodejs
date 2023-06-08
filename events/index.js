const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('resp', (eventData) => {
  console.log(eventData)
})

customEmitter.emit('resp', 'some random response')
