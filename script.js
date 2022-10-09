window.onload = function() {
  
  let buttonRandomColor = document.getElementById('button-random-color');
  let color1 = document.getElementById('color1')
  let color2 = document.getElementById('color2')
  let color3 = document.getElementById('color3')
  let color4 = document.getElementById('color4')
  

  color1.className += ' selected'

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
    
  return color
    
}
  

buttonRandomColor.addEventListener("click", function() {
    color2.style.backgroundColor = generateColor()
    
    color3.style.backgroundColor = generateColor()
  
    color4.style.backgroundColor = generateColor()
  
    addClassToLocalStorage()
    addClassToLocalStorage2()
})


checkKey();


}


// function checkKey() {
//   if (!localStorage.getItem('colorPalette2')) {
//    localStorage.setItem('colorPalette2', 'color2');
//    localStorage.setItem('colorPalette3', 'color3');
//    localStorage.setItem('colorPalette4', 'color4');
//   } else {
//     color2.style.backgroundColor = localStorage.getItem('colorPalette2')
//     color3.style.backgroundColor = localStorage.getItem('colorPalette3')
//     color4.style.backgroundColor = localStorage.getItem('colorPalette4')
//   }
// }


function addClassToLocalStorage2() {
    localStorage.setItem('color2', (color2.style.backgroundColor))
    localStorage.setItem('color3', (color3.style.backgroundColor))
    localStorage.setItem('color4', (color4.style.backgroundColor))
}


function addClassToLocalStorage() {
  localStorage.setItem('colorPalette', (color2.style.backgroundColor) +  ', ' + (color3.style.backgroundColor) + ', ' + (color4.style.backgroundColor))
}


function checkKey() {
  if (localStorage.getItem('colorPalette') === null) {
    localStorage.setItem('colorPalette', 'color2' + ', ' + 'color3' + ', ' + 'color4')
    localStorage.setItem('color2', 'color2')
    localStorage.setItem('color3', 'color3')
    localStorage.setItem('color4', 'color4')
  } else {
    color2.style.backgroundColor = localStorage.getItem('color2')
    color3.style.backgroundColor = localStorage.getItem('color3')
    color4.style.backgroundColor = localStorage.getItem('color4')
  }
}


let quadro = document.getElementById('pixel-board')


for (let i = 1; i <= 25; i++) {
  // for (let i = 0; i <= 6; i++) {
  let quadrados = document.createElement('div')
  quadrados.className = 'pixel'
  quadro.appendChild(quadrados)
  // }
}