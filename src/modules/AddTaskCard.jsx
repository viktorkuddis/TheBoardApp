import { useState, useContext, useEffect } from "react"

import { tasksContext } from "../App";
import { saveTasks } from "../utils/ApiUtils";

export default function AddTaskCard({ setShowAddTaskCard, columnID }) {

    const { tasks, setTasks } = useContext(tasksContext);
    console.log(tasks);

    //Placeholdertext:
    const placeholderForTitle = "Uppgiftsnamn";
    const placeholderForDescription = "Beskrivning";

    //booleans för om placeholder visas eller ej:
    const [showTitlePlaceholder, setShowTitlePlaceholder] = useState(true);
    const [showDescriptionPlaceholdder, setDescriptionPlaceholdder] = useState(true);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, steTaskDescription] = useState("");
    const [taskDeadlineDate, setTaskDeadlineDate] = useState();
    const [taskDeadlineTime, setTaskDeadlineTime] = useState();


    function exitAddTaskCard() {
        setShowAddTaskCard(false);
    }

    function handleTitle(e) {
        setTaskTitle(e.target.textContent);

        //omvärdet är en tom string så visas placeholder annars döljs den:.
        (e.target.textContent === "" ? setShowTitlePlaceholder(true) : setShowTitlePlaceholder(false))

        // console.log("taskTitle:", taskTitle);
    };

    function handleDescription(e) {
        steTaskDescription(e.target.textContent);

        //omvärdet är en tom string så visas placeholder.
        (e.target.textContent === "" ? setDescriptionPlaceholdder(true) : setDescriptionPlaceholdder(false))

        // console.log("taskDescription:", taskDescription);
    };

    function handleDeadlineDate(e) {
        setTaskDeadlineDate(e.target.value);
        // console.log(taskDeadlineDate);
    };

    function handleDeadlineTime(e) {
        setTaskDeadlineTime(e.target.value);
        // console.log(taskDeadlineTime);
    };

    function addNewTask() {
        console.log("AddNewTask är klickad")

        let id = new Date;
        id = "task" + id.getTime()
        console.log("id:", id);

        setTasks((t) => ([...t, {
            title: taskTitle,
            id: id,
            parentColumnId: columnID,
            description: taskDescription,
            deadline: "",
            timeStampCreated: new Date().toLocaleString(),
            timeStampLastEdited: new Date().toLocaleString(),
            timeStampLastMoved: new Date().toLocaleString(),
        }]))

    }


    // Spara tasks när variabeln tasks uppdateras:
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks])

    return (<>

        <div className="addTask_Card">

            {/* Container för titel: */}
            <div>
                {/* visar placeholder om det inte finns värde i fältet för titel: */}
                {showTitlePlaceholder &&
                    <h4 className="placeholder_add-class-card"
                    >{placeholderForTitle}
                    </h4>}

                <h4 contentEditable={true}
                    style={{ position: "relative" }}
                    onInput={handleTitle} >

                </h4>

            </div>
            {/* C🖊️ontainer för beskrivning: */}
            <div>
                {/* visar placeholder om det inte finns värde i fältet för Beskrivning: */}
                {showDescriptionPlaceholdder &&
                    <p className="placeholder_add-class-card">{placeholderForDescription}
                    </p>}

                <p contentEditable={true}
                    style={{ position: "relative", zIndex: "5" }}
                    onInput={handleDescription} >
                </p>

            </div>

            {/* deadline inputs kommer här: */}
            <p className="addTask-label" style={{ marginTop: "1rem" }}>Deadline:</p>
            <input type="date" onChange={handleDeadlineDate} />
            <input type="time" onChange={handleDeadlineTime} />
            <button style={{
                fontSize: "0.8rem",
                backgroundColor: "hsl(0, 0%, 95%)",
                marginTop: "0.5rem"
            }}>Rensa deadline</button>


            {/* nedre knappar här: */}
            <div style={{ textAlign: "right", marginTop: "1rem" }}>

                <button onClick={exitAddTaskCard} className="secondary-btn" style={{ marginLeft: "0.5rem" }}>Avbryt</button>
                <button style={{ marginLeft: "0.5rem" }} >✏️</button>
                <button onClick={addNewTask} className="primary-btn" style={{ marginLeft: "0.5rem" }}><b>Lägg till</b></button>
            </div>

        </div >

    </>)


}