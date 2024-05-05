import { useState } from 'react'
import './App.css'
import List from './components/prueba/EjercicioPrueba.jsx'
import Formularios from './components/examen/Formularios.jsx'
import ScrollUp from './components/botones/ScrollUp.jsx'

import AboutUs from './pages/AboutUs'
// import CheckinCard from './components/CheckinCard'
import Room from './section/Room'
import Rooms from './pages/Rooms.jsx'


function App() {


  return (
    <div className=''>

    
<ScrollUp/>

    {/* <Rooms /> */}
     {/* <Room habitacion='ESTÁNDAR' url='src\assets\room_img\room1.png' /> */}
      
    <AboutUs/>


     {/* <Hello/> */}
    {/* <Welcome name="Emilio" age={27} />
    <Colores colores={[
      {
        name:"Rojo",
        id:"1",
      },
      {
        name:"Naranja",
        id:"2",
      },
      {
        name:"Amarillo",
        id:"3",
      },
    ]}/> */}
{/* <ListaTareas /> */}

    </div>
  )
}

export default App
