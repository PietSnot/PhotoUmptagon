/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let width;                 // the width of the displayed image
let height;                // the height of the displayed image
let aantalImages;
let centerDiv;             // the center of the displayed umpteen-tagon
let currentAngleX;
let endAngleX;
let currentAngleY;
let endAngleY;

window.addEventListener('load', init);

function init() {
    console.log('in init');
    
    data.init();
    currentAngleX = data.startAngleX;
    currentAngleY = data.startAngleY;
    endAngleX = data.endAngleX;
    endAngleY = data.endAngleY;
    
    centerDiv = document.getElementById('centrum');
    centerDiv.style.transformStyle = 'preserve-3d';
    centerDiv.style.transform = formatTranslateFrom(5);
    centerDiv.addEventListener('mouseover', function() {
       centerDiv.style.transform =  formatTranslateTo(5);
    });
    centerDiv.addEventListener('mouseout', function() {
        centerDiv.style.transform = formatTranslateFrom(5);
    });
    
    // add eventlistener to the button; when clicked, the new number of images will take place
    let knop = document.getElementById('button');
    knop.addEventListener('click', verwerkKlik);
    
    document.getElementById('rotateX+').addEventListener('click', e => processTranslate(10, 0));
    document.getElementById('rotateX-').addEventListener('click', e => processTranslate(-10, 0));
    document.getElementById('rotateY+').addEventListener('click', e => processTranslate(0, 10));
    document.getElementById('rotateY-').addEventListener('click', e => processTranslate(0, -10));
    

    determineNrOfImages();
//    createImages();
    data.change(centerDiv, aantalImages);
 }
 
function determineNrOfImages() {
    aantalImages = parseInt(document.getElementById('inputnumber').value);
    console.log('images: ' + aantalImages);
}

function verwerkKlik() {
    const iv = document.getElementById('inputnumber');
    let waarde = iv.value;
    console.log('waarde = ' + waarde);
    if (waarde < 3) waarde = 3;
    if (waarde > 25) waarde = 25;
    iv.value = '' + waarde;
    determineNrOfImages();
    data.change(centerDiv, aantalImages);
}

function formatTranslateFrom(seconds) {
    var s = `rotateX(${currentAngleX}deg) rotateY(${currentAngleY}deg)`;
    console.log("formatFrom = " + s);
    centerDiv.style.transitionDuration = seconds + 's';
    return s;
}

function formatTranslateTo(seconds) {
    var s = `rotateX(${endAngleX}deg) rotateY(${endAngleY}deg)`;
    console.log("formatTo = " + s);
    centerDiv.style.transitionDuration = seconds + 's';
    return s;
}

function processTranslate(x, y) {
    currentAngleX += x;
    currentAngleY += y;
    endAngleX += x;
    endAngleY += y;
//    centerDiv.style.transitionDuration = '1s';
    centerDiv.style.transform = formatTranslateFrom(1);
}




