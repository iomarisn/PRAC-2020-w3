const { isMainThread } = require("worker_threads");


let getRandomArbitrary = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

class Biosensor{
    constructor(name){
        this.name = name;
        this.live();
        this.currentHeartBeat=0;
        this.config={
            minHR: 60,
            maxHR: 80
        }
    }

    display(){
        console.log("Person: "+this.name+ "   ||   "+ " HR: "+this.currentHeartBeat);
    }
 
    heartBeat(){
        this. currentHeartBeat = getRandomArbitrary(this.config.minHR, this.config.max);
        this.display();
    }

    live(){
        console.log("It's a liveee")
        setInterval(()=>{this.heartBeat()},1000)
        
    }


}

let James = new Biosensor('jmes');
let Sara = new Biosensor ('Sara');

