// Style:
import './AddTaskCard.css'
import './Animations.css'
import './ColumnsSettingsModal.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Sidor:
import StartPage from './Pages/StartPage'
import SingleColumnView from './Pages/SingleColumnView'
import SingleTaskView from './Pages/SingleTaskView copy';
import OuupsPage from './Pages/OuupsPage'

//layoutfil:
import Layout from './Pages/Layout'

//Kontext providers:
import { TasksContextProvider } from './context/TasksContext'
import { ColumnsContextProvider } from './context/ColumnsContext';




function App() {


  return (

    <div className='app_container'>

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

    </div >

  )
}

export default App
