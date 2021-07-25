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
              <a href="#plantinhas-do-dia"><i className="fas fa-sun">Plantinhas do dia!</i></a>
            </div>

            <div className="nav-cadastro"> 
              <a href="#cadastro"><i className="fas fa-cart-plus">Cadastro</i></a>
            </div>

            <div className="nav-cestinha"> 
              <a href="#"><i className="fas fa-cart-plus">Cestinha</i></a>
            </div>
          </nav>

          <section className="promocao-container">
            <div className="promocao-text">
              <p>Aproveite!!</p>
              <h2>Só hoje 25% OFF</h2>
            </div>
            <div className="promocao-image">
              <img src="https://images.unsplash.com/photo-1558261150-1543b2aeb885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="imagem de promoção" width="300px" height="400px" />
            </div>
          </section>

          <section className="ofertas-do-dia" id="plantinhas-do-dia">
            {data.map( (prod, index) => (
              <div className="container">
                <div className="product-content" key={prod.id}>
                  <img src={prod.photo} alt="iphone" width="200" height="auto"/>
                  <h4>{prod.name}</h4>
                  <span>{prod.description}</span>
                  <h6>R$ {prod.price}</h6>
                  <button onClick={ () => handleCart(index)}>Adicionar na minha cestinha</button>
                </div>
              </div>
          ))}
          </section>

          <section className="cadastro" id="cadastro">
            <div className="form-title">
              <h1>Cadastro de Clientes</h1>
            </div>
            <form className="form-cadastro">

              <label htmlFor="ide">ID *</label>
              <input type="text" name="ide" id="ide" placeholder="Insira seu identificador" required></input>

              <label htmlFor="nome">Nome Completo *</label>
              <input type="text" name="nome" id="nome" placeholder="Insira seu nome completo" required></input>

              <label htmlFor="telefone">Telefone</label>
              <input type="text" name="telefone" id="telefone" placeholder="(DDD) 00000-0000"></input>

              <label htmlFor="email">Email *</label>
              <input type="email" name="email" id="email" placeholder="Insira seu email" required></input>

              <label htmlFor="endereco">CEP *</label>
              <input type="text" name="endereco" id="endereco" placeholder="Insira o seu CEP" required></input>

              <button>Cadastrar</button>
            </form>
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