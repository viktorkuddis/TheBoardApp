

export default function TaskCard(props) {


    return (
        <div className={props.markedAsDone ? "task_card marked-as-done_Card" : "task_card"}>

            <h3>{props.title}</h3>
            <p>Deadline: {props.deadline ? props.deadline : "Ingen"}</p>
        </div>

    );

}

TaskCard.defaultProps = {
    title: "Kortets Titel",
    timeStamp: "Deadline: YYY-MM-DD"
}
