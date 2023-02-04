const city = 'New York City';  //blocks and scope
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  console.log(city);
  return "The stars over the " + skyscraper + " in " + city;
  
}
console.log(logCitySkyline());

//Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//Block Scope
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  
