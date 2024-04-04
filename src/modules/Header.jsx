import ColumnsSettingsModal from "./ColumnsSettingsModal"


export default function Header() {



    function handleButtonClick() {

        const columnToAdd = {
            columnName: "mamam",
            columnID: columns.length + 1,
            columnColor: "green"
        }

        setColumns((c) => [...c, columnToAdd]);
    }

    return (
        <header>
            <h1>The Board App 😃</h1>

            <div style={{ marginLeft: "auto" }}>
                < button onClick={handleButtonClick} > Ny Kollumn</button >
            </div>

            <ColumnsSettingsModal />

        </header>
    )
}