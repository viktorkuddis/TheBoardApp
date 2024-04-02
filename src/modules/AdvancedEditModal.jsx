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
    const [description, setDescription] = useState(currentTask.description || "Beskrivning ...")


    const [deadlineDate, setDeadlineDate] = useState(currentTask.deadline.split(" ")[0] || "")
    const [deadlineTime, setDeadlineTime] = useState(currentTask.deadline.split(" ")[1] || "")
    const [timeStampLastEdited, setTimeStampLastEdited] = useState(currentTask.timeStampLastEdited)
    const [timeStampLastMoved, setTimeStampLastMoved] = useState(currentTask.settimeStampLastMoved);

    function handleTitle(e) { setTitle(e.target.textContent) }
    function handleParentColumnID() { }
    function handleDescription(e) { setDescription(e.target.value) }
    function handleTimeStampLastEdited() { }
    function handleTimeStampLastMoved() { }
    function handleDeadlineDate(e) { setDeadlineDate(e.target.value) }
    function handleDeadlineTime(e) { setDeadlineTime(e.target.value) }
    function handleClearDeadlilne() { setDeadlineDate(""), setDeadlineTime("") }



    function uppdateTask() {
        //uppdatera objektet:

        // för varje task loopar vi igenom och kopierar över det som det såg ut i sitt tidigare stadie. FÖRUTOM om det matchar aktuellt id. Då ersätter vi med komplett ny version av objektet.
        setTasks((prevTask) => prevTask.map((task) => {
            if (task.id === taskID) {
                return {
                    title: title,
                    id: taskID,
                    parentColumnId: parentColumnId,
                    description: description,
                    deadline: "NUUUUUU",
                    timeStampCreated: "igår",
                    timeStampLastEdited: timeStampLastEdited,
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



            <h1 contentEditable="true"
                suppressContentEditableWarning
                onBlur={handleTitle}>
                {title}
            </h1>

            <div className="body">

                <div className="meta-data_section">
                    <div className="time-stams_container" >

                        <p style={{ fontSize: "0.8rem" }}>Deadline:</p>



                        {/* deadline inputs kommer här: */}

                        <input type="date" value={deadlineDate} onChange={handleDeadlineDate} />
                        <input type="time" value={deadlineTime} onChange={handleDeadlineTime} />
                        <br />
                        <button style={{
                            fontSize: "0.8rem",
                            backgroundColor: "hsl(0, 0%, 95%)",
                            marginTop: "0.5rem"
                        }}
                            onClick={handleClearDeadlilne}>Rensa deadline</button>


                    </div>

                    <div className="handle-columns_container" >här ska de vara en drop down</div>
                </div>


                <textarea value={description}
                    className="description"
                    suppressContentEditableWarning
                    onChange={handleDescription}>

                </textarea>

                {/* <p contentEditable="true"
                    className="description"
                    suppressContentEditableWarning
                    onBlur={handleDescription}>
                    {description}
                </p> */}

                <div className="time-stams_container" >
                    <p className="timestamps">Skapad: {currentTask.timeStampCreated}</p>
                    <p className="timestamps">Redigerad: {timeStampLastEdited}</p>
                </div>

                <button className="danger-btn">Radera</button>


            </div>
        </article>
    </>;


    return (

        <Modal modalContent={content} />
        // <Modal />
    );
};