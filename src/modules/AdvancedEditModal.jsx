import { useContext, useEffect, useState } from "react";
import { tasksContext, columnsContext } from "../App";
import Modal from "./Modal";
import Alert from "./Alert";






export default function AdvancedEditModal({ taskID, setadvancedEditisOpend }) {

    //taskIT är det aktuella taskets ID:
    console.log(taskID)

    //alla uppgifter: 
    const { tasks, setTasks } = useContext(tasksContext)
    // console.log(tasks)

    //data om de kollumner som finns:
    const { columns, setColumns } = useContext(columnsContext)
    // console.log(columns)

    //Aktuell uppgift:
    const currentTask = tasks.find((task) => { return task.id === taskID })
    // console.log(currentTask)

    //bolean för att visa alertbox:
    const [showAlert, setShowAlert] = useState(false);


    const [title, setTitle] = useState(currentTask.title)
    const [parentColumnId, setParentColumnId] = useState(currentTask.parentColumnId)
    const [description, setDescription] = useState(currentTask.description || "")
    const [deadlineDate, setDeadlineDate] = useState(currentTask.deadline ? currentTask.deadline.split(" ")[0] : "")
    const [deadlineTime, setDeadlineTime] = useState(currentTask.deadline ? currentTask.deadline.split(" ")[1] : "")
    const [timeStampLastEdited, setTimeStampLastEdited] = useState(currentTask.timeStampLastEdited)
    const [timeStampLastMoved, setTimeStampLastMoved] = useState(currentTask.settimeStampLastMoved);


    function handleTimeStampLastEdited() { setTimeStampLastEdited(new Date().toLocaleString()) }

    function handleParentColumnID() { }

    function handleTitle(e) {
        //Varnar för att titel måste finnas
        if (!e.target.textContent) {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
        //...sätter alltid titel...
        // varning kommer även i nästa steg...
        setTitle(e.target.textContent)
        handleTimeStampLastEdited()
    }

    function handleDescription(e) {
        setDescription(e.target.value);
        handleTimeStampLastEdited()
        console.log(description)
    }

    function handleDeadlineDate(e) {
        setDeadlineDate(e.target.value)
        handleTimeStampLastEdited()
    }
    function handleDeadlineTime(e) {
        setDeadlineTime(e.target.value)
        handleTimeStampLastEdited()
    }
    function handleClearDeadline() {
        setDeadlineDate("")
        setDeadlineTime("")
        handleTimeStampLastEdited()
    }

    //funktion för att bestämma storleken på textarean dynamisk:



    //Sparar och tar bort modalen:
    function handleExitAndSaveModal() {

        if (title !== "") {
            console.log(title)
            console.log("exit")
            console.log(taskID);
            uppdateTask()
            setadvancedEditisOpend(false);
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }



    }

    //TODO:
    function handleDeleteTask(taskID) { }


    function uppdateTask() {

        // skapar en ny array att byta ut den gamla mot...
        // kopierar alla uppgifter från den gamla förutom om det är det alktuella IDt.. 
        //...Då byts den ut mot ny data.
        const newArray = tasks.map((task) => {
            if (task.id === taskID) {
                return {
                    title: title,
                    id: taskID,
                    parentColumnId: parentColumnId,
                    description: description,
                    deadline: deadlineDate + " " + deadlineTime,
                    timeStampCreated: currentTask.timeStampCreated,
                    timeStampLastEdited: new Date().toLocaleString(),
                    timeStampLastMoved: null
                }
            } else {
                return task;
            }
        }
        )
        // console.log(newArray)

        // sätter ny array som mina tasks.
        setTasks(newArray);
    }


    // todo GÖR DETTA TILL USE EFFEKT SOM SÄTTS EFTER ATT KOMPONENTEN RENDERAS: och uppsateras VARJE GÅNG CURRENT TASK UPPDATERAS:
    const [currentColumn, setCurrentColumn] = useState(columns.find((column) => {
        return column.id === currentTask.parentColumnId;

    }))
    // console.log(currentColumn)





    const content = <>

        <article className="advancedEditModal">
            <div className="head">
                <h2>{parentColumnId}  </h2>
                <button className="cross" title="Stäng och spara" onClick={handleExitAndSaveModal}>X</button>
            </div>

            <div className="body">

                <h1 contentEditable="true"
                    suppressContentEditableWarning
                    onBlur={handleTitle}>
                    {title}
                </h1>

                <div className="meta-data_section">
                    <div className="time-stams_container" >

                        <p style={{ fontSize: "0.8rem" }}>Deadline:</p>



                        {/* deadline inputs kommer här: */}

                        <input type="date" value={deadlineDate} onChange={handleDeadlineDate} />
                        <input type="time" style={{ marginBottom: "0.5rem", }}
                            value={deadlineTime} onChange={handleDeadlineTime} />
                        <button style={{
                            fontSize: "0.8rem",
                            backgroundColor: "hsl(0, 0%, 95%)",
                        }}
                            onClick={handleClearDeadline}>Rensa deadline</button>


                    </div>

                    <div className="handle-columns_container" >

                        <label htmlFor="Flytta Uppgift:" style={{ fontSize: "0.8rem" }}>Flytta uppgift:</label>
                        <br />

                        <select name="Flytta Uppgift">
                            <option value="hej ">HEJ</option>
                            <option value="och ">OCH</option>
                            <option value="hå">HÅ</option>
                        </select>
                    </div>
                </div>



                <textarea
                    className="description"
                    placeholder="Beskrivning...."
                    onChange={handleDescription}
                    value={description}
                >
                </textarea>
                <div>
                    <div className="time-stams_container" style={{ marginBottom: "0.5rem" }} >
                        <p className="timestamps">Skapad: {currentTask.timeStampCreated}</p>
                        <p className="timestamps">Redigerad: {timeStampLastEdited}</p>
                    </div>

                    <div className="footer-buttons_container">

                        <div className="danger-zone">
                            <button className="danger-btn" onClick={handleDeleteTask(taskID)}>Radera</button>
                        </div>

                        <div>
                            <button className="secondary-btn"
                                onClick={() => { setadvancedEditisOpend(false) }}>Avbryt</button>
                            <button className="primary-btn"
                                onClick={handleExitAndSaveModal}
                                style={{ marginLeft: "1rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                                <b>OK</b>
                            </button>
                        </div>

                    </div>
                </div>


            </div>
            {showAlert && <Alert alertContent={"⚠️ Ge uppgiften en titel"} />}

        </article>
    </>;


    return (

        <Modal modalContent={content} setadvancedEditisOpend={setadvancedEditisOpend} />
        // <Modal />
    );
};