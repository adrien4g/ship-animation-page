import {Container} from './style.js'

//components
import Header from '../../components/header'
import ShipAnimation from '../../components/ShipAnimation'

//icons
import {BiCheckShield as Shield, BiRun as Agility} from 'react-icons/bi'
import {FaHandsHelping as Hand, FaArrowAltCircleRight as Arrow} from 'react-icons/fa'

//Images
import port from '../../images/porto.png'

const MainPage = () =>{
  return(
    <Container>
      <Header />
      <div id='content'>
        <img id='port' src={port} alt='port'/>
        <main>
          <h1>Seja bem vindo(a)</h1>
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>

          <div id='qualities'>
            
            <div class='quality'>
              <div class='nameQuality'>
                <p>Segurança</p>
              </div>
              <Shield color='#175f78' class='icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
            
            <div class='quality'>
              <div class='nameQuality'>
                <p>Agiblidade</p>
              </div>
              <Agility color='#175f78' class='icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
            
            <div class='quality'>
              <div class='nameQuality'>
                <p>Responsabilidade</p>
              </div>
              <Hand color='#175f78' class='icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </div>

          </div>

        </main>
        
        <ShipAnimation id='animation' size={400}/>
        
      </div>
      <Arrow color='#fff' id='arrow' />
    </Container>
  )
}
export default MainPage