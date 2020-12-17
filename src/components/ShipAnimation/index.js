import Wave from 'react-wavify'

import {Container} from './style'

//images
import ship from '../../images/shipBig.svg'
import sky from '../../images/sky.svg'

const ShipAnimation = ({...props}) =>{
  return(
    <Container {...props}>
      <Wave
        id='wave'
        fill='#4f93e0'
        paused={false}
        options={{
          amplitude: 15,
          speed: 0.35,
          points: 3
        }}
      />
      <Wave
        id='wave'
        fill='#4288d6'
        paused={false}
        options={{
          amplitude: 35,
          speed: 0.25,
          points: 3
        }}
      />
      <Wave
        id='wave'
        fill='#2d6eb5'
        paused={false}
        options={{
          amplitude: 10,
          speed: 0.35,
          points: 3
        }}
      />
      <img id='sky' src={sky} alt='sky' />
      <img id='ship' src={ship} alt='ship'/>
    </Container>
  )
}

export default ShipAnimation