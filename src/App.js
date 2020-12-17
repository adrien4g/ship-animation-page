import Style from './global/style'

//Routes
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './services/routes'

const App = () =>{
  return(
    <>
      <Router>
        <Routes />
      </Router>
      
      <Style/>

    </>
  )
}
export default App