import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 100px 0px;

  h1{
    color: #fff;
    font-family: 'logoFont'
  }

  ul{
    display: flex;
    li{
      margin: 0px 15px;
      
      a{
        color: #fff;
      }

      &:nth-child(3) a{
        background-color: #fff;
        color: #000;

        padding: 8px;
        border-radius: 15px;

        transition: 300ms ease-out;
        &:hover{
          color: white;
          background-color: #000;
        }
      }
    }
  }
`