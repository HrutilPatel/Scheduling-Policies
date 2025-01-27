import { Process } from './Process.js';

// Private Variables
let numProcess = 0;
let selectedPolicy = "";
let time = 0;
let intervalId = null;

// Constants
const fifoStr = "FIFO";
const processArray = [];
const currentQueue = [];
const runningTasks = [];
const completedTasks = [];
const incomingWorkload = [];
const min = 5;
const max = 25;

function processData() {
    selectedPolicy = document.getElementById('Policylist').value;
    numProcess = parseInt(document.getElementById('Processlist').value, 10);

    createProcess();

    if (fifoStr === selectedPolicy) {
        startClock();
        processFIFO();
    }
}

function processFIFO() {
    const clock = document.getElementById('clock');

    intervalId = setInterval(() => {
        time++;
        clock.textContent = `Time: ${time}s`;

        // Add processes to incoming workload based on the lowest arrival time
        processArray.sort((a, b) => a.arrivalTime - b.arrivalTime); // Sort by arrival time
        while (processArray.length > 0 && processArray[0].arrivalTime <= time) {
            incomingWorkload.push(processArray.shift());
        }

        // Move processes from incoming workload to the current queue
        while (incomingWorkload.length > 0) {
            currentQueue.push(incomingWorkload.shift());
        }

        // Process the first process in the current queue
        if (currentQueue.length > 0 && runningTasks.length === 0) {
            const process = currentQueue.shift();
            process.firstRun = time; // Record first run time if not set
            runningTasks.push(process);

            setTimeout(() => {
                runningTasks.pop();
                process.completionTime = process.firstRun + process.remainingTime;
                completedTasks.push(process);
                updateSections();

                // Check if all processes are completed
                if (completedTasks.length === numProcess) {
                    clearInterval(intervalId);
                }
            }, process.remainingTime * 1000); // Simulate processing time
        }

        updateSections();
    }, 1000);
}

function getRandomNumber() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createProcess() {
    processArray.length = 0;

    for (let i = 0; i < numProcess; i++) {
        let p = new Process(getRandomNumber(), 0, 0, getRandomNumber());
        processArray.push(p);
    }

}

function updateSections() {
    displayProcesses('incomingWorkload', processArray);
    displayProcesses('runningTasks', runningTasks);
    displayProcesses('completedTasks', completedTasks);
    displayProcesses('currentQueue', currentQueue);
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
            <p>First Run: ${process.firstRun || 'N/A'}</p>
            <p>Completion: ${process.completionTime || 'N/A'}</p>
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

    time = 0; // Reset time
    clock.textContent = `Time: ${time}s`;
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('processButton');
    button.addEventListener('click', processData);

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
