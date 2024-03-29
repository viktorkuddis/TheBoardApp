
import { useContext } from "react";
import { tasksContext } from "../App";

export default function TaskCard({ task, markedAsDone, columnColor }) {

    return (
        <div className={markedAsDone ? "task_card marked-as-done_Card" : "task_card"}>

            <div className="colored-line_task-Card" style={{ backgroundColor: columnColor }}>

            </div>

            <h3>{task.title}</h3>
            <p>Deadline: {task.deadline ? task.deadline : "Ingen"}</p>
        </div>

    );

}

TaskCard.defaultProps = {
    title: "Uppgift",
}
