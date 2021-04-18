
let webGallay1 = document.getElementById('webGallay1');
let webGallay2 = document.getElementById('webGallay2');
let webGallay3 = document.getElementById('webGallay3');

render.allElements = [];
function render(Name, filePath, timeOfImage) {
  this.name = Name;
  this.filePath = filePath;
  this.timeOfImage = timeOfImage;
  this.select = 0;
  render.allElements.push(this);

}

new render('bag', '../img/bag.jpg');

new render('banana', '../img/banana.jpg');

new render('bathroom', '../img/bathroom.jpg');

new render('boots', '../img/boots.jpg');

new render('breakfast', '../img/breakfast.jpg');

new render('bubblegum', '../img/bubblegum.jpg');

new render('chair', '../img/chair.jpg');

new render('cthulhu', '../img/cthulhu.jpg');

new render('dog-duck', '../img/dog-duck.jpg');

new render('dragon', '../img/dragon.jpg');

new render('pen', '../img/pen.jpg');

new render('pet-sweep', '../img/pet-sweep.jpg');

new render('scissors', '../img/scissors.jpg');

new render('shark', '../img/shark.jpg');

new render('sweep', '../img/sweep.png');

new render('tauntaun', '../img/tauntaun.jpg');

new render('unicorn', '../img/unicorn.jpg');

new render('usb', '../img/usb.gif');

new render('water-can', '../img/water-can.jpg');

new render('wine-glass', '../img/wine-glass.jpg');



