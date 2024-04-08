import { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom"

//Kontext
import ColumnsContext from "../context/ColumnsContext";
import TasksContex from "../context/TasksContext";

//ikon:
import { FiLink } from "react-icons/fi";

// komponenter:
import Modal from "./Modal";
import Alert from "./Alert";



export default function AdvancedEditModal({ taskID, advancedEditisOpend, setadvancedEditisOpend }) {

    //taskIT är det aktuella taskets ID:
    // console.log(taskID)

    //alla uppgifter: 
    const { tasks, setTasks } = useContext(TasksContex)
    // console.log(tasks)

    //data om de kollumner som finns:
    const { columns, setColumns } = useContext(ColumnsContext)
    // console.log(columns)

    //Aktuell uppgift:
    const currentTask = tasks.find((task) => { return (task.id === taskID) })
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
    //variabel som håller den aktuella kolumn som tasken just nu befinner sig i:
    const [currentColumn, setCurrentColumn] = useState({});
    // console.log("kolumnen för tasken:currentColumn: ", currentColumn)
    // console.log("namnet på kolumnen:", currentColumn.columnName)



    //Vi behöver kunna navigera användaren till startsidan i vissa situationer....
    const navigate = useNavigate();


    // Uppdaterar CURRENT COLUMN OBJEKTET varje gång parentColumnID uppdateras(flyttas via knapp)(för att kynna färja och namnge labels i realtid):
    useEffect(() => {
        // (ja, det ska bara vara två likamedtecken här:)
        const currentColumnObject = columns.find((column) => parentColumnId == column.columnID)
        setCurrentColumn(currentColumnObject)
    }, [parentColumnId])


    function handleTimeStampLastEdited() {
        setTimeStampLastEdited(new Date().toLocaleString())
    }

    function handleChangeParentColumnID(e) {
        console.log(e.target.value)
        setParentColumnId(e.target.value)
    }

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




    //Sparar och tar bort modalen:
    function handleExitAndSaveModal() {

        if (title !== "") {
            console.log(title)
            console.log("exit")
            console.log(taskID);
            uppdateTask()
            // Om vi har tilgång till variabeln advancedEditisOpend så sätter vi den till faskt. (Den finns inte tillgänglig i single view och kommer generera error annars.).
            advancedEditisOpend && setadvancedEditisOpend(false);
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }


    }

    //Tar bort uppgiften ut Tasks:
    // Skickar ett confirmationsmeddelande. raderar om ja.



    function handleDeleteTask() {

        const confirmation = confirm(`⚠️ RADERA UPPGIFT ⚠️
Du håller på att radera uppgift "${currentTask.title}".

Är du säker?
Detta går inte att ångra!`)

        console.log(confirmation)
        if (confirmation === true) {
            const newArray = tasks.filter((task) => task.id !== taskID)

            // console.log(taskID);
            // console.log(newArray)

            setTasks(newArray);

            //om variabeln advancedEditisOpend inte är tillgänglig 
            //så snavigerar vi användaren till startsidan.
            //variabeln är tillgänglig där kolumnen är tillgänglig. 
            //dvs både i startsidan och i single-column-view. Men inte i single task view.
            //retuslterar i att singleTask-view skickar till startsidan. Annars är man kvar där man är. 
            !advancedEditisOpend && navigate("/");
        }
    }


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

    const content = <>

        <article className="advancedEditModal">
            <div className="head">
                <h2 style={{
                    backgroundColor: currentColumn.columnColor,
                    color: "White"
                }} > {currentColumn.columnName} </h2>

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

                        <select name="Flytta Uppgift" defaultValue={currentTask.parentColumnId} style={{ maxWidth: "250px" }} onChange={handleChangeParentColumnID}>
                            {/* generera option för varje kolumn som finns:*/}
                            {columns.map((column) => {
                                return <option key={column.columnID} value={column.columnID}>{column.columnName}</option>
                            })}

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


                <div className="time-stams_container" style={{ marginBottom: "0.5rem" }} >
                    <Link to={`/task/${currentTask.id}`}
                        style={{ fontSize: "0.8rem" }}> <FiLink /> Direktlänk till denna uppgift.</Link>
                    <p className="timestamps">Skapad: {currentTask.timeStampCreated}</p>
                    <p className="timestamps">Redigerad: {timeStampLastEdited}</p>


                </div>



            </div>

            <div className="footer-buttons_container">

                <div className="danger-zone">
                    <button className="danger-btn" onClick={handleDeleteTask}> Radera</button>
                </div>

                <div>
                    <button className="secondary-btn"
                        onClick={() => {
                            //om variabeln är tillgänglig so ställer vi om den. annrs är användaren i single Task view och då navigerar vi till första sidan.
                            advancedEditisOpend
                                ? setadvancedEditisOpend(false)
                                : navigate("/");
                        }}>Avbryt</button>
                    <button className="primary-btn"
                        onClick={() => {
                            handleExitAndSaveModal()
                            // handle exit modal hörs alltiid på klick
                            // om variabeln int är tillgänglig (innebär att vi är i singleTask-view.) så navigeras vi till förstasidan:
                            !advancedEditisOpend && navigate("/")
                        }}
                        style={{ marginLeft: "1rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                        <b>OK</b>
                    </button>
                </div>

            </div>

            {/* villkorsstyrd alert: */}
            {showAlert && <Alert alertContent={"⚠️ Ge uppgiften en titel"} />}


        </article>
    </>;


    return (

        <Modal modalContent={content} setadvancedEditisOpend={setadvancedEditisOpend} />

    );
};