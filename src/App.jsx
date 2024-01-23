import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Components/HomePage/HomePage"
import Select from "./Components/SignUp/Select"
import Chef from "./Components/Chef/Chef"
import MainPage from "./Components/MainPage/MainPage"
import Allrecipes from "./Components/Allrecipes/Allrecipes"


function App() {
  return (
    <>

      {/* <HomePage/> */}
      < Routes >
      <Route path='/' element={<HomePage />} />
         <Route path='/MainPage' element={<MainPage />} />
        < Route path='/Login' element={<Login />} />
        < Route path='/Select' element={<Select />} />
        < Route path='/signup' element={<SignUp />} />
        < Route path='/Chef' element={<Chef />} />
        < Route path='/Allrecipes' element={<Allrecipes />} />
        

      </Routes ></>

  )
}
export default App
