import { useContext, useEffect, useState } from "react";
import { tasksContext } from "../App";
import Modal from "./Modal";






export default function AdvancedEditModal({ taskID, setadvancedEditisOpend }) {

    console.log(taskID)

    //alla uppgifter: 
    const { tasks, setTasks } = useContext(tasksContext)
    // console.log(tasks)

    //Aktuell uppgift:
    const currentTask = tasks.find((task) => { return task.id === taskID })
    // console.log(currentTask)

    const [title, setTitle] = useState(currentTask.title || "OJE")
    const [parentColumnId, setParentColumnId] = useState(currentTask.parentColumnId)
    const [description, setDescription] = useState(currentTask.description || "Beskrivning ...")
    const [deadlineDate, setDeadlineDate] = useState(currentTask.deadline.split(" ")[0] || "")
    const [deadlineTime, setDeadlineTime] = useState(currentTask.deadline.split(" ")[1] || "")
    const [timeStampLastEdited, setTimeStampLastEdited] = useState(currentTask.timeStampLastEdited)
    const [timeStampLastMoved, setTimeStampLastMoved] = useState(currentTask.settimeStampLastMoved);


    function handleTimeStampLastEdited() { setTimeStampLastEdited(new Date().toLocaleString()) }

    function handleParentColumnID() { }

    function handleTitle(e) {
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
        console.log("exit")
        uppdateTask()
        setadvancedEditisOpend(false);
    }

    // Eventlyssnare för att klicka ner modalen:
    useEffect(() => {
        //Hämtar bakgrundsplattan
        const backgroundplate = document.querySelector(".modal-background-plate")

        // skapar eventlyssnare som kallar på efterkommande funktioner
        backgroundplate.addEventListener("click", handleBackgroundClick)
        addEventListener("keydown", handleKeyClickModal)

        function handleBackgroundClick(e) {
            if (e.target.className === "modal-background-plate") {
                handleExitAndSaveModal();
            }
        }

        function handleKeyClickModal(e) {
            if (e.key === "Escape") {
                handleExitAndSaveModal();
            }
        }

        //och vi städar....
        return () => {
            backgroundplate.removeEventListener("click", handleBackgroundClick);
            document.removeEventListener("keydown", handleKeyClickModal);
        };
    }, [])


    //Denna Variabel uppdateras ALLTID då en variabel i denna komponent uppdateras.
    const updatedTask = {
        title: title,
        id: taskID,
        parentColumnId: parentColumnId,
        description: description,
        deadline: deadlineDate + " " + deadlineTime,
        timeStampCreated: currentTask.timeStampCreated,
        timeStampLastEdited: new Date().toLocaleString(),
        timeStampLastMoved: null,
    };
    console.log(updatedTask)


    function uppdateTask() {


        // ???????????????????????????????
        // ???????????????????????????????
        // ???????????????????????????????

        /* 
        ! ? VARFÖR UPPDATERAS INTE MIN TASK I LISTAN?
        ? När jag loggar ut ändringar av varje variabel i realtod syns ändringarna.
        ? När jag uppdaterar arrayen finns inte ändringarna kvar. Något med det asynkrona?
        ? Jag har kontakt med min kontext. Går att bevisa genm setTask([updatedTask])
        */

        // FRÅN REACTS DOKUMENTATION https://react.dev/learn/updating-arrays-in-state
        // function handleIncrementClick(index) {
        //     const nextCounters = counters.map((c, i) => {
        //         if (i === index) {
        //    Increment the clicked counter
        //             return c + 1;
        //         } else {
        //    The rest haven't changed
        //             return c;
        //         }
        //     });
        //     setCounters(nextCounters);
        // }

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

        console.log(newArray)

        setTasks([updatedTask]);
    }



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
                        <input type="time" value={deadlineTime} onChange={handleDeadlineTime} />
                        <br />
                        <button style={{
                            fontSize: "0.8rem",
                            backgroundColor: "hsl(0, 0%, 95%)",
                            marginTop: "0.5rem"
                        }}
                            onClick={handleClearDeadline}>Rensa deadline</button>


                    </div>

                    <div className="handle-columns_container" >här ska de vara en drop down</div>
                </div>



                <textarea contentEditable="true"
                    className="description"
                    suppressContentEditableWarning
                    onChange={handleDescription}
                    value={description}
                >
                    {/* {description} */}
                </textarea>
                <div>
                    <div className="time-stams_container" style={{ marginBottom: "0.5rem" }} >
                        <p className="timestamps">Skapad: {currentTask.timeStampCreated}</p>
                        <p className="timestamps">Redigerad: {timeStampLastEdited}</p>
                    </div>

                    <button className="danger-btn">Radera</button>
                </div>


            </div>
        </article>
    </>;


    return (

        <Modal modalContent={content} setadvancedEditisOpend={setadvancedEditisOpend} />
        // <Modal />
    );
};