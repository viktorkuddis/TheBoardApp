
//Hooks:
import { useState, createContext, useContext } from "react";

//moduler:
import BoardColumn from "./BoardColumn";
import { columnsContext } from "../App";




//Detta är containern som i sin tur håller kolumnerna:
export default function ColumnsContainer() {

    // hämtar kontext för kolumner
    const { columns, setColumns } = useContext(columnsContext);
    console.log(columns);

    // todo Eventuellt flytta denna knappen upp i headern:
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
    // todo -------------------------------------


    return (
        <>
            {/* // todo: Knapp för att skapa ny kollumn finns här. Vad ska funktionn heta? */}
            < button onClick={handleButtonClick} > Ny Kollumn</button >





            <main className='columns-container_main'>

                {/* Loopa genom kolumnerna för att skapa dom som separata komponenter:
                Drillar ner props för att korten ska veta vilken kolumn de ska lägga sig i.*/}

                {columns.map((column) => (
                    <BoardColumn
                        key={column.columnID}
                        columnID={column.columnID}
                        columnName={column.columnName}
                        columnColor={column.columnColor}
                        markChildsAsDone={column.markChildsAsDone}
                    />
                ))}

            </main >



        </>
    );


}