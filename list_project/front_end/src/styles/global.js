import {createGlobalStyle} from "styled-components"

export default createGlobalStyle `
@import url('https://fonts.googleapis.com/css?family=Poppins:300,500&display=swap');
* {
  margin: 0;
  padding: 0;
  clear:both;
  outline:0;
  box-sizing: border-box;
  }
html, body, #root{
  height:100%;
  }
body{
  font: 14px 'Poppins', sans-serif;
  background: #1b1b1b;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
  }
  .title{
    font-size:26px;
    color: #fafafa;
    font-weight:300;
  }
  .flex{
    display: flex;
    margin: 2rem auto;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    max-width:920px;
    h3{
      flex:2
    }
    span{
      flex:1;
      justify-content: flex-end;
      display: flex;
      color: #fafafa;
      align-items: center;
      svg{
        margin-right: 5px;
      }
    }
  }
`;