

import { useContext } from "react"
import BoardColumn from "./BoardColumn"
import AddTaskCard from "./AddTaskCard"

import { IoMdArrowRoundBack } from "react-icons/io";


import { useParams, Link } from 'react-router-dom'

import { columnsContext } from "../App"


export default function SingleColumnView() {

    const { columns, setColumns } = useContext(columnsContext);
    const { setShowColumnSettingsModal } = useContext(columnsContext);

    // häntar id från sökvägen
    const { id } = useParams()

    // Sätter boleanen som öppnr inställningarna för kolumnen till false, ifall man kommer direkt därifrån och seda klickar sig tillbaka kommer doen fortfarande vara öppen om inte detta görs.
    setShowColumnSettingsModal(false);



    return (
        <>

            <div style={{ margin: "0 auto" }}>
                <br />
                <Link to="/"> <IoMdArrowRoundBack /> Tillbaka till boarden</Link>
            </div >

            <main className='columns-container_main'>
                {/* //loopar igenom varje kolumn och visar bara den som tämmer överens med id i sökvägen. */}
                {columns.map((column) => {
                    console.log(column, column.columnID)
                    if (id == column.columnID) {
                        // console.log("id hämtades från parametern :", id)
                        return <BoardColumn column={column} />

                    }

                })
                }
            </main>




        </>
    )

}