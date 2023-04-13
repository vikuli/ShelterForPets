let petsMap = [
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];

const leftRightArrow = document.querySelectorAll('.left-right-arrow');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const cardContainer = document.querySelector('.card-of-pets-main-container')
const carousel = document.querySelector('.carousel')
const cardOfPets = document.querySelectorAll('.card-of-pets-container');
const cardWrapperActive = document.querySelectorAll('.card-wrapper-active');
const petsPhoto = document.querySelectorAll('.pets-photo');
let petsPhotoLeft = document.querySelectorAll('.pets-photo-left');
let petsPhotoActive = document.querySelectorAll('.pets-photo-active');
let petsPhotoRight = document.querySelectorAll('.pets-photo-right');
const petsName = document.querySelectorAll('.pet-name');
let petsNameLeft = document.querySelectorAll('.pet-name-left');
let petsNameActive = document.querySelectorAll('.pet-name-active');
let petsNameRight = document.querySelectorAll('.pet-name-right');
const card1 = document.querySelectorAll('.card1');
const card2 = document.querySelectorAll('.card2');
const card3 = document.querySelectorAll('.card3');
const name1 = document.querySelectorAll('.name1');
const name2 = document.querySelectorAll('.name2');
const name3 = document.querySelectorAll('.name3');

//Pop const

const popContainer = document.querySelector('.pop-up-container');
const popWindow = document.querySelector('.pop-up-window');
const popPhoto = document.querySelector('.pop-photo');
const petPopName = document.querySelector('.pop-pet-name');
const petType = document.querySelector('.pet-type');
const petBreed = document.querySelector('.pet-breed');
const petDescription = document.querySelector('.description-of-pet');
const paramVal = document.querySelectorAll('.param-val');
const age = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');
const closeBtn = document.querySelector('.close-pop-up');

let i = 3;
let j = 3;
let k = 7;
let l = 7;
let g = 0;
let h = 0;

//Carousel

right.addEventListener('click', slideLeft);
function slideLeft () {
  carousel.classList.add('transition-right');
  petsPhotoRight.forEach((el) => {
    console.log(el)
    el.src = petsMap[i].img;
    i++;
    if(i == 8) {
        i = 0;
    }
  })
  petsNameRight.forEach((el) => {
    el.innerHTML = petsMap[j].name;
    j++;
    if(j == 8) {
        j = 0;
    }
  })
}

carousel.addEventListener('animationend', animEnd);
function animEnd () {
  petsPhotoActive[0].src = petsPhotoRight[0].src;
  petsPhotoActive[1].src = petsPhotoRight[1].src;
  petsPhotoActive[2].src = petsPhotoRight[2].src;
  petsNameActive[0].innerHTML = petsNameRight[0].innerHTML;
  petsNameActive[1].innerHTML = petsNameRight[1].innerHTML;
  petsNameActive[2].innerHTML = petsNameRight[2].innerHTML;
  carousel.classList.remove('transition-right');
}

left.addEventListener('click', slideRight);
function slideRight () {
  carousel.classList.add('transition-left');
  petsPhotoLeft.forEach((el) => {
    console.log(el)
    el.src = petsMap[i].img;
    i++;
    if(i == 8) {
        i = 0;
    }
  })
  petsNameLeft.forEach((el) => {
    el.innerHTML = petsMap[j].name;
    j++;
    if(j == 8) {
        j = 0;
    }
  })
}

