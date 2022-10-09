window.onload = function() {
  

  let buttonRandomColor = document.getElementById('button-random-color');
  let color1 = document.getElementById('color1')
  let color2 = document.getElementById('color2')
  let color3 = document.getElementById('color3')
  let color4 = document.getElementById('color4')
  
  
  color1.style.backgroundColor = 'black'
  color2.style.backgroundColor = 'red'
  color3.style.backgroundColor = 'green'
  color4.style.backgroundColor = 'blue'


  color1.className = 'color selected'


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
})


color1.addEventListener("click", function() {
  color1.className = 'color selected'
  color2.className = 'color'
  color3.className = 'color'
  color4.className = 'color'
  paintPixels();
})

color2.addEventListener("click", function() {
  color1.className = 'color'
  color2.className = 'color selected'
  color3.className = 'color'
  color4.className = 'color'
  paintPixels();

})

color3.addEventListener("click", function() {
  color1.className = 'color'
  color2.className = 'color'
  color3.className = 'color selected'
  color4.className = 'color'
  paintPixels();
})

color4.addEventListener("click", function() {
  color1.className = 'color'
  color2.className = 'color'
  color3.className = 'color'
  color4.className = 'color selected'
  paintPixels();

})

paintPixels();

checkKey();


}


function addClassToLocalStorage() {
  localStorage.setItem('colorPalette', (color2.style.backgroundColor) +  ', ' + (color3.style.backgroundColor) + ', ' + (color4.style.backgroundColor))
  localStorage.setItem('color2', (color2.style.backgroundColor))
  localStorage.setItem('color3', (color3.style.backgroundColor))
  localStorage.setItem('color4', (color4.style.backgroundColor))
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
  let quadrados = document.createElement('div')
  quadrados.className = 'pixel'
  quadro.appendChild(quadrados)
}


function paintPixels() {
  for (let i = 0; i < document.getElementById('pixel-board').children.length; i++)

  if (color1.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color1.style.backgroundColor
      })
  } else if (color2.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color2.style.backgroundColor
    })
  } else if (color3.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color3.style.backgroundColor
    })
  } else if (color4.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color4.style.backgroundColor
    })
  }
}