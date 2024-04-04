import { useEffect, useState, useContext } from "react";
import ColumnsSettingsModal from "./ColumnsSettingsModal"
import { columnsContext } from "../App";


export default function Header() {



    const { showColumnSettingsModal, setShowColumnSettingsModal } = useContext(columnsContext);

    return (
        <header>
            <h1>The Board App 😃</h1>

            <div style={{ marginLeft: "auto" }}>
                <button onClick={() => { setShowColumnSettingsModal(true) }} > Ny Kollumn</button >
            </div>

            {showColumnSettingsModal && <ColumnsSettingsModal />}


        </header >
    )
}