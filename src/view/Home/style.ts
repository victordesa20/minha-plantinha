import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  
  .nomeloja {
    font-size: 90%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  nav {
    min-width: 100%;
    background-color: #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .nav-list {
    list-style: none;
    display: flex;
  }

  .nav-list li {
    letter-spacing: 3px;
    margin-left: 32px;
  }

  .planta-background {
    background: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 30vh;
  }

  .ofertas-do-dia {
    min-height: 100%;
    width: 100%;
    background-image: url(https://static.vecteezy.com/ti/fotos-gratis/p1/1970994-parede-verde-samambaia-gr%C3%A1tis-foto.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  
  .product-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    height: 300px;
    background-color: #fff;
    border-radius: 12px;
    padding: 2%;
    margin-top: 1%;
  }

  footer {
    width: 100%;
    height: 5vh;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
`