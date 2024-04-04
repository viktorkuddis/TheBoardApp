
//Hooks:
import { useState, createContext, useContext } from "react";

//moduler:
import BoardColumn from "./BoardColumn";
import { columnsContext } from "../App";




//Detta är containern som i sin tur håller kolumnerna:
export default function ColumnsContainer() {

    // hämtar kontext för kolumner
    const { columns, setColumns } = useContext(columnsContext);




    return (
        <>



            <main className='columns-container_main'>

                {/* Loopa genom kolumnerna för att skapa dom som separata komponenter:
                Drillar ner props för att korten ska veta vilken kolumn de ska lägga sig i.*/}

                {columns.map((column) => (
                    <BoardColumn
                        key={column.columnID}
                        column={column}
                    />
                ))}

            </main >



        </>
    );


}