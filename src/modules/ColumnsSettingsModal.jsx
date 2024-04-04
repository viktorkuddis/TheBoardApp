import Modal from "./Modal";

import { columnColors } from "../utils/ColumnsUtils";

export default function ColumnsSettingsModal() {


    console.log(columnColors)


    function handleButtonClick() {


        const columnToAdd = {
            columnName: "mamam",
            columnID: columns.length + 1,
            columnColor: "green"
        }

        setColumns((c) => [...c, columnToAdd]);
    }






    const content = <>

        <div className="columnSettingsModal">
            <div className="body">

                <h1>
                    <input type="text" placeholder=" Kolumnens Namn" style={{ fontSize: "inherit", fontStyle: "inherit", fontWeight: "inherit" }} />
                </h1>

                <p>
                    <input type="checkbox" id="markChildsAsDoneCheckbox" name="markChildsAsDoneCheckbox" value="true" />
                    <label htmlFor="markChildsAsDoneCheckbox" style={{ cursor: "pointer" }}>Markera kort i denna kolumn som klara</label>
                </p>

                <div className="colorPicker_container">
                    <h3>Färg:</h3>
                    <div className="colorPickerList_container">
                        {columnColors.map((color, index) => (
                            <div key={index}>
                                <input type="radio"
                                    id={color.colorNickName}
                                    name="colorPicker"
                                    value={color.cssColorValue} />

                                <label htmlFor={color.colorNickName}
                                    style={{ backgroundColor: color.cssColorValue }}>{color.colorNickName}</label>
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
                    <button className="secondary-btn">Avbryt</button>
                    <button className="primary-btn"
                        style={{ marginLeft: "1rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
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