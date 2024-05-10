class Process {

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
    get getArrivalTime() {
        return this.#arrivalTime;
    }

    get getFirstRun() {
        return this.#firstRun;
    }

    get getCompletionTime() {
        return this.#completionTime;
    }

    get getRemainingTime() {
        return this.#remainingTime;
    }

    // Setter methods
    set setArrivalTime(time) {
        this.#arrivalTime = time;
    }

    set setFirstRun(time) {
        this.#firstRun = time;
    }

    set setCompletionTime(time) {
        this.#completionTime = time;
    }

    set setRemainingTime(time) {
        this.#remainingTime = time;
    }

}

export { Process};
