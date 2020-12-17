import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  #content{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    
    position: relative;

    overflow: hidden;

    #port{
      width: 100%;
      position: absolute;
      bottom: -300px;
      
      opacity: 10%;

      z-index: 0;
    }

    main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      flex: 1;

      z-index: 1;
      padding-bottom: 50px;
      h1, h3{
        color: #fff;
      }
      
      h1{
        font-size: 40px;
      }

      h3{
        margin: 50px 0px;
      }
      #qualities{
        display: flex;

        .quality{
          width: 200px;
          height: auto;
          
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          background: #fff;
          border-radius: 36px;

          margin: 15px;

          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
          .nameQuality{
            border-radius: 30px 30px 0px 0px;
            background-color: #2594ba;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            p{
              color: #fff;
              padding: 10px;
            }
          }
          
          p{
            color: #175f78;
            text-align: center;
          }
          .icon{
            font-size: 55px;
            flex: 1;
            transition: 200ms;
            margin: 5px;
          }
          p{
            padding-bottom: 10px;
          }
        }
      }
    }
    #animation{
      margin-right: 80px;
    }
  }
  #arrow{
    position: absolute;
    bottom: 40px;
    font-size: 40px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: 500ms ease-out;
    transform: rotate(0deg);

    &:hover{
      transform: rotate(360deg)
    }
  }
`