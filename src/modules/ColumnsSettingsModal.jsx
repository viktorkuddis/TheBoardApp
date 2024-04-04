import Modal from "./Modal";

export default function ColumnsSettingsModal() {





    function handleButtonClick() {


        const columnToAdd = {
            columnName: "mamam",
            columnID: columns.length + 1,
            columnColor: "green"
        }

        setColumns((c) => [...c, columnToAdd]);
    }

    const content = <>

        <div>Här var det kontent</div>
    </>







    return (
        <Modal modalContent={content} />
    )
}