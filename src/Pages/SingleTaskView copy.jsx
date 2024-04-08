import { useContext } from "react"

import { IoMdArrowRoundBack } from "react-icons/io";

import { useParams, Link } from 'react-router-dom'


//Kontext
import TasksContext from "../context/TasksContext";
import ColumnsContext from "../context/ColumnsContext";

import Modal from "../components/Modal";

import OuupsPage from "./OuupsPage";

import AdvancedEditModal from "../components/AdvancedEditModal";


export default function SingleTaskView() {

    const { tasks } = useContext(TasksContext);

    const { id } = useParams();

    const taskToShow = tasks.find((task) => task.id == id);

    return (
        <>
            {/* om det finns en task att visa så visas den:)  */}
            {taskToShow ? (
                <>
                    <div style={{
                        margin: "0 auto",
                        zIndex: "99999",
                        backgroundColor: "white",
                        padding: "0 1rem",
                        borderRadius: "0.5rem"
                    }}>
                        <Link to="/"> <IoMdArrowRoundBack /> Tillbaka till boarden</Link>
                    </div >
                    <br />
                    <AdvancedEditModal taskID={taskToShow.id} />
                </>
            ) : (
                //annars.. felsida:
                <OuupsPage />
            )}
        </>
    )

}


// export default function SingleTaskView() {

//     const { tasks } = useContext(TasksContext);
//     const { columns } = useContext(ColumnsContext);

//     // häntar id från sökvägen
//     const { id } = useParams();

//     //kollar igenom uppgifterna efter den uppgift som matchar id i sökvägen
//     const taskToShow = tasks.find((task) => task.id == id);


//     let content;

//     //OM det finns en task att visa så börja skapa content.......
//     if (taskToShow) {

//         //hänta den kolumn som tasken ligger i för tillfället:
//         const currentColumn = columns.find((column) => column.columnID == taskToShow.parentColumnId)

//         //innehåller som skjuts in i modalen nedan:
//         content = <>

//             <article style={{
//                 display: "flex",
//                 gap: "1rem",
//                 flexDirection: "column"
//             }}>

//                 <div style={{ margin: "0 auto" }}>
//                     <Link to="/"> <IoMdArrowRoundBack /> Tillbaka till boarden</Link>
//                 </div >

//                 <div>
//                     <h3 style={{
//                         backgroundColor: currentColumn.columnColor,
//                         color: "White",
//                         padding: "0 1rem",
//                         width: "fit-content",
//                         borderRadius: "1rem"
//                     }} > {currentColumn.columnName} </h3>
//                 </div>

//                 <h1>
//                     {taskToShow.title}
//                 </h1>

//                 <div>
//                     <h2 style={{ fontSize: "0.8rem" }}>Deadline:</h2>
//                     <p>{taskToShow.deadline}</p>
//                 </div>

//                 <div>
//                     <h2 style={{ fontSize: "0.8rem" }}>Beskrivning:</h2>
//                     <p>{taskToShow.description}</p>
//                 </div>

//                 <div style={{ fontSize: "0.8rem", lineHeight: "1", color: "grey" }}>
//                     <p className="timestamps">Skapad: {taskToShow.timeStampCreated}</p>
//                     <p className="timestamps">Redigerad: {taskToShow.timeStampLastEdited}</p>
//                 </div>

//             </article >
//         </>;
//     }

//     return (
//         <>
//             {/* om det finns en task att visa så visas den:)  */}
//             {taskToShow ? (
//                 <>
//                     <Modal modalContent={content} />
//                 </>
//             ) : (
//                 //annars.. felsida:
//                 <OuupsPage />
//             )}
//         </>
//     )

// }