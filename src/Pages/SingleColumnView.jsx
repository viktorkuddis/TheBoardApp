import { useContext } from "react"
import BoardColumn from "../components/BoardColumn"

import { IoMdArrowRoundBack } from "react-icons/io";

import { useParams, Link } from 'react-router-dom'

import { columnsContext } from "../App"

import OuupsPage from "./OuupsPage";


export default function SingleColumnView() {

    const { columns, setColumns } = useContext(columnsContext);
    const { setShowColumnSettingsModal } = useContext(columnsContext);

    // häntar id från sökvägen
    const { id } = useParams();

    //kollar igenom kolumnerna efter den kolumn som motsvarar sökvägen. 
    const columnToShow = columns.find((column) => column.columnID == id);

    // Sätter boleanen som öppnar inställningarna för kolumnen till false, ifall man kommer direkt därifrån och sedan klickar sig tillbaka kommer den fortfarande vara öppen om inte detta görs.
    setShowColumnSettingsModal(false);

    return (
        <>
            {/* om det finns en column att visa så visas den :)  */}
            {columnToShow ? (
                <>
                    <div style={{ margin: "0 auto" }}>
                        <br />
                        <Link to="/"> <IoMdArrowRoundBack /> Tillbaka till boarden</Link>
                    </div >
                    <main className='columns-container_main'>
                        <BoardColumn column={columnToShow} />
                    </main>
                </>
            ) : (
                <OuupsPage />
            )}
        </>
    )

}