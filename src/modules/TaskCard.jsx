
import { useContext, useState } from "react";
import { tasksContext } from "../App";

import AdvancedEditModal from "./AdvancedEditModal";


export default function TaskCard({ task, markedAsDone, columnColor }) {


    //Variabel som togglar om modalen för avancerad edit ska vara öppen eller ej
    const [advancedEditisOpend, setadvancedEditisOpend] = useState(false);

    //funktoin som hanterar då ett kort klickas för att öppna redigeringsvy.
    function handleCardClick() {
        setadvancedEditisOpend(true);
        console.log("klick på kort")
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
                {task.deadline && typeof task.deadline === 'string' && task.deadline.trim() !== "" &&
                    <p style={{ fontSize: "0.8rem", color: "grey" }}>
                        Deadline: {task.deadline}</p>}






            </div>
            {advancedEditisOpend && <AdvancedEditModal taskID={task.id} />}

        </>

    );

}

TaskCard.defaultProps = {
    title: "Uppgift",
}
