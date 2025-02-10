
import { Route, Routes } from 'react-router'
import './App.css'
import Meal from './Meal'
import MealDetails from './MealDetails'



function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Meal />} />
        <Route path='/:idMeal'  element={<MealDetails/>} />
      </Routes>
   
      
  </>
  )
}

export default App
