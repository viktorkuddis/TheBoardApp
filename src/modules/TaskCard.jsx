

export default function TaskCard(props) {


    return (

        <div className="task_Card">

            <h3>{props.title}</h3>
            <p>{props.timeStamp}</p>
        </div>

    );

}

TaskCard.defaultProps = {
    title: "Kortets Titel",
    timeStamp: "YYY-MM-DD"
}
