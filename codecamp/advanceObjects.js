//GET FUNCTION INSIDE OBJECTS
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  console.log(robot.provideInfo());


//Getter
const roboT = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if (typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}`;
      }else{
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  console.log(roboT.energyLevel);
  
  
//SETTTER / SET OR REASIGGN 
const bot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      }else{
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  
  bot.numOfSensors = 100;
  console.log(bot.numOfSensors);


//FACTORY FUNCTION
const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep(){
        console.log('Beep Boop');
      }
    }
  }
  
  const beep = robotFactory();
  const tinCan = robotFactory('P-500',true);
  tinCan.beep();

//DESTRUCTURING
function RobotFactory(model, mobile){
    return {
      model,
      mobile, 
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = RobotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  
//DESTRUCTURED ASSIGNMENT
const roBot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const {functionality} = roBot;
  functionality.beep();


//BUILT-IN OBJECTS METHOD
const rObot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(rObot);

console.log(robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(rObot);
console.log(robotEntries);

// Declare newRobot below this line:

const NewRobot = Object.assign({laserBlaster: true, voiceRecognition: true});
console.log(NewRobot);
