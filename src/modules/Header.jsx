import { useEffect, useState } from "react";
import ColumnsSettingsModal from "./ColumnsSettingsModal"


export default function Header() {

    const [showColumnSettingsModal, setshowColumnSettingsModal] = useState(false)


    return (
        <header>
            <h1>The Board App 😃</h1>

            <div style={{ marginLeft: "auto" }}>
                <button onClick={() => { setshowColumnSettingsModal(true) }} > Ny Kollumn</button >
            </div>

            {showColumnSettingsModal && <ColumnsSettingsModal />}


        </header >
    )
}