import { useState, useContext, useEffect } from "react"

//komponenter:
import Alert from "./Alert";

//kontext:
import { tasksContext } from "../App";


export default function AddTaskCard({ setShowAddTaskCard, columnID }) {

    const { setTasks } = useContext(tasksContext);
    // console.log(tasks);

    //Placeholdertext:
    const placeholderForTitle = "Uppgiftstitel";
    const placeholderForDescription = "Beskrivning";

    //togggla state för alertbox:
    const [showTitleMissingAlert, setShowTitleMissingAlert] = useState(false)

    //booleans för om placeholder visas eller ej:
    const [showTitlePlaceholder, setShowTitlePlaceholder] = useState(true);
    const [showDescriptionPlaceholdder, setDescriptionPlaceholdder] = useState(true);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, steTaskDescription] = useState("");
    const [taskDeadlineDate, setTaskDeadlineDate] = useState("");
    const [taskDeadlineTime, setTaskDeadlineTime] = useState("");


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

    function clearDeadlineInput(e) {
        // sätter värde till "" så att inputboxarnas värde uppdateras
        // console.log("clearfunktion kör");
        setTaskDeadlineDate("");
        setTaskDeadlineTime("");
    }

    //lägger till uppgiften om det finns en titel skriven
    function addNewTask() {
        console.log("AddNewTask är klickad")
        const taskTitleInput_Value = document.querySelector(".task-title_input").textContent
        // console.log("VÄRDET SOMFANNS: ", taskTitleInput_Value);
        // console.log(taskTitleInput.textContent)

        // trimmar ner blankslag och sparar sedan den nya upgiften:
        if (taskTitleInput_Value.trim() !== "") {

            let id = new Date;
            id = "task" + id.getTime()
            console.log("id:", id);

            setTasks((t) => ([...t, {
                title: taskTitle,
                id: id,
                parentColumnId: columnID,
                description: taskDescription,
                deadline: taskDeadlineDate + " " + taskDeadlineTime,
                timeStampCreated: new Date().toLocaleString(),
                timeStampLastEdited: new Date().toLocaleString(),
                timeStampLastMoved: new Date().toLocaleString(),
            }]));
            exitAddTaskCard();

            // om det inte finns nåon titel så visas alert som ber om det!
        } else {
            setShowTitleMissingAlert(true);
            setTimeout(() => {
                setShowTitleMissingAlert(false);
            }, 3000);

        }
    }

    //Lyssnar efter Enter-klick och försöker spara om shift inte hålls ner!
    function handleEnterKey(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            addNewTask()
        }
    }



    return (<>

        <div className="addTask_Card">

            {/* Container för titel: */}
            <div>
                {/* visar placeholder om det inte finns värde i fältet för titel: */}
                {showTitlePlaceholder &&
                    <h4 className="placeholder_add-class-card"
                    >{placeholderForTitle}
                    </h4>}

                <h4 contentEditable={true} className="task-title_input enableEnterForAddTask"
                    style={{ position: "relative", zIndex: "5", padding: "0.2rem 0rem" }}
                    onInput={handleTitle} onKeyDown={handleEnterKey}>

                </h4>

            </div>
            {/* Container för beskrivning: */}
            <div style={{ marginTop: "0.5rem" }}>
                {/* visar placeholder om det inte finns värde i fältet för Beskrivning: */}
                {showDescriptionPlaceholdder &&
                    <p className="placeholder_add-class-card">{placeholderForDescription}
                    </p>}

                <p contentEditable={true} className="description-input_addTaskCard"
                    style={{ position: "relative", zIndex: "5", padding: "0.2rem 0rem" }}
                    onInput={handleDescription} onKeyDown={handleEnterKey}>
                </p>

            </div>

            {/* deadline inputs kommer här: */}
            <p className="addTask-label" style={{ marginTop: "0.5rem" }}>Deadline:</p>
            <input type="date" onChange={handleDeadlineDate} onKeyDown={handleEnterKey} value={taskDeadlineDate} />
            <input type="time" onChange={handleDeadlineTime} onKeyDown={handleEnterKey} value={taskDeadlineTime} />
            <button onClick={clearDeadlineInput} style={{
                fontSize: "0.8rem",
                backgroundColor: "hsl(0, 0%, 95%)",
                marginTop: "0.5rem"
            }} >Rensa deadline</button>


            {/* nedre knappar här: */}
            <div style={{ textAlign: "right", marginTop: "1rem" }}>

                <button onClick={exitAddTaskCard} className="secondary-btn" style={{ marginLeft: "0.5rem" }}>Avbryt</button>
                <button onClick={addNewTask} className="primary-btn" style={{ marginLeft: "0.5rem" }}><b>Lägg till</b></button>
                <p style={{
                    color: "grey",
                    fontSize: "0.8rem"
                }} > {`(Enter)`}</p>
            </div>

            {/* //Villkorsstyrd rendering för Alert om namn saknas vid försök att lägga till uppgift:*/}
            {showTitleMissingAlert && <Alert alertContent="⚠️ Ge uppgiften en titel!" />}


        </div >

    </>)


}