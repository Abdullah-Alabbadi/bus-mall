'use strict';

let webGallay1 = document.getElementById('webGallary1L');
let webGallay2 = document.getElementById('webGallary2C');
let webGallay3 = document.getElementById('webGallary3R');
let secOne = document.getElementById('sec-one');
let Result = document.getElementById('Result');
let leftWebGallaryIndex1;
let centerWebGallaryIndex2;
let rightWebGallaryIndex3;
let count = 0;
let maxAttempts = 25;
let displayName = [];

function Render(Name, source) {
  this.name = Name;
  this.source = source;
  this.select = 0;
  this.showSelected = 0;
  Render.allElements.push(this);
  displayName.push(this.name);
}

Render.allElements = [];

new Render('bag', 'img/bag.jpg');

new Render('banana', 'img/banana.jpg');

new Render('bathroom', 'img/bathroom.jpg');

new Render('boots', 'img/boots.jpg');

new Render('breakfast', 'img/breakfast.jpg');

new Render('bubblegum', 'img/bubblegum.jpg');

new Render('chair', 'img/chair.jpg');

new Render('cthulhu', 'img/cthulhu.jpg');

new Render('dog-duck', 'img/dog-duck.jpg');

new Render('dragon', 'img/dragon.jpg');

new Render('pen', 'img/pen.jpg');

new Render('pet-sweep', 'img/pet-sweep.jpg');

new Render('scissors', 'img/scissors.jpg');

new Render('shark', 'img/shark.jpg');

new Render('sweep', 'img/sweep.png');

new Render('tauntaun', 'img/tauntaun.jpg');

new Render('unicorn', 'img/unicorn.jpg');

new Render('usb', 'img/usb.gif');

new Render('water-can', 'img/water-can.jpg');

new Render('wine-glass', 'img/wine-glass.jpg');


console.log(Render.allElements);


let previouslyshowSelected = [];
function checking(idx, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (idx === arr[i]) {
      return true;
    }
  } return false;
}
function collectImageToGenerate() {
  leftWebGallaryIndex1 = generateRandomImag();
  centerWebGallaryIndex2 = generateRandomImag();
  rightWebGallaryIndex3 = generateRandomImag();

  while (leftWebGallaryIndex1 === rightWebGallaryIndex3 || leftWebGallaryIndex1 === centerWebGallaryIndex2 || centerWebGallaryIndex2 === rightWebGallaryIndex3 || previouslyshowSelected.includes(leftWebGallaryIndex1) || previouslyshowSelected.includes(centerWebGallaryIndex2) || checking(rightWebGallaryIndex3, previouslyshowSelected)) {
    rightWebGallaryIndex3 = generateRandomImag();
    centerWebGallaryIndex2 = generateRandomImag();
    leftWebGallaryIndex1 = generateRandomImag();
  }

  previouslyshowSelected = [leftWebGallaryIndex1, centerWebGallaryIndex2, rightWebGallaryIndex3];



  webGallay1.src = Render.allElements[leftWebGallaryIndex1].source;
  Render.allElements[leftWebGallaryIndex1].showSelected++;
  webGallay2.src = Render.allElements[centerWebGallaryIndex2].source;
  Render.allElements[centerWebGallaryIndex2].showSelected++;
  webGallay3.src = Render.allElements[rightWebGallaryIndex3].source;
  Render.allElements[rightWebGallaryIndex3].showSelected++;

}
collectImageToGenerate();


secOne.addEventListener('click', handleClicking);


function handleClicking(event) {
  count++;
  if (maxAttempts >= count) {
    if (event.target.id === 'webGallary1L') {
      Render.allElements[leftWebGallaryIndex1].select++;
    } else if (event.target.id === 'webGallary2C') {
      Render.allElements[centerWebGallaryIndex2].select++;
    } else if (event.target.id === 'webGallary3R') {
      Render.allElements[rightWebGallaryIndex3].select++;
    } else {
      alert('click on the image');
      count--;
    }
    collectImageToGenerate();
    console.log(Render.allElements);
  } else {
    renderList();
    chart();

    secOne.removeEventListener('click', handleClicking);
  }
}

// let button = document.createElement('button');
// Result.appendChild(button);
// button.setAttribute('id', 'A');
// button.textContent = 'View Results';

// secOne.addEventListener('click', lastHandle);

// function lastHandle(event) {

//   ulList();
//   button.removeEventListener('click', lastHandle);
// }


// function ulList() {

//   let ul = document.getElementById('ulList');

//   for (let i = 0; i < Render.allElements.length; i++) {
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `The ${Render.allElements[i].Name} It has been voted ${Render.allElements[i].select}  and was seen ${Render.allElements[i].showSelected} Times `;
//   }
// }

let repeatSelected = [];
let repeatShowSelected = [];
function renderList() {
  let ul = document.getElementById('ulList');
  for (let i = 0; i < Render.allElements.length; i++) {
    repeatSelected.push(Render.allElements[i].select);
    repeatShowSelected.push(Render.allElements[i].showSelected);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Render.allElements[i].name} it has ${Render.allElements[i].select} select and its seen ${Render.allElements[i].showSelected}`;
  }
  console.log(Render.allElements);

}

function generateRandomImag() {
  return Math.floor(Math.random() * Render.allElements.length);
}


function chart() {
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: displayName,
      datasets: [{
        label: '#Number of Selectd bus',
        data: repeatSelected,
        backgroundColor: [
          'rgba(103, 128, 159, 1)',
        ],
        borderWidth: 1
      }, {
        label: '#Number of appear to user',
        data: repeatShowSelected,
        backgroundColor: [
          'rgb(0%, 100%, 93%, 19%)'
        ],
        borderWidth: 1
      }]
    }
  });
}
