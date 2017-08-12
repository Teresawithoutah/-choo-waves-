// import choo
var choo = require('choo')

// import choo's template helper
var html = require('choo/html')

// import temp
var main = require('./templates/main.js')

// initialize choo
var app = choo()


//route
app.route('/', main)

// start app
app.mount('div')

