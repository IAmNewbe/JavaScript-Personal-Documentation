/* Kode diatur berdasarkan fungsi atau peran bukan Objek */

class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }
   
function canBuildUI(developer) {
    return {
      buildUI: () => {
       console.log(`${developer.name} is building UI...`);
      }
    }
}
   
function canBuildAPI(developer) {
    return {
      buildAPI: () => {
        console.log(`${developer.name} is building API...`);
      }
    }
}
   
function canDeployApp(developer) {
    return {
      deployApp: () => {
        console.log(`${developer.name} is deploying app...`);
      }
    }
}
function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}
   
function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}
   
function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}
   
function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEnd = createFrontEndDeveloper('Hikam');
frontEnd.buildUI();
const fullStack = createFullStackDeveloper('Ahmad Hikam');
console.log(fullStack);