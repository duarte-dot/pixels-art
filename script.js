let buttonRandomColor = document.getElementById('button-random-color');
let color2 = document.getElementById('color2')


function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return JSON.stringify(color);
    
  }

  console.log(generateColor())


buttonRandomColor.addEventListener("click", ButtonRandomColor)

function ButtonRandomColor() {
    color2.style.backgroundColor = 'yellow'
 }