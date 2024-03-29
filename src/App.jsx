import './App.css'
import './AddTaskCard.css'

//modeuler:
import Header from './modules/Header'
import ColumnsContainer from './modules/ColumnsContainer'

import Modal from './modules/Modal'
import { useEffect, useState, createContext } from 'react'

import { getTasks } from './utils/ApiUtils'

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
  const [tasks, setTasks] = useState([{
    title: "Vattna Blommorna",
    id: 1,
    parentColumnId: 1,
    description: "Det behövs innan dom dör",
    deadline: "NUUUUUU",
    timeStampCreated: "igår",
    timeStampLastEdited: "nu",
    timeStampLastMoved: null,
  }, {
    title: "Slänga soporna",
    id: 2,
    parentColumnId: 1,
    description: "Glöm inte att porten till soprummet är tung att öppna!",
    deadline: null,
    timeStampCreated: "förra veckan",
    timeStampLastEdited: "igår",
    timeStampLastMoved: null,
  }, {
    title: "Kolla på TV",
    id: 3,
    parentColumnId: 2,
    description: "Viktigt att få tid för sig själv också ju!",
    deadline: null,
    timeStampCreated: "idag",
    timeStampLastEdited: null,
    timeStampLastMoved: null,
  }, {
    title: "Bygga en ny app",
    id: 4,
    parentColumnId: 3,
    description: "Bygg dendär appen som håller koll på uppgifter jag har att göra!",
    deadline: "igår",
    timeStampCreated: "två veckor sedan",
    timeStampLastEdited: "igår",
    timeStampLastMoved: null,
  }]);


  useEffect(() => {
    setTasks(getTasks())
  }, [])


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
