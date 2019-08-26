const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'],
      hexBtn = document.querySelector('.color-btn'),
      bodyBg = document.querySelector('body'),
      hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexColor += hexNumbers[random];
    }

    bodyBg.style.backgroundColor = hexColor;
    hex.innerHTML = hexColor;
}