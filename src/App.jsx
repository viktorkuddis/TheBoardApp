import './App.css'

//modeuler:
import Header from './modules/Header'
import ColumnsContainer from './modules/ColumnsContainer'

import Modal from './modules/Modal'


function App() {


  const modalContent =
    <>
      <h1>Här är modal rubrik</h1>
      <h2>Här är underrubrik</h2>
      <p>... och så lite brödtext Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nihil accusantium accusamus doloremque ea vitae rem debitis recusandae sint, fuga eos hic sed ab ipsam labore dicta, odio nostrum iure.</p>
      <button>Knapp</button>
    </>;






  return (
    <div className='app_container'>

      <Header />
      <ColumnsContainer />
      <Modal />
      {/* <Modal modalContent={modalContent} /> */}


    </div>
  )
}

export default App
