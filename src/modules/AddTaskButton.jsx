import { useState } from "react";
import AddTaskCard from "./AddTaskCard";


export default function AddTaskButton(props) {


    //Variabel som avgör om kortet kort med inputelement visas eller ej:
    const [showAddTaskCard, setShowAddTaskCard] = useState(false)

    //funktion som togglar statet:
    function toggleAddCardComponent() {
        setShowAddTaskCard(!showAddTaskCard)
    }


    //todo : 

    // Rendera baserat på statet om knappen eller kardet ska visas
    // Toggla statet med en onklick om man klickar på knappen.

    // I komponenten sedan. lägg till en läggtill--knapp som togglar statet tillbaka.

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