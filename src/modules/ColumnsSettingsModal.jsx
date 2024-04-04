import Modal from "./Modal";

import { columnColors } from "../utils/ColumnsUtils";
import { useContext, useState } from "react";

import { columnsContext } from "../App";

export default function ColumnsSettingsModal() {


    const { columns, setColumns, setShowColumnSettingsModal, columnToEdit, setColumnToEdit } = useContext(columnsContext);
    console.log(columns)
    console.log("columnToEdit:", columnToEdit)



    const [name, setName] = useState(columnToEdit.columnName || "");
    const [color, setColor] = useState(columnToEdit.columnColor || "grey");
    const [markChildsAsDone, setMarkChildsAsDone] = useState(columnToEdit.markChildsAsDone || false);

    function handleChangeName(e) {
        setName(e.target.value)
        console.log(e.target.value)
    }

    function handleChandeMarkChildsAsDone(e) {
        setMarkChildsAsDone(e.target.checked)
        console.log(e.target.checked)
    }

    function handleChangeColor(e) {
        setColor(e.target.value)
        console.log(e.target.value)
    }


    function handleConfirmColumn() {
        //om inget namn finns så studsa på det!
        if (!name) {
            alert("Vänligen Namnge Kolumnen")
        } else {

            // om redigering av en redan existerande kolumn.....
            if (columnToEdit) {
                console.log("denna kolumnen finns redan, och uppdateras nu...");

                // loopar igenom o returnerar kolumner. Om det är aktuell kolumn byts den ut mot det nya objektet:
                const newArray = columns.map((column) => {
                    if (column.columnID === columnToEdit.columnID) {
                        return {
                            columnName: name,
                            //Det befintliga idt:
                            columnID: column.columnID,
                            columnColor: color,
                            markChildsAsDone: markChildsAsDone,
                        }
                    } else {
                        return column
                    }
                })

                // byter ut kolumner mot den nya arrayen.
                setColumns(newArray)
            }
            // annars: om ny kolumn:....
            else {
                console.log("Detta är en ny kolumn och läggs nu till...")

                //Skaopar ett nytt unikt ID:
                let id = new Date;
                id = "column" + id.getTime()
                console.log("id:", id);


                //skapar den nya kolumnen:
                const newColumn = {
                    columnName: name,
                    columnID: id, //nytt unikt id vare här.
                    columnColor: color,
                    markChildsAsDone: markChildsAsDone,
                }
                console.log(newColumn)

                // sätter kolumner:
                // Sprider ut gamla objekt och lägger till det nya.
                setColumns((c) => [...c, newColumn]);
            }





            //nollställer state som visar modal
            setShowColumnSettingsModal(false)
            //nollställer state som eventuellt håller en kolumn att redigera.
            setColumnToEdit(false)
        }
    }

    //stänger modalen bara:
    function handleCancel() {

        //nollställer state som visar modal
        setShowColumnSettingsModal(false)
        //nollställer state som eventuellt håller en kolumn att redigera.
        setColumnToEdit(false)
    }






    const content = <>

        <div className="columnSettingsModal">
            <div className="body" >

                <h1>
                    <input type="text"
                        placeholder=" Kolumnens Namn"
                        value={name}
                        onChange={handleChangeName}
                        style={{
                            fontSize: "inherit",
                            fontStyle: "inherit",
                            fontWeight: "inherit",
                            border: `1px solid ${color}`,
                            borderBottom: `0.5rem solid ${color}`
                        }} />
                </h1>

                <p>
                    <input type="checkbox"
                        id="markChildsAsDoneCheckbox"
                        name="markChildsAsDoneCheckbox"
                        defaultValue="true"
                        onChange={handleChandeMarkChildsAsDone}
                        // checked avspeglar sig beoende på värdet av variabeln markChildsAsDone
                        checked={markChildsAsDone}
                    />

                    <label htmlFor="markChildsAsDoneCheckbox"
                        style={{ cursor: "pointer", margin: "0.25rem" }}>
                        Markera kort i denna kolumn som klara
                    </label>
                </p>

                <div className="colorPicker_container">
                    <h3>Färg:</h3>
                    <div className="colorPickerList_container">

                        {columnColors.map((color, index) => (

                            <div key={index}>

                                <input type="radio"
                                    id={color.colorNickName}
                                    name="colorPicker"
                                    value={color.cssColorValue}
                                    onChange={handleChangeColor}
                                />

                                <label htmlFor={color.colorNickName}
                                    style={{ backgroundColor: color.cssColorValue, fontWeight: "bold" }}>{color.colorNickName}
                                </label>

                            </div>
                        ))}

                    </div>
                </div>

            </div>


            <div className="footer-buttons_container">

                <div className="danger-zone">
                    <button className="danger-btn"> Radera</button>
                </div>

                <div className="footer">
                    <button className="secondary-btn" onClick={handleCancel}>Avbryt</button>
                    <button className="primary-btn"
                        style={{ marginLeft: "1rem", paddingLeft: "2rem", paddingRight: "2rem" }}
                        onClick={handleConfirmColumn}>
                        <b>OK</b>
                    </button>
                </div>


            </div>










        </div>


    </>







    return (
        <Modal modalContent={content} />
    )
}