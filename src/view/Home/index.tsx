import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(()=>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])


    const handleCart = (index: number ) => {
      const productStore = JSON.stringify(data[index])
      localStorage.setItem(`@Produto-${index}`, productStore)
    }

    return (
      <Container>
          <nav className="navigation">
            <div className="nomeloja">
              <h1><a href="index.html">Minha Plantinha</a></h1>
            </div>

            <div className="nav-ofertas"> 
              <a href="#"><i className="fas fa-sun">Plantinhas do dia!</i></a>
            </div>

            <div className="nav-vasinho"> 
              <a href="#"><i className="fas fa-cart-plus">Meu vaso</i></a>
            </div>

            <div className="nav-categorias"> 
              <a href="#"><i className="fas fa-cart-plus">Carrinho</i></a>
            </div>
          </nav>

          <section className="planta-background">

          </section>

          <section className="ofertas-do-dia">
            {data.map( (prod, index) => (
              <div className="container">
                <div className="product-content" key={prod.id}>
                  <img src={prod.photo} alt="iphone" width="200" height="auto"/>
                  <h4>{prod.name}</h4>
                  <span>{prod.description}</span>
                  <h6>{prod.price}</h6>
                  <button onClick={ () => handleCart(index)}>Adicionar ao meu vaso</button>
                </div>
              </div>
          ))}
          </section>

          <footer>
            <div className="footer">
              <div className="name-footer">
                <h3>Desafio #2 Hiring Coders <a href="https://www.linkedin.com/in/victordesa20/" target="_blank">por Victor de Sa</a></h3>
              </div>
            </div>
          </footer>
      </Container>
    );
}

export default Home; 