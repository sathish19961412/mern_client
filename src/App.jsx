import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
          <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <BrowserRouter>
                       <Routes>
                          <Route path='/' element={<Users/>} ></Route>
                          <Route path='/create' element={<CreateUser/>} ></Route>
                          <Route path='/update/:id' element={<UpdateUser/>}></Route>
                       </Routes>
                    </BrowserRouter>
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default App
