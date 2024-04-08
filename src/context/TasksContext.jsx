import { createContext, useState, useEffect } from "react";
import { getTasks, saveTasks } from "../utils/ApiUtils";

//kontext skapad och exporteras som default:
const TasksContext = createContext();
export default TasksContext

//funtion som returnerar en provider av min kontext med prop destructad children:
export function TasksContextProvider({ children }) {


    // Värde för tasks
    const [tasks, setTasks] = useState(getTasks());
    // console.log(tasks);

    // Spara tasks när variabeln tasks uppdateras:
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks])

    //returnerar provider av min kontext som  omsluter children.
    //Värden skickas med i kontexten här.
    return (
        //provider av min kontext
        <TasksContext.Provider value={{ tasks, setTasks }}>

            {children}

        </TasksContext.Provider>

    )
} 