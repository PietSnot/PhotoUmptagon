/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let imageSource = 'het gezin op vakantie in 2011.jpg';
let achterkant = 'achterkant kaart.jpg';
let overallWidth = 2100;   // determines the size of the displayed image
let width;                 // the width of the displayed image
let height;                // the height of the displayed image
let startangle = -40;      // initial rotation around the x-axis
let endangle = 30;         // when rotating, this is the max rotation around the x-axis
let aantalImages;          // determines the number of images, min 3, max 25
let centerDiv;             // the center of the displayed umpteen-tagon

window.addEventListener('load', init);

function init() {
    console.log('in init');
    
    centerDiv = document.getElementById('centrum');
    centerDiv.style.transformStyle = 'preserve-3d';
    centerDiv.style.transform = 'rotateX(' + startangle + 'deg) rotateY(0deg)';
    centerDiv.addEventListener('mouseover', function() {
       centerDiv.style.transform =  'rotateX(' + endangle + 'deg) rotateY(720deg)';
    });
    centerDiv.addEventListener('mouseout', function() {
        centerDiv.style.transform = 'rotateX(' + startangle + 'deg) rotateY(0deg)';
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
    width = Math.min(Math.max(overallWidth / aantalImages, 100), 450);
    height = width * 3 / 4;
    // radius is the radius of the x-tagon
    radius = width / 2 / Math.tan(2 * Math.PI / aantalImages / 2);
    console.log('radius = ' + radius);
    let rotation = 10;   // rotation of the first image around the Y-axis
    let deltaRotation = 360 / aantalImages;  // rotation of the other images
    for (let i = 1; i <= aantalImages; i++) {
        // creating backface
        const back = document.createElement('img');
        back.src = achterkant;
        const b = back.style;
        b.width = width + 'px';
        b.height = height + 'px';
        b.position = 'absolute';
        b.border = '2px solid blue';
        // creating image
        const im = document.createElement('img');
        im.src = imageSource;
        const s = im.style;
        s.width = width + 'px';
        s.height = height + 'px';
        s.position = 'absolute';
        s.backfaceVisibility = 'hidden';
        s.border = '2px solid blue';
        // applying transfor
        let tr = 'translateX(' + Math.floor(-width/2) + 'px) translateY(' + Math.floor(-height/2) + 'px)';
        tr += ' rotateY(' + rotation + 'deg) translateZ(' + radius + 'px)'; 
        console.log(tr);
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




