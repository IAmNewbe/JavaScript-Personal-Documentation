let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  var crewCount = spaceship.numCrew;
  var planetArray = spaceship.flightPath;
  // Write your code below

//ACCESS OBJECT
let spaceshhip = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  let isActive =  spaceshhip['Active Mission'];
  // let isActive =  spaceshhip[propName];
  console.log("isActive : "+ propName);
  console.log("isActive :"+isActive);


//ADD OR DELETE OBJECTS
let spaceshiip = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceshiip.color = 'glorious gold';
  spaceshiip.numEngines = 6;
  delete spaceshiip['Secret Mission'];
  console.log(spaceshiip);


//FUNCTION INSIDE OBJECTS
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat();
alienShip.takeOff();


//NESTED OBJECTS / ADD OBJECTS WHITHIN OBJECTS
let ship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  var capFave = ship.crew.captain['favorite foods'][0];
  ship.passengers =[{name: 'Space Dog'}];
  var firstPassenger = ship.passengers[0];
  ship.crew.captain.encourageTeam(); //We got this!


//PASS BY REFERENCE
let starship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  function greenEnergy(ship){
    ship['Fuel Type'] = 'avocado oil'
  }
  
  greenEnergy(starship);
  
  function remotelyDisable(ship){
    ship.disabled = true
  }
  remotelyDisable(starship);
  
  console.log(starship);


//LOOP IN OBJECTS
let Airship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for  (let i in Airship.crew){
  console.log(`${i}: ${Airship.crew[i].name}`)
};
for (let j in Airship.crew){
  console.log(`${Airship.crew[j].name}: ${Airship.crew[j].degree}`)
};

