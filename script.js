function resize(button) {
  if (button) {
    button.style.transform = "scale(1.2)";
  }
}

function reset(button) {
  if (button) {
    button.style.transform = "scale(1)";
  }
}

document.addEventListener("DOMContentLoaded", function() {

  var testoDaScrivere = "👋 Welcome!";
  
  var testoScrittura = document.getElementById("animatedText");
  
  function animaScrittura() {
      var i = 0;
      var intervallo = setInterval(function() {
          testoScrittura.textContent += testoDaScrivere[i];
          i++;
          if (i === testoDaScrivere.length) {
              clearInterval(intervallo);
          }
      }, 100);
  }
  
  animaScrittura();
});