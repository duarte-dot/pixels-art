let buttonRandomColor = document.getElementById('button-random-color');
let color2 = document.getElementById('color2')
let color3 = document.getElementById('color3')
let color4 = document.getElementById('color4')


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
})

buttonRandomColor.addEventListener("click", function() {
  color3.style.backgroundColor = generateColor()
})

buttonRandomColor.addEventListener("click", function() {
  color4.style.backgroundColor = generateColor()
})