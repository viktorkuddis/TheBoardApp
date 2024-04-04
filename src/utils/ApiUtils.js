

import { dummyTasks } from './TaskUtils'
import { startColumns } from './ColumnsUtils';

// -------------- TASKS ------------------------------

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

// -------------- COLUMNS ------------------------------

// hämtar kolumner ut local storage och returnerar dom.:
export function getColumns() {

    const columns = JSON.parse(localStorage.getItem("columns")) || startColumns;
    // console.log("kolumnerna från ls =  ", columns);

    return columns;
}

// sparar tasks till local storge:
// argument är array av alla tasks som ska sparas.
export function saveColumns(arrayOfColumns) {
    const dataToSave = JSON.stringify(arrayOfColumns);
    localStorage.setItem("columns", dataToSave)
}