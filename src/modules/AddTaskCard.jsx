import { useState } from "react"

export default function AddTaskCard({ setShowAddTaskCard }) {


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

            {/* Container för beskrivning: */}
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


            <p className="addTask-label" style={{ marginTop: "1rem" }}>Deadline:</p>
            <input type="date" onChange={handleDeadlineDate} />
            <input type="time" onChange={handleDeadlineTime} />
            <button style={{
                fontSize: "0.8rem",
                backgroundColor: "hsl(0, 0%, 95%)",
                marginTop: "0.5rem"
            }}>Rensa deadline</button>

            <div style={{ textAlign: "right", marginTop: "1rem" }}>
                <button onClick={exitAddTaskCard} className="secondary-btn">Avbryt</button>
                <button className="primary-btn" style={{ marginLeft: "0.5rem" }}><b>Lägg till</b></button>
            </div>

        </div >

    </>)


}