import {Container} from './style'

const Header = () =>{
  return(
    <Container>
      <h1>VC Serviços</h1>
      <ul>
        <li>
          <a href='/'>Sobre</a>
        </li>
        <li>
          <a href='/'>Serviços</a>
        </li>
        <li>
          <a href='/'>Contato</a>
        </li>
      </ul>
    </Container>
  )
}

export default Header