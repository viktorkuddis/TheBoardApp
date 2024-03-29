
import { useContext } from "react";
import { tasksContext } from "./ColumnsContainer";

export default function TaskCard(props) {

    const tasks = useContext(tasksContext)

    return (
        <div className={props.markedAsDone ? "task_card marked-as-done_Card" : "task_card"}>



            <div className="colored-line_task-Card" style={{ backgroundColor: props.columnColor }}>

            </div>

            <h3>{props.title}</h3>
            <p>Deadline: {props.deadline ? props.deadline : "Ingen"}</p>
        </div>

    );

}

TaskCard.defaultProps = {
    title: "Kortets Titel",
    timeStamp: "Deadline: YYY-MM-DD"
}
