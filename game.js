// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen);
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide);

  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.remove('blue', 'invisible');
  evt.target.classList.toggle('green')
  updateCounts('green')
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.target.classList.remove('green', 'invisible');
  evt.target.classList.toggle('blue');
  updateCounts('blue');
}
// CREATE FUNCTION hide HERE
function hide(evt){
  evt.target.classList.remove('blue', 'green');
  evt.target.classList.toggle('invisible');
  updateCounts('invisible');
}

var totals = {
  blue: 0,
  green: 0,
  invisible: 0
}

function updateCounts (color) {
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  totals[color]++;
  
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
