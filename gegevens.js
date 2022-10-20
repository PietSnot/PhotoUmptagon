/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const data = {
    imageSource: "het gezin op vakantie in 2011.jpg",
    achterkant: 'achterkant kaart.jpg',
    overallWidth: 2100,
    maxImages: 25,
    startAngleX: -40,
    endAngleX: 30,
    startAngleY: 0,
    endAngleY: 720,
    images: [],
    backImages: [],
    
    init: function() {
        for (let i = 1; i <= this.maxImages; i++) {
            const im = document.createElement('img');
            im.src = this.imageSource;
            im.style.backfaceVisibility = 'hidden';
            im.style.position = 'absolute';
            im.style.border = '2px solid blue';
            this.images.push(im);
            const b = document.createElement('img');
            b.src = this.achterkant;
            b.style.position = 'absolute';
            b.style.border = '2px solid blue';
            this.backImages.push(b);
        }
    },
    
    change: function(centerdiv, newAantal) {
        while (centerdiv.hasChildNodes()) centerdiv.removeChild(centerdiv.firstChild);
        this.makeImages(centerdiv, newAantal);
    },
    
    makeImages: function(centerdiv, aantal) {
        const width = Math.min(Math.max(this.overallWidth / aantal, 100), 450);
        const height = width * 3 / 4;
        const radius = width / 2 / Math.tan(2 * Math.PI / aantal / 2);
        let rotation = 0;
        const deltaRotation = 360 / aantal;
        for (let i = 0; i < aantal; i++) {
            const back = this.backImages[i];
            back.style.width = width + 'px';
            back.style.height = height + 'px';
            const im = this.images[i];
            im.style.width = width + 'px';
            im.style.height = height + 'px';
            let tr = 'translateX(' + Math.floor(-width/2) + 'px) translateY(' + Math.floor(-height/2) + 'px)';
            tr += ' rotateY(' + rotation + 'deg) translateZ(' + radius + 'px)'; 
            back.style.transform = tr;
            im.style.transform = tr;
            centerdiv.appendChild(back);
            centerdiv.appendChild(im);
            rotation += deltaRotation;
        }
    }
};


