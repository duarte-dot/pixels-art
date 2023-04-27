const colors = {
  color1: document.getElementsByClassName('color1')[0],
  color2: document.getElementsByClassName('color2')[0],
  color3: document.getElementsByClassName('color3')[0],
  color4: document.getElementsByClassName('color4')[0],
};

colors.color1.classList.add('selected');

const setInitialColors = () => {
  colors.color1.style.backgroundColor = 'black';
  colors.color2.style.backgroundColor = 'red';
  colors.color3.style.backgroundColor = 'green';
  colors.color4.style.backgroundColor = 'blue';
};
setInitialColors();

const generateRandomHexNumber = () => {
  const letters = '0123456789ABCDEF';
  return letters[Math.floor(Math.random() * 16)];
};

const generateRandomHexColor = (length = 6) => {
  if (length > 6 || length < 1) {
    throw new Error('Invalid color length. Must be between 1 and 6.');
  }
  let color = '#';
  for (let i = 0; i < length; i += 1) {
    color += generateRandomHexNumber();
  }
  return color;
};

const saveColorsToLocalStorage = (colorsArray, storageKey) => {
  localStorage.setItem(storageKey, JSON.stringify(colorsArray));
};

const setColorsFromLocalStorage = () => {
  const storedColors = JSON.parse(localStorage.getItem('colorPalette'));

  if (storedColors) {
    const elementClassNames = ['color2', 'color3', 'color4'];

    elementClassNames.forEach((className, index) => {
      const elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].style.backgroundColor = storedColors[index];
      }
    });
  }
};
setColorsFromLocalStorage();

const buttonRandomColor = document.getElementById('button-random-color');

const setElementStyles = () => {
  const elementClassNames = ['color2', 'color3', 'color4'];
  const colorsArray = [];

  elementClassNames.forEach((className) => {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].style.backgroundColor = generateRandomHexColor();
      colorsArray.push(elements[i].style.backgroundColor);
    }
  });

  saveColorsToLocalStorage(colorsArray, 'colorPalette');
};

buttonRandomColor.addEventListener('click', setElementStyles);

const createPixelBoard = () => {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
};
createPixelBoard();

const selectColor = (element) => {
  colors.color1.classList.remove('selected');
  colors.color2.classList.remove('selected');
  colors.color3.classList.remove('selected');
  colors.color4.classList.remove('selected');

  element.classList.add('selected');
};
colors.color1.addEventListener('click', () => selectColor(colors.color1));
colors.color2.addEventListener('click', () => selectColor(colors.color2));
colors.color3.addEventListener('click', () => selectColor(colors.color3));
colors.color4.addEventListener('click', () => selectColor(colors.color4));

const pixels = document.querySelectorAll('.pixel');

const savePixelsToLocalStorage = () => {
  const pixelColors = Array.from(pixels).map((pixel) => pixel.style.backgroundColor);
  localStorage.setItem('pixelBoard', JSON.stringify(pixelColors));
};

const handlePixelClick = (event) => {
  const pixel = event.target;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  pixel.style.backgroundColor = selectedColor;
  savePixelsToLocalStorage();
};

const addPixelFunction = () => {
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', handlePixelClick);
  });
};
addPixelFunction();

const buttonClearBoard = document.getElementById('clear-board');

const handleClearPixels = () => {
  pixels.forEach((pixel) => {
    const pixelElement = pixel;
    pixelElement.style.backgroundColor = 'white';
  });
  savePixelsToLocalStorage();
};
buttonClearBoard.addEventListener('click', handleClearPixels);

const setStoredPixels = () => {
  const storedPixels = JSON.parse(localStorage.getItem('pixelBoard'));

  if (storedPixels) {
    pixels.forEach((pixel, index) => {
      const pixelElement = pixel;
      pixelElement.style.backgroundColor = storedPixels[index];
    });
  }
};

setStoredPixels();
