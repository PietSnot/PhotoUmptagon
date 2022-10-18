/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let width;                 // the width of the displayed image
let height;                // the height of the displayed image
let aantalImages;
let centerDiv;             // the center of the displayed umpteen-tagon

window.addEventListener('load', init);

function init() {
    console.log('in init');
    
    centerDiv = document.getElementById('centrum');
    centerDiv.style.transformStyle = 'preserve-3d';
    centerDiv.style.transform = 'rotateX(' + data.startangle + 'deg) rotateY(0deg)';
    centerDiv.addEventListener('mouseover', function() {
       centerDiv.style.transform =  'rotateX(' + data.endangle + 'deg) rotateY(720deg)';
    });
    centerDiv.addEventListener('mouseout', function() {
        centerDiv.style.transform = 'rotateX(' + data.startangle + 'deg) rotateY(0deg)';
    });
    
    // add eventlistener to the button; when clicked, the new number of images will take place
    let knop = document.getElementById('button');
    knop.addEventListener('click', verwerkKlik);

    determineNrOfImages();
    createImages();
 }
 
function determineNrOfImages() {
    aantalImages = parseInt(document.getElementById('inputnumber').value);
    console.log('images: ' + aantalImages);
}

function createImages() {
    // determine the size of the displayed images
    width = Math.min(Math.max(data.overallWidth / aantalImages, 100), 450);
    height = width * 3 / 4;
    // radius is the radius of the x-tagon
    radius = width / 2 / Math.tan(2 * Math.PI / aantalImages / 2);
    let rotation = 10;   // rotation of the first image around the Y-axis
    let deltaRotation = 360 / aantalImages;  // rotation of the other images
    for (let i = 1; i <= aantalImages; i++) {
        // creating backface
        const back = document.createElement('img');
        back.src = data.achterkant;
        const b = back.style;
        b.width = width + 'px';
        b.height = height + 'px';
        b.position = 'absolute';
        b.border = '2px solid blue';
        // creating image
        const im = document.createElement('img');
        im.src = data.imageSource;
        const s = im.style;
        s.width = width + 'px';
        s.height = height + 'px';
        s.position = 'absolute';
        s.backfaceVisibility = 'hidden';
        s.border = '2px solid blue';
        // applying transform
        let tr = 'translateX(' + Math.floor(-width/2) + 'px) translateY(' + Math.floor(-height/2) + 'px)';
        tr += ' rotateY(' + rotation + 'deg) translateZ(' + radius + 'px)'; 
        b.transform = tr;
        s.transform = tr;
        // appending them to centerDiv
        centerDiv.appendChild(back);
        centerDiv.appendChild(im);
        // updating rotation
        rotation += deltaRotation;
    }
}

function removeImages() {
    while (centerDiv.hasChildNodes()) centerDiv.removeChild(centerDiv.firstChild);
}

function verwerkKlik() {
    const iv = document.getElementById('inputnumber');
    let waarde = iv.value;
    console.log('waarde = ' + waarde);
    if (waarde < 3) waarde = 3;
    if (waarde > 25) waarde = 25;
    iv.value = '' + waarde;
    removeImages();
    determineNrOfImages();
    createImages();
}




