
import { useState } from "react";

import BoardColumn from "./BoardColumn";


export default function ColumnsContainer() {

    // data for render columns in the app:
    const [columns, setColumns] = useState([
        //initial collumns:
        {
            columnName: "Todo",
            columnID: 1,
            columnColor: "mediumpurple",
            markChildsAsDone: false,
        }, {
            columnName: "Doing",
            columnID: 2,
            columnColor: "lightskyblue",
            markChildsAsDone: false,
        }, {
            columnName: "Done",
            columnID: 3,
            columnColor: "lightgreen",
            markChildsAsDone: true,
        }

    ]);

    // TODO: // TODO: // TODO: // TODO: TODO:
    function handleButtonClick() {
        // todo: function for creating a new intance of column. WHat r the  funtions name? 
        const columnToAdd = {
            columnName: "mamam",
            columnID: columns.length + 1,
            columnColor: "green"
        }

        setColumns((c) => [...c, columnToAdd]);
    }


    return (
        <main className='columns-container_main'>

            {/* Loopa genom kollumnerna och skapa dom.*/}
            {columns.map((column) => (
                <BoardColumn
                    key={column.columnID}
                    columnID={column.columnID}
                    columnName={column.columnName}
                    columnColor={column.columnColor}
                    markChildsAsDone={column.markChildsAsDone} />
            ))}

            {/* // todo: Knapp för att skapa ny kollumn finns här. Vad ska funktionn heta? */}
            <button onClick={handleButtonClick}> Ny Kollumn</button>

        </main >
    );


}