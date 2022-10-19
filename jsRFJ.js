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
    
    data.init();
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