carousel.addEventListener('animationend', (animationEvent) =>{
  if(animationEvent.animationName == 'move-right'){
    petsPhotoActive[0].src = petsPhotoRight[0].src;
    petsPhotoActive[1].src = petsPhotoRight[1].src;
    petsPhotoActive[2].src = petsPhotoRight[2].src;
    petsNameActive[0].innerHTML = petsNameRight[0].innerHTML;
    petsNameActive[1].innerHTML = petsNameRight[1].innerHTML;
    petsNameActive[2].innerHTML = petsNameRight[2].innerHTML;
    carousel.classList.remove('transition-right');
  } else if (animationEvent.animationName == 'move-left'){
    petsPhotoActive[0].src = petsPhotoLeft[0].src;
    petsPhotoActive[1].src = petsPhotoLeft[1].src;
    petsPhotoActive[2].src = petsPhotoLeft[2].src;
    petsNameActive[0].innerHTML = petsNameLeft[0].innerHTML;
    petsNameActive[1].innerHTML = petsNameLeft[1].innerHTML;
    petsNameActive[2].innerHTML = petsNameLeft[2].innerHTML;
    carousel.classList.remove('transition-left');
  }
})

//Pop-up

(function () {
  card1[1].addEventListener('click', () => {
    popContainer.classList.toggle('pop-up-container-open');
    screen.classList.toggle('screen-active');
    body.classList.toggle('body-lock');
    for(let i = 0; i < 8; i++){
      if (petsMap[i].name == name1[1].innerHTML){
        popPhoto.src = petsMap[i].img;
        petPopName.innerHTML = petsMap[i].name;
        petType.innerHTML = petsMap[i].type;
        petBreed.innerHTML = petsMap[i].breed;
        petDescription.innerHTML = petsMap[i].description;
        age.innerHTML = petsMap[i].age;
        inoculations.innerHTML = petsMap[i].inoculations;
        diseases.innerHTML = petsMap[i].diseases;
        parasites.innerHTML = petsMap[i].parasites;
      }
    }
  })

  card2[1].addEventListener('click', () => {
    popContainer.classList.toggle('pop-up-container-open');
    screen.classList.toggle('screen-active');
    body.classList.toggle('body-lock');
    for(let i = 0; i < 8; i++){
      if (petsMap[i].name == name2[1].innerHTML){
        popPhoto.src = petsMap[i].img;
        petPopName.innerHTML = petsMap[i].name;
        petType.innerHTML = petsMap[i].type;
        petBreed.innerHTML = petsMap[i].breed;
        petDescription.innerHTML = petsMap[i].description;
        age.innerHTML = petsMap[i].age;
        inoculations.innerHTML = petsMap[i].inoculations;
        diseases.innerHTML = petsMap[i].diseases;
        parasites.innerHTML = petsMap[i].parasites;
      }
    }
  })

  card3[1].addEventListener('click', () => {
    popContainer.classList.toggle('pop-up-container-open');
    screen.classList.toggle('screen-active');
    body.classList.toggle('body-lock');
    for(let i = 0; i < 8; i++){
      if (petsMap[i].name == name3[1].innerHTML){
        popPhoto.src = petsMap[i].img;
        petPopName.innerHTML = petsMap[i].name;
        petType.innerHTML = petsMap[i].type;
        petBreed.innerHTML = petsMap[i].breed;
        petDescription.innerHTML = petsMap[i].description;
        age.innerHTML = petsMap[i].age;
        inoculations.innerHTML = petsMap[i].inoculations;
        diseases.innerHTML = petsMap[i].diseases;
        parasites.innerHTML = petsMap[i].parasites;
      }
    }
  })

  screen.addEventListener('click', () => {
    popContainer.classList.remove('pop-up-container-open');
    screen.classList.remove('screen-active');
    body.classList.remove('body-lock');
  })

  closeBtn.addEventListener('click', () => {
    popContainer.classList.remove('pop-up-container-open');
    screen.classList.remove('screen-active');
    body.classList.remove('body-lock');
  })

  screen.addEventListener('mouseover', () => {
      closeBtn.classList.add('close-pop-up-active');
  })

  closeBtn.addEventListener('mouseover', () => {
      closeBtn.classList.add('close-pop-up-active');
  })

  popWindow.addEventListener('mouseover', () => {
      closeBtn.classList.remove('close-pop-up-active');
  })
}())