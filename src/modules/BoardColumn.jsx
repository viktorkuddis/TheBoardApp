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

    const { columns, setColumns } = useContext(columnsContext);
    const { tasks, setTasks } = useContext(tasksContext);


    // TGGLA MELLAN KNAPP FÖR ATT LÄGGA TILL TASK VS INPUTELEMENT:
    //Variabel som avgör om kortet kort med inputelement visas eller ej:
    const [showAddTaskCard, setShowAddTaskCard] = useState(false)

    //funktion som togglar statet:
    function toggleAddCardComponent() {
        setShowAddTaskCard(!showAddTaskCard)
    }

    return (
        <div className="board-column" >

            {/* sätter färg och text baserat på props: */}
            <h2 style={{ backgroundColor: column.columnColor, color: "white" }}>{column.columnName}</h2>

            {/* detta är lite testinformation som renderas: */}
            <p>{column.columnID}</p>
            <p>{column.columnColor}</p>
            <p>{(column.markChildsAsDone && "Markeras som klar")}</p>
            {/* ---------------------------------- */}

            {/* container som ska innehålla dynamisk lista med task: */}
            <div className="board-column-cards-list_container">

                {/* Renderar ut korten(tasks) i kolumnen om dess parentColumnID stämmer med aktuella kolumnens ID */}
                {tasks.map((task) => (
                    column.columnID === task.parentColumnId
                    &&
                    (
                        <TaskCard
                            key={task.id}
                            title={task.title}
                            deadline={task.deadline}
                            markedAsDone={column.markChildsAsDone}
                            columnColor={column.columnColor}
                        />
                    )
                    // om aktuella kolumnens props.markChildsAsDone = true så kommer korten i den kolumnen att stylas på ett annat vis.
                )
                )}

            </div>

            {showAddTaskCard
                ? <AddTaskCard />
                : <AddTaskButton
                    columnID={column.columnID}
                    markChildsAsDone={column.markChildsAsDone}
                    toggleAddCardComponent={toggleAddCardComponent} />}




        </div >

    );
}

BoardColumn.propTypes = {
    columnName: PropTypes.string,
}

BoardColumn.defaultProps = {
    columnName: "Kolumnens Titel",

}