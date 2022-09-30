function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let six = [];
let eight = [];
let end = [];

if (window.screen.width > 1279) {
  for (let j = 0; j < 6; j++) {
    let arr1 = [];
    for (let i = 0; i < 8; i++) {
      let a = getRandomIntInclusive(1, 8);
      if (arr1.includes(a)) {
        i = i - 1;
      } else arr1.push(a);
    }
    six.push(arr1);
  }
} else if (window.screen.width < 1280 && window.screen.width > 767) {
  for (let j = 0; j < 8; j++) {
    let arr1 = [];
    for (let i = 0; i < 6; i++) {
      let a = getRandomIntInclusive(1, 8);
      if (arr1.includes(a)) {
        i = i - 1;
      } else arr1.push(a);
    }
    eight.push(arr1);
  }
} else if (window.screen.width < 768) {
  for (let j = 0; j < 16; j++) {
    let arr1 = [];
    for (let i = 0; i < 3; i++) {
      let a = getRandomIntInclusive(1, 8);
      if (arr1.includes(a)) {
        i = i - 1;
      } else arr1.push(a);
    }
    end.push(arr1);
  }
}

const dblLeft = document.querySelector('.dbl-left');
const left = document.querySelector('.left');
const dblRight = document.querySelector('.dbl-right');
const right = document.querySelector('.right');
const pagePosition = document.querySelector('.page-position');
const photo1 = document.querySelector('.photo1');
const photo2 = document.querySelector('.photo2');
const photo3 = document.querySelector('.photo3');
const photo4 = document.querySelector('.photo4');
const photo5 = document.querySelector('.photo5');
const photo6 = document.querySelector('.photo6');
const photo7 = document.querySelector('.photo7');
const photo8 = document.querySelector('.photo8');


right.addEventListener('click', () => {
    if (window.screen.width > 1279 && +pagePosition.innerHTML < 6){
        pagePosition.innerHTML = +pagePosition.innerHTML + 1
        change1280()
        left.classList.add('left-arrow-active')
        dblLeft.classList.add('left-arrow-active')
        if (+pagePosition.innerHTML == 6){
            right.classList.remove('right-arrow');
            right.classList.add('left-arrow');
            dblRight.classList.remove('right-arrow');
            dblRight.classList.add('left-arrow');
        }
    } else if (window.screen.width < 1280 && 
               window.screen.width > 767 && 
               +pagePosition.innerHTML < 8){
        pagePosition.innerHTML = +pagePosition.innerHTML + 1
        change1280()
        left.classList.add('left-arrow-active')
        dblLeft.classList.add('left-arrow-active')
        if (+pagePosition.innerHTML == 8){
            right.classList.remove('right-arrow');
            right.classList.add('left-arrow');
            dblRight.classList.remove('right-arrow');
            dblRight.classList.add('left-arrow');
        }
    } else if (window.screen.width < 768 && +pagePosition.innerHTML < 16){
        pagePosition.innerHTML = +pagePosition.innerHTML + 1
        change1280()
        left.classList.add('left-arrow-active')
        dblLeft.classList.add('left-arrow-active')
        if (+pagePosition.innerHTML == 16){
            right.classList.remove('right-arrow');
            right.classList.add('left-arrow');
            dblRight.classList.remove('right-arrow');
            dblRight.classList.add('left-arrow');
        }
    } 
})

dblRight.addEventListener('click', () => {
    if (window.screen.width > 1279 && +pagePosition.innerHTML < 6){
        pagePosition.innerHTML = 6
        change1280()
        left.classList.add('left-arrow-active')
        dblLeft.classList.add('left-arrow-active')
        right.classList.remove('right-arrow');
        right.classList.add('left-arrow');
        dblRight.classList.remove('right-arrow');
        dblRight.classList.add('left-arrow');
    } else if (window.screen.width < 1280 && 
               window.screen.width > 767 && 
               +pagePosition.innerHTML < 8){
        pagePosition.innerHTML = 8
        change1280()
        left.classList.add('left-arrow-active')
        dblLeft.classList.add('left-arrow-active')
        right.classList.remove('right-arrow');
        right.classList.add('left-arrow');
        dblRight.classList.remove('right-arrow');
        dblRight.classList.add('left-arrow');
    } else if (window.screen.width < 768 && +pagePosition.innerHTML < 16){
        pagePosition.innerHTML = 16
        change1280()
        left.classList.add('left-arrow-active')
        dblLeft.classList.add('left-arrow-active')
        right.classList.remove('right-arrow');
        right.classList.add('left-arrow');
        dblRight.classList.remove('right-arrow');
        dblRight.classList.add('left-arrow');
    } 
})

