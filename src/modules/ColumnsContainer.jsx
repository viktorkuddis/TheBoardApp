
//Hooks:
import { useState, createContext, useContext } from "react";

//moduler:
import BoardColumn from "./BoardColumn";
import { columnsContext } from "../App";

//KONTEXT FÖR TASKS
export const tasksContext = createContext();
//Värde för task-kontext

const tasks = [{
    title: "Vattna Blommorna",
    id: 1,
    parentColumnId: 1,
    description: "Det behövs innan dom dör",
    deadline: "NUUUUUU",
    timeStampCreated: "igår",
    timeStampLastEdited: "nu",
    timeStampLastMoved: null,
}, {
    title: "Slänga soporna",
    id: 2,
    parentColumnId: 1,
    description: "Glöm inte att porten till soprummet är tung att öppna!",
    deadline: null,
    timeStampCreated: "förra veckan",
    timeStampLastEdited: "igår",
    timeStampLastMoved: null,
}, {
    title: "Kolla på TV",
    id: 3,
    parentColumnId: 2,
    description: "Viktigt att få tid för sig själv också ju!",
    deadline: null,
    timeStampCreated: "idag",
    timeStampLastEdited: null,
    timeStampLastMoved: null,
}, {
    title: "Bygga en ny app",
    id: 4,
    parentColumnId: 3,
    description: "Bygg dendär appen som håller koll på uppgifter jag har att göra!",
    deadline: "igår",
    timeStampCreated: "två veckor sedan",
    timeStampLastEdited: "igår",
    timeStampLastMoved: null,
}];

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


            <tasksContext.Provider value={tasks}>

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

            </tasksContext.Provider >


        </>
    );


}