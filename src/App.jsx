import './App.css'
import './AddTaskCard.css'
import './Animations.css'
import './ColumnsSettingsModal.css'

import { useEffect, useState, createContext } from 'react'

//komponenter:
import Header from './modules/Header'
import ColumnsContainer from './modules/ColumnsContainer'

import { getTasks, saveTasks } from './utils/ApiUtils'
import { getColumns, saveColumns } from './utils/ApiUtils'

//KONTEXT FÖR KOLUMNER
export const columnsContext = createContext();

//KONTEXT FÖR TASKS
export const tasksContext = createContext();


function App() {


  //Värde för columnContext
  const [columns, setColumns] = useState(getColumns());
  console.log(columns)

  // Värde för tasks
  const [tasks, setTasks] = useState(getTasks());
  // console.log(tasks);

  // Spara columns när variabeln columns uppdateras:
  useEffect(() => {
    saveColumns(columns);
  }, [columns])

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

    </div>
  )
}

export default App
