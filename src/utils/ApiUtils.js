

import { dummyTasks } from './TaskUtils'

// hämtar tasks ut local storage och returnerar dom.:
export function getTasks() {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || dummyTasks;
    // console.log("mina tasks from local storage: ", tasks);

    return tasks;
}

// sparar tasks till local storge:
// argument är array av alla tasks som ska sparas.
export function saveTasks(arrayOfTasks) {
    const dataToSave = JSON.stringify(arrayOfTasks);
    localStorage.setItem("tasks", dataToSave)
}