import { useState } from "react"

export default function AddTaskCard() {


    const placeholderForTitle = "Uppgiftsnamn";
    const placeholderForDescription = "Beskrivning";

    const [showTitlePlaceholder, setShowTitlePlaceholder] = useState(true);
    const [showDescriptionPlaceholdder, setDescriptionPlaceholdder] = useState(true);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, steTaskDescription] = useState("");
    const [taskDeadlineDate, setTaskDeadlineDate] = useState();
    const [taskDeadlineTime, setTaskDeadlineTime] = useState();

    function handleTitle(e) {
        setTaskTitle(e.target.textContent);

        //omvärdet är en tom string så visas placeholder.
        (e.target.textContent === "" ? setShowTitlePlaceholder(true) : setShowTitlePlaceholder(false))
    };

    function handleDescription(e) {
        steTaskDescription(e.target.textContent);

        //omvärdet är en tom string så visas placeholder.
        (e.target.textContent === "" ? setDescriptionPlaceholdder(true) : setDescriptionPlaceholdder(false))
    };


    function handleDeadlineDate() { };
    function handleDeadlineTime() { };

    return (<>

        <div className="addTask_Card">
            <form>

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




                <p className="addTask-label" style={{ marginTop: "0.5rem" }}>Deadline:</p>
                <input type="date" />
                <input type="time" />

            </form >
        </div >

    </>)


}