import { useContext } from "react";

//komponenter:
import ColumnsSettingsModal from "./ColumnsSettingsModal"

//kontext
import { columnsContext } from "../App";


export default function Header() {

    const { showColumnSettingsModal, setShowColumnSettingsModal } = useContext(columnsContext);

    // NOLLSTÄLL BOARD:
    function handleResetBoard() {

        const password = "Nollställ"

        const confirmation = prompt(`⚠️ NOLLSTÄLL BOARD ⚠️
Du håller på att nollställa arbetsytan. ALLA uppgifter och kolumner kommer gå förlorade.
Detta går inte att ångra.

Är du säker?
Skriv "${password}" för att bekräfta.`);

        if (confirmation === password) {

            const confirm2 = confirm("Nollställer board.")

            if (confirm2) {
                // console.log("vi nollställer")
                localStorage.clear();
                window.location.reload();
            }
        } else {
            alert("Boarden nollställs inte.")
        }
    }

    return (
        <header>
            <div>
                <h1>The Board App 😃</h1>
                <p className="reset" onClick={handleResetBoard}>Nollställ Boarden</p>
            </div>

            <div style={{ marginLeft: "auto" }}>
                <button onClick={() => { setShowColumnSettingsModal(true) }} > Ny Kolumn</button >
            </div>

            {showColumnSettingsModal && <ColumnsSettingsModal />}

        </header >
    )
}