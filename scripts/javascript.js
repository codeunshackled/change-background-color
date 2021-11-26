const COLORS = ["red", "blue", "grey", "white", "black", "purple", "yellow"];
let button = document.querySelector('button');
let body = document.querySelector('body');

button.addEventListener('click', function(e) { 
  let shuffle = Math.floor((Math.random() * COLORS.length));
  body.style.backgroundColor = COLORS[shuffle];
});
