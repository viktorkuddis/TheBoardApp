import Modal from "./Modal";

import { columnColors } from "../utils/ColumnsUtils";
import { useContext, useState } from "react";

import { columnsContext } from "../App";

export default function ColumnsSettingsModal({ setshowColumnSettingsModal }) {


    //data om de kollumner som finns:
    const { columns, setColumns, setShowColumnSettingsModal } = useContext(columnsContext);
    console.log(columns)



    const [name, setName] = useState("");
    const [color, setColor] = useState("grey");
    const [markChildsAsDone, setMarkChildsAsDone] = useState(false);

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
            //annars spara...
            console.log("confirm")

            //Skaopar ett unikt ID:
            let id = new Date;
            id = "column" + id.getTime()
            console.log("id:", id);


            //Adderar den nya kolumnen
            const newColumn = {
                columnName: name,
                columnID: id,
                columnColor: color,
                markChildsAsDone: markChildsAsDone,
            }
            console.log(newColumn)

            setColumns((c) => [...c, newColumn]);

            setShowColumnSettingsModal(false)
        }
    }

    //stänger modalen bara:
    function handleCancel() {
        setshowColumnSettingsModal(false)
    }






    const content = <>

        <div className="columnSettingsModal">
            <div className="body">

                <h1>
                    <input type="text"
                        placeholder=" Kolumnens Namn"
                        value={name}
                        onChange={handleChangeName}
                        style={{
                            fontSize: "inherit",
                            fontStyle: "inherit",
                            fontWeight: "inherit"
                        }} />
                </h1>

                <p>
                    <input type="checkbox"
                        id="markChildsAsDoneCheckbox"
                        name="markChildsAsDoneCheckbox"
                        defaultValue="true"
                        onChange={handleChandeMarkChildsAsDone}
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