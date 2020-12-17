import styled, {keyframes} from 'styled-components'

const ShipShake = keyframes`
  0%{
    transform: translate(10px, 6px) rotate(2deg);
  }
  50%{
    transform: translate(-15px, -10px) rotate(-3deg);
  }
  100%{
    transform: translate(10px, 6px) rotate(2deg);
  }
`

export const Container = styled.div`
  width: ${props => props.size ? `${props.size}px` : '500px'};
  height: ${props => props.size ? `${props.size}px` : '500px'};

  border-radius: 25%;

  overflow: hidden;

  position: relative;
  #sky{
    position: absolute;
    z-index: 0;
  }
  #wave{
    position: absolute;

    &:nth-child(1){
      z-index: 4;
      bottom: ${props => props.size <= 200 ? '-40%' : 
                props.size <=300 ? '-20%' :
                props.size <= 400 ? '-10%' : 
                props.size <= 500 ? '-5%' : '-5%'};
              }

    &:nth-child(2){
      z-index: 2;
      bottom: ${props => props.size <= 200 ? '-20%' : 
                props.size <=300 ? '-5%' :
                props.size <= 400 ? '5%' : 
                props.size <= 500 ? '7%' : '7%'};
              }
    
    &:nth-child(3){
      z-index: 1;
      bottom: ${props => props.size <= 200 ? '-15%' : 
                props.size <=300 ? '0%' :
                props.size <= 400 ? '10%' : 
                props.size <= 500 ? '15%' : '15%'};
              }
  }

  #ship{
    width: 80%;
    
    position: absolute;
    bottom: -7%;
    left: 10%;
    
    z-index: 3;

    animation: ${ShipShake} 5000ms ease-out infinite;
  }
`