import {createGlobalStyle} from 'styled-components'

import logoFont from '../images/font.ttf'

const Style = createGlobalStyle`
  @font-face {
    font-family: 'logoFont';
    src: url(${logoFont}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Ubuntu', sans-serif;

    text-decoration: none;
  }

  body{
    background: rgb(20,138,179);
    background: -moz-linear-gradient(90deg, rgba(20,138,179,1) 0%, rgba(23,95,120,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(20,138,179,1) 0%, rgba(23,95,120,1) 100%);
    background: linear-gradient(90deg, rgba(20,138,179,1) 0%, rgba(23,95,120,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#148ab3",endColorstr="#175f78",GradientType=1);
  }

  li{
    list-style: none;
  }
`

export default Style