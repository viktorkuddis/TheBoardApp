
import { useContext, useState } from "react";
import { tasksContext } from "../App";
import { columnsContext } from "../App";

import AdvancedEditModal from "./AdvancedEditModal";


export default function TaskCard({ task, markedAsDone, columnColor }) {


    const { columns, setColumns } = useContext(columnsContext)
    const { tasks, setTasks } = useContext(tasksContext);

    //Variabel som togglar om modalen för avancerad edit ska vara öppen eller ej
    const [advancedEditisOpend, setadvancedEditisOpend] = useState(false);

    //funktoin som hanterar då ett kort klickas för att öppna redigeringsvy.
    function handleCardClick(e) {
        if (e.target.nodeName !== "SELECT") {
            setadvancedEditisOpend(true);
            console.log("klick på kort")
        }
        // console.log(e)
    }

    function handleChangeCardColumn(e) {
        //byta det aktuella kortets ParentColumnID
        console.log(task)
        console.log(e.target.value)

        //vi returnerar alla objekt som dom är förutom om id matchar med det aktuella kortet....
        //---då sprder vi ut allt och uppdaterar parentColllumnId till det valda.
        const newArray = tasks.map((t) => {
            if (t.id == task.id) {
                return { ...t, parentColumnId: e.target.value }
            } else {
                return t
            }
        })
        setTasks(newArray)
    }

    return (
        <>
            <div onClick={handleCardClick}
                className={markedAsDone ? "task_card marked-as-done_Card" : "task_card"}>

                <div className="colored-line_task-Card" style={{ backgroundColor: columnColor }}>

                </div>

                <h3>{task.title}</h3>

                {task.description && <p className="description_task-card">{task.description}</p>}
                {/* om deadline har ett definerat värde och är av typen string och inte är en tom striing så skrovs de ut på sidan: */}

                <div className="task-card-footer_container" >
                    {task.deadline && typeof task.deadline === 'string' && task.deadline.trim() !== "" &&
                        <p style={{ fontSize: "0.8rem", color: "grey" }}>
                            Deadline: <br /> {task.deadline}</p>}



                    <select name="Flytta Uppgift" className="moveTask_dropwdown" defaultValue="Flytta" onChange={handleChangeCardColumn}>
                        {/* generera option för varje kolumn som finns:*/}
                        <option value="Flytta" disabled>Flytta...</option>
                        {columns.map((column) => {
                            return <option key={column.columnID} value={column.columnID}>{column.columnName}</option>
                        })}

                    </select>
                </div>






            </div>
            {advancedEditisOpend && <AdvancedEditModal taskID={task.id} setadvancedEditisOpend={setadvancedEditisOpend} />}

        </>

    );

}

TaskCard.defaultProps = {
    title: "Uppgift",
}
