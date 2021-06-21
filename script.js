


//  function mouseOver() {
//     document.getElementById("headerDos").addEventListener("mouseover", mouseOver);
//      document.getElementById("headerDos").style.color = "red";
//  }

//  function mouseOut() {
//     document.getElementById("headerDos").addEventListener("mouseover", mouseOver);
//      document.getElementById("headerDos").style.color"black";
//  }
const h3 = document.createElement('h3');
h3.textContent = "This content added by JavaScript";


function buttonEventListener() {
    const input = document.getElementById('input');

    function buttonAlert() {
      alert('Alakazam!');
    }
    
    input.addEventListener('click', buttonAlert);
    
      }

      buttonEventListener()