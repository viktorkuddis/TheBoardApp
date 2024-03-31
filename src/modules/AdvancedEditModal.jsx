import Modal from "./Modal";

export default function AdvancedEditModal() {

    const content = <>
        hej detta är contentet.
        <br />
        <button>hä r är en knapp</button>
    </>;


    return (

        <Modal modalContent={content} />
    );
};