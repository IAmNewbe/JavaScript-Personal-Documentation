const robot = {
    energyLevel: 100,
    checkEnergy: () => {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();


//PRIVACY  
  const Robot = {
    _energyLevel: 'high',
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  Robot.recharge();
  
  
  
  
  