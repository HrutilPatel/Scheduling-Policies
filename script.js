
import { Process } from 'process.js';

// Private Var
let numProcess = 0;
let selectedPolicy = "";

// Constants
const fifoStr = "FIFO";
const rrStr = "RR"
const sjfStr = "SJF";
const mlfqStr = "MLFQ";
const processArray = [];
const min = 10;
const max = 70;

function processData(){

    selectedPolicy = document.getElementById('Plist').value;
    numProcess = document.getElementById('numProcesses').value;

    createProcess();

    if(fifoStr.localeCompare(selectedPolicy)){

        processFIFO()

    }
    else if(rrStr.localeCompare(selectedPolicy)){



    }
    else if(sjfStr.localeCompare(selectedPolicy)){



    }
    else if (mlfqStr.localeCompare(selectedPolicy)){



    }

}

function processFIFO(){



}

function getRandomNumber() {
    return Math.random() * (max - min) + min;
}

function createProcess(){

    for(let i = 0; i < selectedPolicy; i++){

        processArray.push( new Process(0,0,0,getRandomNumber()));

    }

}