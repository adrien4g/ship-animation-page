import {Routes, Route} from 'react-router-dom'

//Pages
import MainPage from '../pages/main'
import ContactPage from '../pages/contact'

const MainRoutes = () =>{
  return(
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/contato' element={<ContactPage/>}/>
    </Routes>
  )
}

export default MainRoutes