left.addEventListener('click', () => {
    if (window.screen.width > 1279 && +pagePosition.innerHTML > 1) {
        pagePosition.innerHTML = +pagePosition.innerHTML - 1
        change1280()
        right.classList.add('right-arrow');
        right.classList.remove('left-arrow');
        dblRight.classList.add('right-arrow');
        dblRight.classList.remove('left-arrow');
        if (+pagePosition.innerHTML == 1){
            left.classList.remove('left-arrow-active')
            dblLeft.classList.remove('left-arrow-active')
        }
    } else if (window.screen.width < 1280 && 
               window.screen.width > 767 && 
               +pagePosition.innerHTML > 1) {
        pagePosition.innerHTML = +pagePosition.innerHTML - 1
        change1280()
        right.classList.add('right-arrow');
        right.classList.remove('left-arrow');
        dblRight.classList.add('right-arrow');
        dblRight.classList.remove('left-arrow');
        if (+pagePosition.innerHTML == 1){
            left.classList.remove('left-arrow-active')
            dblLeft.classList.remove('left-arrow-active')
        }
    } else if (window.screen.width < 768 && +pagePosition.innerHTML > 1) {
        pagePosition.innerHTML = +pagePosition.innerHTML - 1
        change1280()
        right.classList.add('right-arrow');
        right.classList.remove('left-arrow');
        dblRight.classList.add('right-arrow');
        dblRight.classList.remove('left-arrow');
        if (+pagePosition.innerHTML == 1){
            left.classList.remove('left-arrow-active')
            dblLeft.classList.remove('left-arrow-active')
        }
    }
})

dblLeft.addEventListener('click', () => {
    if (window.screen.width > 1279 && +pagePosition.innerHTML < 7){
        pagePosition.innerHTML = 1
        change1280()
        left.classList.remove('left-arrow-active')
        dblLeft.classList.remove('left-arrow-active')
        right.classList.add('right-arrow');
        right.classList.remove('left-arrow');
        dblRight.classList.add('right-arrow');
        dblRight.classList.remove('left-arrow');
    } else if (window.screen.width < 1280 && 
               window.screen.width > 767 && 
               +pagePosition.innerHTML < 9){
        pagePosition.innerHTML = 1
        change1280()
        left.classList.remove('left-arrow-active')
        dblLeft.classList.remove('left-arrow-active')
        right.classList.add('right-arrow');
        right.classList.remove('left-arrow');
        dblRight.classList.add('right-arrow');
        dblRight.classList.remove('left-arrow');
    } else if (window.screen.width < 768 && +pagePosition.innerHTML < 17){
        pagePosition.innerHTML = 1
        change1280()
        left.classList.remove('left-arrow-active')
        dblLeft.classList.remove('left-arrow-active')
        right.classList.add('right-arrow');
        right.classList.remove('left-arrow');
        dblRight.classList.add('right-arrow');
        dblRight.classList.remove('left-arrow');
    } 
})


function change1280 () {
    if (window.screen.width > 1279) {
        for (let i = 0; i < 8; i++){
            let a = six[+pagePosition.innerHTML - 1][i] - 1
            petsPhoto[i].src = petsMap[a].img;
            petsName[i].innerHTML = petsMap[a].name;
        }
    } else if (window.screen.width < 1280 && window.screen.width > 767) {
        for (let i = 0; i < 6; i++){
            let a = eight[+pagePosition.innerHTML - 1][i] - 1
            petsPhoto[i].src = petsMap[a].img;
            petsName[i].innerHTML = petsMap[a].name;
        }
    } else if (window.screen.width < 768) {
        for (let i = 0; i < 3; i++){
            let a = end[+pagePosition.innerHTML - 1][i] - 1
            petsPhoto[i].src = petsMap[a].img;
            petsName[i].innerHTML = petsMap[a].name;
        }
    }  
}

