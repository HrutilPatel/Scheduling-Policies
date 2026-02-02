# CPU Scheduling Visualization Tool

This project is an interactive, web-based visualization tool designed to
support teaching and learning of CPU scheduling algorithms in Operating
Systems courses.

It allows users to input process details and observe how different
scheduling policies manage process execution over time.

The tool is intended for students, instructors, and self-learners who want
a clear conceptual understanding of CPU scheduling behavior.

---

## Features

- Visualization of fundamental CPU scheduling algorithms:
  - First Come First Serve (FIFO)
  - Shortest Job First (SJF)
  - Round Robin (RR)
- User-defined process input:
  - Arrival times
  - Burst times
- Dynamic simulation clock
- Visual representation of:
  - Incoming workload
  - Ready queue
  - Running process
  - Completed processes
- Clear, process-focused visual layout designed for instruction

---

## Scheduling Algorithms Overview

- **First Come First Serve (FIFO)**  
  A non-preemptive algorithm where processes are executed in the order of
  their arrival.

- **Shortest Job First (SJF)**  
  A non-preemptive algorithm that selects the process with the shortest
  burst time.

- **Round Robin (RR)**  
  A preemptive algorithm that assigns a fixed time quantum to each process
  and cycles through them fairly.

---

## Educational Purpose

This project is intended strictly for educational and instructional use.

It aims to help learners understand:
- How scheduling decisions are made by an operating system
- How arrival time and burst time influence execution order
- The behavioral differences between FIFO, SJF, and Round Robin scheduling

The visualization prioritizes clarity and conceptual understanding rather
than performance accuracy or production-level simulation.

This tool is not intended for production or safety-critical systems.

---

## How to Use (Educational)

1. Select a scheduling policy (FIFO, SJF, or RR)
2. Choose the number of processes
3. Optionally provide arrival times and burst times
4. Start the simulation
5. Observe how processes move through the queue, execution, and completion

Students are encouraged to experiment with different configurations and
compare how each scheduling algorithm behaves under varying conditions.

---

## Technologies Used

- Frontend: HTML, CSS
- Logic and Simulation: JavaScript

---

## Live Website

You can access the live website and explore the scheduling policy
visualizations here:

https://hrutilpatel.github.io/Scheduling-Policies/

---

## Licensing

This project uses a **dual-license model**.

### Source Code

All source code (HTML, JavaScript, CSS, and related implementation files)
is licensed under the **MIT License**.

See `LICENSE-MIT` for details.

### Educational Content

All educational explanations, documentation, and visual teaching materials
are licensed under the **Creative Commons Attribution 4.0 International
License (CC BY 4.0)**.

See `LICENSE-CC-BY` for details.

---

## Attribution

If you use or adapt this project for teaching or learning, please credit:

"CPU Scheduling Visualization Tool" by Hrutil Patel
Licensed under MIT (code) and CC BY 4.0 (educational content)

---

## Development Notes

This project was independently developed for educational purposes.
