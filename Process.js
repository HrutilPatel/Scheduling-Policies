// Process Class Definition
class Process {
    // Private fields
    #arrivalTime;
    #firstRun;
    #completionTime;
    #remainingTime;
    #rrTrack; 

    constructor(arrivalTime, firstRun, completionTime, remainingTime) {
        this.#arrivalTime = arrivalTime;
        this.#firstRun = firstRun;
        this.#completionTime = completionTime;
        this.#remainingTime = remainingTime;
        this.#rrTrack = remainingTime;
    }

    // Getter methods
    get arrivalTime() {
        return this.#arrivalTime;
    }

    get rrTrack() {
        return this.#rrTrack;
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
