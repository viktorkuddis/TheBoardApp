

export default function TaskCard(props) {


    return (

        <div className="task_card">

            <h3>{props.title}</h3>
            <p>Deadline: {props.deadline ? props.deadline : "Ingen"}</p>
        </div>

    );

}

TaskCard.defaultProps = {
    title: "Kortets Titel",
    timeStamp: "Deadline: YYY-MM-DD"
}
