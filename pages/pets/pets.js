const petsMap = [
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
const cardOfPets = document.querySelectorAll('.card-of-pets-container');
const petsPhoto = document.querySelectorAll('.pets-photo');
const petsName = document.querySelectorAll('.pet-name');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');
const card7 = document.querySelector('.card7');
const card8 = document.querySelector('.card8');
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const name3 = document.querySelector('.name3');
const name4 = document.querySelector('.name4');
const name5 = document.querySelector('.name5');
const name6 = document.querySelector('.name6');
const name7 = document.querySelector('.name7');
const name8 = document.querySelector('.name8');

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

//Pop-up

(function () {
    card1.addEventListener('click', () => {
      popContainer.classList.toggle('pop-up-container-open');
      screen.classList.toggle('screen-pop');
      body.classList.toggle('body-lock');
      for(let i = 0; i < 8; i++){
        if (petsMap[i].name == name1.innerHTML){
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
  
    card2.addEventListener('click', () => {
      popContainer.classList.toggle('pop-up-container-open');
      screen.classList.toggle('screen-pop');
      body.classList.toggle('body-lock');
      for(let i = 0; i < 8; i++){
        if (petsMap[i].name == name2.innerHTML){
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
  
    card3.addEventListener('click', () => {
      popContainer.classList.toggle('pop-up-container-open');
      screen.classList.toggle('screen-pop');
      body.classList.toggle('body-lock');
      for(let i = 0; i < 8; i++){
        if (petsMap[i].name == name3.innerHTML){
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

    card4.addEventListener('click', () => {
        popContainer.classList.toggle('pop-up-container-open');
        screen.classList.toggle('screen-pop');
        body.classList.toggle('body-lock');
        for(let i = 0; i < 8; i++){
          if (petsMap[i].name == name4.innerHTML){
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

    card5.addEventListener('click', () => {
        popContainer.classList.toggle('pop-up-container-open');
        screen.classList.toggle('screen-pop');
        body.classList.toggle('body-lock');
        for(let i = 0; i < 8; i++){
          if (petsMap[i].name == name5.innerHTML){
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

    card6.addEventListener('click', () => {
        popContainer.classList.toggle('pop-up-container-open');
        screen.classList.toggle('screen-pop');
        body.classList.toggle('body-lock');
        for(let i = 0; i < 8; i++){
          if (petsMap[i].name == name6.innerHTML){
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

    card7.addEventListener('click', () => {
        popContainer.classList.toggle('pop-up-container-open');
        screen.classList.toggle('screen-pop');
        body.classList.toggle('body-lock');
        for(let i = 0; i < 8; i++){
          if (petsMap[i].name == name7.innerHTML){
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

    card8.addEventListener('click', () => {
        popContainer.classList.toggle('pop-up-container-open');
        screen.classList.toggle('screen-pop');
        body.classList.toggle('body-lock');
        for(let i = 0; i < 8; i++){
          if (petsMap[i].name == name8.innerHTML){
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
      screen.classList.remove('screen-pop');
      body.classList.remove('body-lock');
    })
  
    closeBtn.addEventListener('click', () => {
      popContainer.classList.remove('pop-up-container-open');
      screen.classList.remove('screen-pop');
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