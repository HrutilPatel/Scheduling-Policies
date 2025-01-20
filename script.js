import { Process } from './Process.js';

// Private Variables
let numProcess = 0;
let selectedPolicy = "";
let time = 0;
let intervalId = null;

// Constants
const fifoStr = "FIFO";
const processArray = [];
const runningTasks = [];
const completedTasks = [];
const incomingWorkload = [];
const min = 10;
const max = 70;

function processData() {
    selectedPolicy = document.getElementById('Policylist').value;
    numProcess = parseInt(document.getElementById('Processlist').value, 10);

    createProcess();

    if (fifoStr === selectedPolicy) {
        processFIFO();
    }
}

function processFIFO() {
    while (processArray.length > 0) {
        const process = processArray.shift();

        incomingWorkload.push(process);
        updateSections();

        // Simulate processing by moving from incoming to running and then to completed
        setTimeout(() => {
            incomingWorkload.shift();
            runningTasks.push(process);
            updateSections();

            setTimeout(() => {
                runningTasks.shift();
                completedTasks.push(process);
                updateSections();
            }, process.remainingTime * 100);
        }, 500);
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createProcess() {
    processArray.length = 0;

    for (let i = 0; i < numProcess; i++) {
        let p = new Process(0, 0, 0, getRandomNumber());
        processArray.push(p);
    }

    console.log('Processes created:', processArray);
}

function updateSections() {
    displayProcesses('incomingWorkload', incomingWorkload);
    displayProcesses('runningTasks', runningTasks);
    displayProcesses('completedTasks', completedTasks);
    displayProcesses('currentQueue', processArray);
}

function displayProcesses(containerId, processes) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }

    container.innerHTML = '';

    processes.forEach((process, index) => {
        const processBox = document.createElement('div');
        processBox.classList.add('process-box');
        processBox.draggable = true;
        processBox.setAttribute('data-index', index);
        processBox.innerHTML = `
            <p>Arrival: ${process.arrivalTime}</p>
            <p>First Run: ${process.firstRun}</p>
            <p>Completion: ${process.completionTime}</p>
            <p>Remaining: ${process.remainingTime}</p>`;

        processBox.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', containerId + ',' + index);
        });

        container.appendChild(processBox);
    });
}

function startClock() {
    const clock = document.getElementById('clock');

    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
        time++;
        clock.textContent = `Time: ${time}s`;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('processButton');
    button.addEventListener('click', () => {
        processData();
        startClock();
    });

    document.querySelectorAll('.process-container').forEach((container) => {
        container.addEventListener('dragover', (e) => e.preventDefault());

        container.addEventListener('drop', (e) => {
            e.preventDefault();

            const [fromContainerId, index] = e.dataTransfer.getData('text/plain').split(',');
            const process = fromContainerId === 'incomingWorkload' ? incomingWorkload.splice(index, 1)[0] : null;

            if (container.id === 'runningTasks' && process) {
                runningTasks.push(process);
            } else if (container.id === 'completedTasks' && process) {
                completedTasks.push(process);
            }

            updateSections();
        });
    });
});
