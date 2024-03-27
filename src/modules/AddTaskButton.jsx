export default function AddTaskButton(props) {

    return (
        <>
            <button className="addTask_button">
                <div>🦉</div>
                <p>Lägg till {props.markChildsAsDone && "klar"} uppgift</p>
            </button>
            {props.columnID}
        </>
    );

}