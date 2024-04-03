import './App.css'
import './AddTaskCard.css'
import './Animations.css'

//modeuler:
import Header from './modules/Header'
import ColumnsContainer from './modules/ColumnsContainer'

import Modal from './modules/Modal'
import Alert from './modules/Alert'

import { useEffect, useState, createContext } from 'react'


import { getTasks, saveTasks } from './utils/ApiUtils'

//KONTEXT FÖR KOLUMNER
export const columnsContext = createContext();

//KONTEXT FÖR TASKS
export const tasksContext = createContext();


function App() {

  //Värde för columnContext
  const [columns, setColumns] = useState([
    //initiell data som utgör standardkolumner:
    {
      columnName: "Todo",
      columnID: 1,
      columnColor: "mediumpurple",
      markChildsAsDone: false,
    }, {
      columnName: "Doing",
      columnID: 2,
      columnColor: "lightskyblue",
      markChildsAsDone: false,
    }, {
      columnName: "Done",
      columnID: 3,
      columnColor: "lightgreen",
      markChildsAsDone: true,
    }
  ]);

  // Värde för tasks
  const [tasks, setTasks] = useState(getTasks());
  // console.log(tasks);

  // Spara tasks när variabeln tasks uppdateras:
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks])


  return (
    <div className='app_container'>



      <Header />

      <columnsContext.Provider value={{ columns, setColumns }}>
        <tasksContext.Provider value={{ tasks, setTasks }}>

          <ColumnsContainer />

        </tasksContext.Provider>
      </columnsContext.Provider>

      {/* <Modal /> */}
      {/* <Modal modalContent={modalContent} /> */}








    </div>
  )
}

export default App
