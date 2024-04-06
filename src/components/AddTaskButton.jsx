
// ikon
import { BiMessageSquareAdd } from "react-icons/bi";

export default function AddTaskButton(props) {


    //detta är en knapp som på knapptrygg togglar variabell som visar rutan där man kan skriva in sin nya task

    return (
        <>
            <button className="addTask_button"
                onClick={props.toggleAddCardComponent}>
                <div style={{ fontSize: "1.3rem" }}>
                    <BiMessageSquareAdd />
                </div>
                <p>Lägg till {props.markChildsAsDone && "klar"} uppgift</p>
            </button>

        </>
    );

}