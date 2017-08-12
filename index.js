// import choo
var choo = require('choo')


// import choo's template helper
var html = require('choo/html')

// import temp
var main = require('./templates/main.js')

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // initialize state
  state.animals = [
    {type: 'isopod', x: 200, y: 100},
    {type: 'dumbo', x: 50, y: 300},
    {type: 'lilhippo', x: 100, y: 50}
  ]

  // add animal
  emitter.on('addAnimal', function () {
    var obj = {type: 'isopod', x: 100, y: 200}
    state.animals.push(obj)

    emitter.emit('render')
  })
})

//route
app.route('/', main)

// start app
app.mount('div')

