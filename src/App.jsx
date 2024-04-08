// Style:
import './AddTaskCard.css'
import './Animations.css'
import './ColumnsSettingsModal.css'

import { useEffect, useState, createContext } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Sidor:
import StartPage from './Pages/StartPage'
import SingleColumnView from './Pages/SingleColumnView'
import SingleTaskView from './Pages/SingleTaskView copy';
import OuupsPage from './Pages/OuupsPage'

//layoutfil:
import Layout from './Pages/Layout'


import { TasksContextProvider } from './context/TasksContext'
import { ColumnsContextProvider } from './context/ColumnsContext';


//? KONTEXT FÖR KOLUMNER
//?  export const columnsContext = createContext();

// !KONTEXT FÖR TASKS
// ! export const tasksContext = createContext();

// !import { getTasks, saveTasks } from './utils/ApiUtils'
//? import { getColumns, saveColumns } from './utils/ApiUtils'

function App() {


  // ?Värde för columnContext
  //? const [columns, setColumns] = useState(getColumns());
  //? console.log(columns)

  // !Värde för tasks
  // !const [tasks, setTasks] = useState(getTasks());
  // !console.log(tasks);

  //? Spara columns när variabeln columns uppdateras:
  //? useEffect(() => {
  //? saveColumns(columns);
  //? }, [columns])

  // !Spara tasks när variabeln tasks uppdateras:
  // !useEffect(() => {
  // !  saveTasks(tasks);
  // !}, [tasks])

  //?hanterar state för modalen som redigerar kolumner
  // ?const [showColumnSettingsModal, setShowColumnSettingsModal] = useState(false)
  //?håller id på den kolumn som anändaren vill redigera:
  //? const [columnToEdit, setColumnToEdit] = useState(false);


  return (

    <div className='app_container'>



      {/* //?<columnsContext.Provider
        value={{
          columns, setColumns,
          showColumnSettingsModal, setShowColumnSettingsModal, columnToEdit, setColumnToEdit
        }}> */}

      {/* //! <tasksContext.Provider value={{ tasks, setTasks }}> */}

      <ColumnsContextProvider>

        <TasksContextProvider>

          <Router>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<StartPage />} />
                <Route path="*" element={<OuupsPage />} />
              </Route>
              <Route path="column/:id" element={<SingleColumnView />} />
              <Route path="task/:id" element={<SingleTaskView />} />
            </Routes>
          </Router>

        </TasksContextProvider>
      </ColumnsContextProvider>

      {/* //! </tasksContext.Provider> */}
      {/* //? </columnsContext.Provider> */}



    </div >

  )
}

export default App
