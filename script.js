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
  localStorage.setItem('canva1', canva1.style.backgroundColor)
  localStorage.setItem('canva2', canva2.style.backgroundColor)
  localStorage.setItem('canva3', canva3.style.backgroundColor)
  localStorage.setItem('canva4', canva4.style.backgroundColor)
  localStorage.setItem('canva5', canva5.style.backgroundColor)
  localStorage.setItem('canva6', canva6.style.backgroundColor)
  localStorage.setItem('canva7', canva7.style.backgroundColor)
  localStorage.setItem('canva8', canva8.style.backgroundColor)
  localStorage.setItem('canva9', canva9.style.backgroundColor)
  localStorage.setItem('canva10', canva10.style.backgroundColor)
  localStorage.setItem('canva11', canva11.style.backgroundColor)
  localStorage.setItem('canva12', canva12.style.backgroundColor)
  localStorage.setItem('canva13', canva13.style.backgroundColor)
  localStorage.setItem('canva14', canva14.style.backgroundColor)
  localStorage.setItem('canva15', canva15.style.backgroundColor)
  localStorage.setItem('canva16', canva16.style.backgroundColor)
  localStorage.setItem('canva17', canva17.style.backgroundColor)
  localStorage.setItem('canva18', canva18.style.backgroundColor)
  localStorage.setItem('canva19', canva19.style.backgroundColor)
  localStorage.setItem('canva20', canva20.style.backgroundColor)
  localStorage.setItem('canva21', canva21.style.backgroundColor)
  localStorage.setItem('canva22', canva22.style.backgroundColor)
  localStorage.setItem('canva23', canva23.style.backgroundColor)
  localStorage.setItem('canva24', canva24.style.backgroundColor)
  localStorage.setItem('canva25', canva25.style.backgroundColor)
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
  
  if (localStorage.getItem('colorPalette') === null && canva1.style.backgroundColor === '' && canva2.style.backgroundColor === '' && canva3.style.backgroundColor === '' && canva4.style.backgroundColor === '' && canva5.style.backgroundColor === '' && canva6.style.backgroundColor === '' && canva7.style.backgroundColor === '' && canva8.style.backgroundColor === '' && canva9.style.backgroundColor === '' && canva10.style.backgroundColor === '' && canva11.style.backgroundColor === '' && canva12.style.backgroundColor === '' && canva13.style.backgroundColor === '' && canva14.style.backgroundColor === '' && canva15.style.backgroundColor === '' && canva16.style.backgroundColor === '' && canva17.style.backgroundColor === '' && canva18.style.backgroundColor === '' && canva19.style.backgroundColor === '' && canva20.style.backgroundColor === '' && canva21.style.backgroundColor === '' && canva22.style.backgroundColor === '' && canva23.style.backgroundColor === '' && canva24.style.backgroundColor === '' && canva25.style.backgroundColor === '') {
    localStorage.setItem('colorPalette', 'color2' + ', ' + 'color3' + ', ' + 'color4')
    localStorage.setItem('color2', 'color2')
    localStorage.setItem('color3', 'color3')
    localStorage.setItem('color4', 'color4')
    localStorage.setItem('pixelBoard', 'lastColor')
    localStorage.setItem('canva1', 'white')
    localStorage.setItem('canva2', 'white')
    localStorage.setItem('canva3', 'white')
    localStorage.setItem('canva4', 'white')
    localStorage.setItem('canva5', 'white')
    localStorage.setItem('canva6', 'white')
    localStorage.setItem('canva7', 'white')
    localStorage.setItem('canva8', 'white')
    localStorage.setItem('canva9', 'white')
    localStorage.setItem('canva10', 'white')
    localStorage.setItem('canva11', 'white')
    localStorage.setItem('canva12', 'white')
    localStorage.setItem('canva13', 'white')
    localStorage.setItem('canva14', 'white')
    localStorage.setItem('canva15', 'white')
    localStorage.setItem('canva16', 'white')
    localStorage.setItem('canva17', 'white')
    localStorage.setItem('canva18', 'white')
    localStorage.setItem('canva19', 'white')
    localStorage.setItem('canva20', 'white')
    localStorage.setItem('canva21', 'white')
    localStorage.setItem('canva22', 'white')
    localStorage.setItem('canva23', 'white')
    localStorage.setItem('canva24', 'white')
    localStorage.setItem('canva25', 'white')
  } else {
    document.getElementById('pixel-board').children[i].style.backgroundColor = localStorage.getItem('pixelBoard')
    color2.style.backgroundColor = localStorage.getItem('color2')
    color3.style.backgroundColor = localStorage.getItem('color3')
    color4.style.backgroundColor = localStorage.getItem('color4')
    canva1.style.backgroundColor = localStorage.getItem('canva1')
    canva2.style.backgroundColor = localStorage.getItem('canva2')
    canva3.style.backgroundColor = localStorage.getItem('canva3')
    canva4.style.backgroundColor = localStorage.getItem('canva4')
    canva5.style.backgroundColor = localStorage.getItem('canva5')
    canva6.style.backgroundColor = localStorage.getItem('canva6')
    canva7.style.backgroundColor = localStorage.getItem('canva7')
    canva8.style.backgroundColor = localStorage.getItem('canva8')
    canva9.style.backgroundColor = localStorage.getItem('canva9')
    canva10.style.backgroundColor = localStorage.getItem('canva10')
    canva11.style.backgroundColor = localStorage.getItem('canva11')
    canva12.style.backgroundColor = localStorage.getItem('canva12')
    canva13.style.backgroundColor = localStorage.getItem('canva13')
    canva14.style.backgroundColor = localStorage.getItem('canva14')
    canva15.style.backgroundColor = localStorage.getItem('canva15')
    canva16.style.backgroundColor = localStorage.getItem('canva16')
    canva17.style.backgroundColor = localStorage.getItem('canva17')
    canva18.style.backgroundColor = localStorage.getItem('canva18')
    canva19.style.backgroundColor = localStorage.getItem('canva19')
    canva20.style.backgroundColor = localStorage.getItem('canva20')
    canva21.style.backgroundColor = localStorage.getItem('canva21')
    canva22.style.backgroundColor = localStorage.getItem('canva22')
    canva23.style.backgroundColor = localStorage.getItem('canva23')
    canva24.style.backgroundColor = localStorage.getItem('canva24')
    canva25.style.backgroundColor = localStorage.getItem('canva25')
  }
}


