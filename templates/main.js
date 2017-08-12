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
        <img src="/assets/waves.gif" />
        ${state.animals.map(animal)}
      </div>
    </div>
  ` 
   // add new animal to state
  function add () {
    emit('addAnimal')
  }
  
}