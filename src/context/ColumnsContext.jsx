import { createContext, useState, useEffect } from "react";
import { getColumns, saveColumns } from '../utils/ApiUtils'

//kontext skapad och exporteras som default:
const ColumnsContext = createContext();
export default ColumnsContext

//funtion som returnerar en provider av min kontext med prop destructad children:
export function ColumnsContextProvider({ children }) {

    //Värde för columnContext
    const [columns, setColumns] = useState(getColumns());
    // console.log(columns)

    // Spara columns när variabeln columns uppdateras:
    useEffect(() => {
        saveColumns(columns);
    }, [columns])


    //hanterar state för modalen som redigerar kolumner
    const [showColumnSettingsModal, setShowColumnSettingsModal] = useState(false)
    //håller id på den kolumn som anändaren vill redigera:
    const [columnToEdit, setColumnToEdit] = useState(false);


    //returnerar provider av min kontext som  omsluter children.
    //Värden skickas med i kontexten här.
    return (
        //provider av min kontext
        <ColumnsContext.Provider value={{
            columns, setColumns,
            showColumnSettingsModal, setShowColumnSettingsModal,
            columnToEdit, setColumnToEdit
        }}>

            {children}

        </ColumnsContext.Provider>

    )
} 