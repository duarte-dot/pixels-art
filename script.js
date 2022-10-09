window.onload = function() {




  let buttonErase = document.getElementById('clear-board');
  let buttonRandomColor = document.getElementById('button-random-color');
  let color1 = document.getElementById('color1');
  let color2 = document.getElementById('color2');
  let color3 = document.getElementById('color3');
  let color4 = document.getElementById('color4');
  
  
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

buttonErase.addEventListener("click", function() {
  for (let i = 0; i < document.getElementById('pixel-board').children.length; i++)
  document.getElementById('pixel-board').children[i].style.backgroundColor = null
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

let canva1 = document.getElementById('1')
let canva2 = document.getElementById('2')
let canva3 = document.getElementById('3')
let canva4 = document.getElementById('4')
let canva5 = document.getElementById('5')
let canva6 = document.getElementById('6')
let canva7 = document.getElementById('7')
let canva8 = document.getElementById('8')
let canva9 = document.getElementById('9')
let canva10 = document.getElementById('10')
let canva11 = document.getElementById('11')
let canva12 = document.getElementById('12')
let canva13 = document.getElementById('13')
let canva14 = document.getElementById('14')
let canva15 = document.getElementById('15')
let canva16 = document.getElementById('16')
let canva17 = document.getElementById('17')
let canva18 = document.getElementById('18')
let canva19 = document.getElementById('19')
let canva20 = document.getElementById('20')
let canva21 = document.getElementById('21')
let canva22 = document.getElementById('22')
let canva23 = document.getElementById('23')
let canva24 = document.getElementById('24')
let canva25 = document.getElementById('25')

function checkKey() {
  for (let i = 0; i < document.getElementById('pixel-board').children.length; i++)
  
  if (localStorage.getItem('colorPalette') === null && canva1.style.backgroundColor === '') {
    localStorage.setItem('colorPalette', 'color2' + ', ' + 'color3' + ', ' + 'color4')
    localStorage.setItem('color2', 'color2')
    localStorage.setItem('color3', 'color3')
    localStorage.setItem('color4', 'color4')
    localStorage.setItem('canva1', 'white')
  } else {
    color2.style.backgroundColor = localStorage.getItem('color2')
    color3.style.backgroundColor = localStorage.getItem('color3')
    color4.style.backgroundColor = localStorage.getItem('color4')
    canva1.style.backgroundColor = localStorage.getItem('canva1')
  }
}


let quadro = document.getElementById('pixel-board')


function paintPixels() {
  for (let i = 0; i < document.getElementById('pixel-board').children.length; i++)
  
  if (color1.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color1.style.backgroundColor
      localStorage.setItem('canva1', JSON.stringify(document.getElementById('pixel-board').children[0].style.backgroundColor))
      localStorage.setItem('canva1', canva1.style.backgroundColor)
    })
  } else if (color2.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color2.style.backgroundColor
      localStorage.setItem('canva1', canva1.style.backgroundColor)
    })
  } else if (color3.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color3.style.backgroundColor
      localStorage.setItem('canva1', canva1.style.backgroundColor)
    })
  } else if (color4.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color4.style.backgroundColor
      localStorage.setItem('canva1', canva1.style.backgroundColor)
    })
  }
}