let quadro = document.getElementById('pixel-board')


function paintPixels() {
  for (let i = 0; i < document.getElementById('pixel-board').children.length; i++)
  
  if (color1.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color1.style.backgroundColor
      localStorage.setItem('pixelBoard', document.getElementById('pixel-board').children[i].style.backgroundColor)
      localStorage.setItem('canva1', canva1.style.backgroundColor)
      localStorage.setItem('canva2', canva2.style.backgroundColor)
      localStorage.setItem('canva3', canva3.style.backgroundColor)
      localStorage.setItem('canva4', canva3.style.backgroundColor)
      localStorage.setItem('canva5', canva5.style.backgroundColor)
      localStorage.setItem('canva6', canva6.style.backgroundColor)
      localStorage.setItem('canva7', canva7.style.backgroundColor)
      localStorage.setItem('canva8', canva8.style.backgroundColor)
      localStorage.setItem('canva9', canva9.style.backgroundColor)
      localStorage.setItem('canva10', canva10.style.backgroundColor)
      localStorage.setItem('canva11', canva11.style.backgroundColor)
      localStorage.setItem('canva12', canva12.style.backgroundColor)
      localStorage.setItem('canva13', canva13.style.backgroundColor)
      localStorage.setItem('canva14', canva14.style.backgroundColor)
      localStorage.setItem('canva15', canva15.style.backgroundColor)
      localStorage.setItem('canva16', canva16.style.backgroundColor)
      localStorage.setItem('canva17', canva17.style.backgroundColor)
      localStorage.setItem('canva18', canva18.style.backgroundColor)
      localStorage.setItem('canva19', canva19.style.backgroundColor)
      localStorage.setItem('canva20', canva20.style.backgroundColor)
      localStorage.setItem('canva21', canva21.style.backgroundColor)
      localStorage.setItem('canva22', canva22.style.backgroundColor)
      localStorage.setItem('canva23', canva23.style.backgroundColor)
      localStorage.setItem('canva24', canva24.style.backgroundColor)
      localStorage.setItem('canva25', canva25.style.backgroundColor)
    })
  } else if (color2.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color2.style.backgroundColor
      localStorage.setItem('pixelBoard', document.getElementById('pixel-board').children[i].style.backgroundColor)
      localStorage.setItem('canva1', canva1.style.backgroundColor)
      localStorage.setItem('canva2', canva2.style.backgroundColor)
      localStorage.setItem('canva3', canva3.style.backgroundColor)
      localStorage.setItem('canva4', canva4.style.backgroundColor)
      localStorage.setItem('canva5', canva5.style.backgroundColor)
      localStorage.setItem('canva6', canva6.style.backgroundColor)
      localStorage.setItem('canva7', canva7.style.backgroundColor)
      localStorage.setItem('canva8', canva8.style.backgroundColor)
      localStorage.setItem('canva9', canva9.style.backgroundColor)
      localStorage.setItem('canva10', canva10.style.backgroundColor)
      localStorage.setItem('canva11', canva11.style.backgroundColor)
      localStorage.setItem('canva12', canva12.style.backgroundColor)
      localStorage.setItem('canva13', canva13.style.backgroundColor)
      localStorage.setItem('canva14', canva14.style.backgroundColor)
      localStorage.setItem('canva15', canva15.style.backgroundColor)
      localStorage.setItem('canva16', canva16.style.backgroundColor)
      localStorage.setItem('canva17', canva17.style.backgroundColor)
      localStorage.setItem('canva18', canva18.style.backgroundColor)
      localStorage.setItem('canva19', canva19.style.backgroundColor)
      localStorage.setItem('canva20', canva20.style.backgroundColor)
      localStorage.setItem('canva21', canva21.style.backgroundColor)
      localStorage.setItem('canva22', canva22.style.backgroundColor)
      localStorage.setItem('canva23', canva23.style.backgroundColor)
      localStorage.setItem('canva24', canva24.style.backgroundColor)
      localStorage.setItem('canva25', canva25.style.backgroundColor)
    })
  } else if (color3.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color3.style.backgroundColor
      localStorage.setItem('pixelBoard', document.getElementById('pixel-board').children[i].style.backgroundColor)
      localStorage.setItem('canva1', canva1.style.backgroundColor)
      localStorage.setItem('canva2', canva2.style.backgroundColor)
      localStorage.setItem('canva3', canva3.style.backgroundColor)
      localStorage.setItem('canva4', canva4.style.backgroundColor)
      localStorage.setItem('canva5', canva5.style.backgroundColor)
      localStorage.setItem('canva6', canva6.style.backgroundColor)
      localStorage.setItem('canva7', canva7.style.backgroundColor)
      localStorage.setItem('canva8', canva8.style.backgroundColor)
      localStorage.setItem('canva9', canva9.style.backgroundColor)
      localStorage.setItem('canva10', canva10.style.backgroundColor)
      localStorage.setItem('canva11', canva11.style.backgroundColor)
      localStorage.setItem('canva12', canva12.style.backgroundColor)
      localStorage.setItem('canva13', canva13.style.backgroundColor)
      localStorage.setItem('canva14', canva14.style.backgroundColor)
      localStorage.setItem('canva15', canva15.style.backgroundColor)
      localStorage.setItem('canva16', canva16.style.backgroundColor)
      localStorage.setItem('canva17', canva17.style.backgroundColor)
      localStorage.setItem('canva18', canva18.style.backgroundColor)
      localStorage.setItem('canva19', canva19.style.backgroundColor)
      localStorage.setItem('canva20', canva20.style.backgroundColor)
      localStorage.setItem('canva21', canva21.style.backgroundColor)
      localStorage.setItem('canva22', canva22.style.backgroundColor)
      localStorage.setItem('canva23', canva23.style.backgroundColor)
      localStorage.setItem('canva24', canva24.style.backgroundColor)
      localStorage.setItem('canva25', canva25.style.backgroundColor)
    })
  } else if (color4.className === 'color selected') {
    document.getElementById('pixel-board').children[i].addEventListener("click", function() {
      document.getElementById('pixel-board').children[i].style.backgroundColor = color4.style.backgroundColor
      localStorage.setItem('pixelBoard', document.getElementById('pixel-board').children[i].style.backgroundColor)
      localStorage.setItem('canva1', canva1.style.backgroundColor)
      localStorage.setItem('canva2', canva2.style.backgroundColor)
      localStorage.setItem('canva3', canva3.style.backgroundColor)
      localStorage.setItem('canva4', canva4.style.backgroundColor)
      localStorage.setItem('canva5', canva5.style.backgroundColor)
      localStorage.setItem('canva6', canva6.style.backgroundColor)
      localStorage.setItem('canva7', canva7.style.backgroundColor)
      localStorage.setItem('canva8', canva8.style.backgroundColor)
      localStorage.setItem('canva9', canva9.style.backgroundColor)
      localStorage.setItem('canva10', canva10.style.backgroundColor)
      localStorage.setItem('canva11', canva11.style.backgroundColor)
      localStorage.setItem('canva12', canva12.style.backgroundColor)
      localStorage.setItem('canva13', canva13.style.backgroundColor)
      localStorage.setItem('canva14', canva14.style.backgroundColor)
      localStorage.setItem('canva15', canva15.style.backgroundColor)
      localStorage.setItem('canva16', canva16.style.backgroundColor)
      localStorage.setItem('canva17', canva17.style.backgroundColor)
      localStorage.setItem('canva18', canva18.style.backgroundColor)
      localStorage.setItem('canva19', canva19.style.backgroundColor)
      localStorage.setItem('canva20', canva20.style.backgroundColor)
      localStorage.setItem('canva21', canva21.style.backgroundColor)
      localStorage.setItem('canva22', canva22.style.backgroundColor)
      localStorage.setItem('canva23', canva23.style.backgroundColor)
      localStorage.setItem('canva24', canva24.style.backgroundColor)
      localStorage.setItem('canva25', canva25.style.backgroundColor)
    })
  }
}

