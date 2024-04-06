/* HOW TO HANTERA MODALEN!:

- Skapa en variabel med de innehåll som modalen ska visa
  Exempel: 
    const variabelFörmodalContent =
    <>
      <h1>Här är modal rubrik</h1>
      <h2>Här är underrubrik</h2>
      <p>... och så lite brödtext Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nihil accusantium accusamus doloremque ea vitae rem debitis recusandae sint, fuga eos hic sed ab ipsam labore dicta, odio nostrum iure.</p>
      <button>Knapp</button>
    </>;

- Kalla på modalen och skicka in variabeln som prop "modalContent".
  Exempel:
    <Modal modalContent={variabelFörmodalContent} />
*/

export default function Modal(props) {

  return (

    <div className="modal-background-plate">
      <div className="modal-content-container">
        {props.modalContent}
      </div>
    </div>

  )
};

Modal.defaultProps = {
  modalContent: "Det finns ingenting att visa i denna modalen just nu."
}
