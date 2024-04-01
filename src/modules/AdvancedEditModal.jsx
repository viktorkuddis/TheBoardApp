import { useContext, useState } from "react";
import { tasksContext } from "../App";
import Modal from "./Modal";





export default function AdvancedEditModal({ taskID }) {

    console.log(taskID)

    //alla uppgifter: 
    const { tasks, setTasks } = useContext(tasksContext)
    // console.log(tasks)

    //Aktuell uppgift:
    const currentTask = tasks.find((task) => { return task.id === taskID })
    console.log(currentTask)

    const [title, setTitle] = useState(currentTask.title)
    const [parentColumnId, setParentColumnId] = useState(currentTask.parentColumnId)
    const [description, setDescription] = useState(currentTask.description)
    const [deadline, setDeadline] = useState(currentTask.deadline)
    const [timeStampLastEdited, setDimeStampLastEdited] = useState(currentTask.timeStampLastEdited)
    const [timeStampLastMoved, setDimeStampLastMoved] = useState(currentTask.settimeStampLastMoved)

    function uppdateTask() {
        //uppdatera objektet:

        // för varje task loopar vi igenom och kopierar över det som det såg ut i sitt tidigare stadie. FÖRUTOM om det matchar aktuellt id. Då ersätter vi med komplett ny version av objektet.
        setTasks((prevTask) => prevTask.map((task) => {
            if (task.id === taskID) {
                return {
                    title: "",
                    id: taskID,
                    parentColumnId: 1,
                    description: "Det behövs innan dom dör",
                    deadline: "NUUUUUU",
                    timeStampCreated: "igår",
                    timeStampLastEdited: new Date().toLocaleString,
                    timeStampLastMoved: null,
                }
            }
        }))

    }

    const content = <>

        <article className="advancedEditModal">
            <div className="head">
                <h2>{parentColumnId}  </h2>
                <button className="cross">X</button>
            </div>



            <h1 contentEditable="true" suppressContentEditableWarning>{title}</h1>
            <div className="body">

                <div className="meta-data_section">
                    <div className="time-stams_container" >

                        <p>Deadline: {deadline}</p>

                        <p className="timestamps">Skapad: {currentTask.timeStampCreated}</p>

                        <p className="timestamps">Redigerad: {timeStampLastEdited}</p>

                    </div>

                    <div className="handle-columns_container" >här ska de vara en drop down</div>
                </div>

                <p contentEditable="true" className="description" suppressContentEditableWarning >{description}</p>


                <button className="danger-btn">Radera</button>
            </div>
        </article>
    </>;


    return (

        <Modal modalContent={content} />
        // <Modal />
    );
};