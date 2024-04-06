import { useState } from "react";
import AddTaskCard from "./AddTaskCard";

import { BiMessageSquareAdd } from "react-icons/bi";



export default function AddTaskButton(props) {





    //todo : 

    // Rendera baserat på statet om knappen eller kardet ska visas
    // Toggla statet med en onklick om man klickar på knappen.

    // I komponenten sedan. lägg till en läggtill--knapp som togglar statet tillbaka.

    return (
        <>
            <button className="addTask_button" onClick={props.toggleAddCardComponent}>
                <div style={{ fontSize: "1.3rem" }}>
                    <BiMessageSquareAdd />
                </div>
                <p>Lägg till {props.markChildsAsDone && "klar"} uppgift</p>
            </button>





        </>
    );

}