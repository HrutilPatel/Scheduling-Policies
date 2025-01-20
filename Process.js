// Process Class Definition
class Process {
    // Private fields
    #arrivalTime;
    #firstRun;
    #completionTime;
    #remainingTime;

    constructor(arrivalTime, firstRun, completionTime, remainingTime) {
        this.#arrivalTime = arrivalTime;
        this.#firstRun = firstRun;
        this.#completionTime = completionTime;
        this.#remainingTime = remainingTime;
    }

    // Getter methods
    get arrivalTime() {
        return this.#arrivalTime;
    }

    get firstRun() {
        return this.#firstRun;
    }

    get completionTime() {
        return this.#completionTime;
    }

    get remainingTime() {
        return this.#remainingTime;
    }

    // Setter methods
    set arrivalTime(time) {
        this.#arrivalTime = time;
    }

    set firstRun(time) {
        this.#firstRun = time;
    }

    set completionTime(time) {
        this.#completionTime = time;
    }

    set remainingTime(time) {
        this.#remainingTime = time;
    }
}

export { Process};
