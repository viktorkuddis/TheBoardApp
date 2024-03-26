import { PropTypes } from "prop-types"



import TaskCard from "./TaskCard";
import { useState } from "react";

export default function BoardColumn(props) {

    const [tasks, setTask] = useState(
        [{
            title: "Vattna Blommorna",
            id: 1,
            parentColumnId: 1,
            description: "Det behövs innan dom dör",
            deadline: "NUUUUUU",
            timeStampCreated: "igår",
            timeStampLastEdited: "nu",
            timeStamplastMoved: null,
        }, {
            title: "Slänga soporna",
            id: 2,
            parentColumnId: 1,
            description: "Glöm inte att porten till soprummet är tung att öppna!",
            deadline: null,
            timeStampCreated: "förra veckan",
            timeStampLastEdited: "igår",
            timeStamplastMoved: null,
        }, {
            title: "Kolla på TV",
            id: 3,
            parentColumnId: 2,
            description: "Viktigt att få tid för sig själv också ju!",
            deadline: null,
            timeStampCreated: "idag",
            timeStampLastEdited: null,
            timeStamplastMoved: null,
        }, {
            title: "Bygga en ny app",
            id: 4,
            parentColumnId: 3,
            description: "Bygg dendär appen som håller koll på uppgifter jag har att göra!",
            deadline: "igår",
            timeStampCreated: "två veckor sedan",
            timeStampLastEdited: "igår",
            timeStamplastMoved: null,
        }])



    return (

        <div className="board-column" >

            <h2>{props.columnName}</h2>
            <h2>{props.columnID}</h2>
            <h2>{props.columnColor}</h2>

            <div className="board-column-cards-list_container">

                {tasks.map((task) => {
                    if (props.columnID === task.parentColumnId) {
                        return <TaskCard
                            title={task.title}
                            deadline={task.deadline} />
                    }
                })}

                {/* <TaskCard />
                <TaskCard />
                <TaskCard /> */}
            </div>

            <div className="column-footer">
                columnfooter
            </div>


        </div >

    );
}

BoardColumn.propTypes = {
    columnName: PropTypes.string,
}

BoardColumn.defaultProps = {
    columnName: "Kolumnens Titel",

}