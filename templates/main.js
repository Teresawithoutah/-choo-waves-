/// import choo's template helper
var html = require('choo/html')

// import template
var animal = require('./animal.js')

// export module
module.exports = function (state,emit) {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/waves.gif" onclick=${add}/>
        ${state.animals.map(animal)}
      </div>
    </div>
  ` 
 function add (e) {
  var x = e.offsetX - 20
  var y = e.offsetY - 10

  var obj = {x: x, y: y}
  emit('addAnimal', obj)
}
  
}

