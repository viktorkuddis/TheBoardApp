//funktionalitet:
import { PropTypes } from "prop-types"
import { useState } from "react";

//moduler:
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";

//Kolumnkomponent:
export default function BoardColumn(props) {

    //Data för varje task som ska placeras i kolumnerna:
    const [tasks, setTask] = useState(
        //initiella task:
        [{
            title: "Vattna Blommorna",
            id: 1,
            parentColumnId: 1,
            description: "Det behövs innan dom dör",
            deadline: "NUUUUUU",
            timeStampCreated: "igår",
            timeStampLastEdited: "nu",
            timeStampLastMoved: null,
        }, {
            title: "Slänga soporna",
            id: 2,
            parentColumnId: 1,
            description: "Glöm inte att porten till soprummet är tung att öppna!",
            deadline: null,
            timeStampCreated: "förra veckan",
            timeStampLastEdited: "igår",
            timeStampLastMoved: null,
        }, {
            title: "Kolla på TV",
            id: 3,
            parentColumnId: 2,
            description: "Viktigt att få tid för sig själv också ju!",
            deadline: null,
            timeStampCreated: "idag",
            timeStampLastEdited: null,
            timeStampLastMoved: null,
        }, {
            title: "Bygga en ny app",
            id: 4,
            parentColumnId: 3,
            description: "Bygg dendär appen som håller koll på uppgifter jag har att göra!",
            deadline: "igår",
            timeStampCreated: "två veckor sedan",
            timeStampLastEdited: "igår",
            timeStampLastMoved: null,
        }])

    return (
        <div className="board-column" >

            {/* sätter färg och text baserat på props: */}
            <h2 style={{ backgroundColor: props.columnColor }}>{props.columnName}</h2>

            {/* detta är lite testinformation som renderas: */}
            <p>{props.columnID}</p>
            <p>{props.columnColor}</p>
            <p>{(props.markChildsAsDone && "Markeras som klar")}</p>
            {/* ---------------------------------- */}

            {/* container som ska innehålla dynamisk lista med task: */}
            <div className="board-column-cards-list_container">

                {/* Renderar ut korten(tasks) i kolumnen om dess parentColumnID stämmer med aktuella kolumnens ID */}
                {tasks.map((task) => (
                    props.columnID === task.parentColumnId
                    &&
                    (
                        <TaskCard
                            key={task.id}
                            title={task.title}
                            deadline={task.deadline}
                            markedAsDone={props.markChildsAsDone}
                        />
                    )
                    // om aktuella kolumnens props.markChildsAsDone = true så kommer korten i den kolumnen att stylas på ett annat vis.
                )
                )}

            </div>

            {/* //todo Skapa funktionalitet här för att skapa nytt kort. */}
            <AddTaskButton
                columnID={props.columnID}
                markChildsAsDone={props.markChildsAsDone}
            />


        </div >

    );
}

BoardColumn.propTypes = {
    columnName: PropTypes.string,
}

BoardColumn.defaultProps = {
    columnName: "Kolumnens Titel",

}