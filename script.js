import { Process } from './Process.js';

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

    selectedPolicy = document.getElementById('Policylist').value;
    numProcess = document.getElementById('Processlist').value;

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

        let p = new Process(0,0,0,getRandomNumber());
        p.getArrivalTime();

        processArray.push( new Process(0,0,0,getRandomNumber()));

    }

    displayProcesses();

}

function displayProcesses() {
    const container = document.getElementById('processContainer');
    container.innerHTML = ''; // Clear previous content

    // Use a for loop to iterate over the processArray
    for (let i = 0; i < processArray.length; i++) {
        const process = processArray[i]; // Get the current process from the array

        const processBox = document.createElement('div');
        processBox.classList.add('process-box');
        processBox.innerHTML =
            `<p>Arrival Time: ${process.arrivalTime}</p>
            <p>First Run: ${process.firstRun}</p>
            <p>Completion Time: ${process.completionTime}</p>
            <p>Remaining Time: ${process.remainingTime}</p>`;

        container.appendChild(processBox);
    }
}



// event listener to the button
document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById('processButton');
    button.addEventListener('click', processData);

});
