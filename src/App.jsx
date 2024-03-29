import './App.css'
import './AddTaskCard.css'

//modeuler:
import Header from './modules/Header'
import ColumnsContainer from './modules/ColumnsContainer'

import Modal from './modules/Modal'


function App() {

  return (
    <div className='app_container'>

      <Header />
      <ColumnsContainer />
      {/* <Modal /> */}
      {/* <Modal modalContent={modalContent} /> */}


    </div>
  )
}

export default App
