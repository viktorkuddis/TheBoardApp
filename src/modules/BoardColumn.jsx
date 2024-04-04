//funktionalitet:
import { PropTypes } from "prop-types"
import { useState, useContext } from "react";

//moduler:
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import AddTaskCard from "./AddTaskCard";

import { columnsContext, tasksContext } from "../App";





//Kolumnkomponent:
export default function BoardColumn({ column }) {



    //UPPGIFTER:
    const { tasks, setTasks } = useContext(tasksContext);

    // TGGLA MELLAN KNAPP FÖR ATT LÄGGA TILL TASK VS INPUTELEMENT:
    //Variabel som avgör om kortet kort med inputelement visas eller ej:
    const [showAddTaskCard, setShowAddTaskCard] = useState(false)

    //funktion som togglar statet:
    function toggleAddCardComponent() {
        setShowAddTaskCard(!showAddTaskCard)
    }

    return (<>
        <div className="board-column" >
            <div className="board-title_container">
                {/* sätter färg och text i kolumnens överskrift : */}
                <h2 style={{ backgroundColor: column.columnColor, color: "white" }}>{column.columnName}</h2>
            </div>

            {/* container som ska innehålla dynamisk lista med task: */}
            <div className="board-column-cards-list_container">

                {/* Renderar ut korten(tasks) i kolumnen om dess parentColumnID stämmer med aktuella kolumnens ID */}
                {tasks.map((task) => (

                    column.columnID == task.parentColumnId
                    &&
                    (

                        <TaskCard
                            key={task.id}
                            task={task}
                            //skickar med info om kolumnen så att uppgiften kan forma sig grafiskt baserat på den kolumn den ligger i:
                            markedAsDone={column.markChildsAsDone}
                            columnColor={column.columnColor}
                        />

                    )
                    // om aktuella kolumnens props.markChildsAsDone = true så kommer korten i den kolumnen att stylas på ett annat vis.
                )
                )}

            </div>

            {showAddTaskCard
                ? <AddTaskCard
                    //Skickar funktion för boleanskt värde om addTaskCard ska visas eller ej:
                    setShowAddTaskCard={setShowAddTaskCard}
                    // Skickar med kolumnensId för att identifiera vilken kolumn tasket ska placers i:
                    columnID={column.columnID}
                />
                : <AddTaskButton
                    columnID={column.columnID}
                    markChildsAsDone={column.markChildsAsDone}
                    toggleAddCardComponent={toggleAddCardComponent}
                />
            }


            {/* ---------------------------------- */}
            {/* ---------------------------------- */}
            {/* detta är lite testinformation som renderas på sidan: */}
            {/* <p>columnID: {column.columnID}</p>
            <p>Färg: {column.columnColor}</p>
            <p>{(column.markChildsAsDone && "Markeras som klar")}</p> */}
            {/* ---------------------------------- */}
            {/* ---------------------------------- */}
            {/* ---------------------------------- */}

        </div >

    </>


    );
}

BoardColumn.defaultProps = {
    columnName: "Kolumnens Titel",

}