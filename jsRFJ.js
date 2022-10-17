/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let imageSource = 'het gezin op vakantie in 2011.jpg';
let overallWidth = 2100;
let width;
let height;
let startangle = -40;
let endangle = 30;
let aantalImages;

let centerDiv;

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
    
    var knop = document.getElementById('button');
    knop.addEventListener('click', verwerkKlik);

    determineNrOfImages();
    createImages();
 }
 
function determineNrOfImages() {
    aantalImages = parseInt(document.getElementById('inputnumber').value);
    console.log('images: ' + aantalImages);
}

function createImages() {
    width = Math.min(Math.max(overallWidth / aantalImages, 100), 450);
    height = width * 3 / 4;
    radius = width / 2 / Math.tan(2 * Math.PI / aantalImages / 2);
    console.log('radius = ' + radius);
    let rotation = 10;
    let deltaRotation = 360 / aantalImages;
    for (let i = 1; i <= aantalImages; i++) {
        const im = document.createElement('img');
        im.src = imageSource;
        const s = im.style;
        s.width = width + 'px';
        s.height = height + 'px';
        s.position = 'absolute';
        let tr = 'translateX(' + Math.floor(-width/2) + 'px) translateY(' + Math.floor(-height/2) + 'px)';
        tr += ' rotateY(' + rotation + 'deg) translateZ(' + radius + 'px)'; 
        console.log(tr);
        s.transform = tr;
        s.border = '2px solid blue';
        centerDiv.appendChild(im);
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




