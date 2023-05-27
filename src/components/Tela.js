import styled from 'styled-components';

function Tela() {
    return (
      <TagTela>
          <h1>Bem-vindo à Amazing Trips, a sua agência de viagens! </h1>
          <p>Planeje suas férias perfeitas conosco!</p>
          <h2>Destinos populares</h2>
          <ul>
            <li>Paris, França</li>
            <li>Tóquio, Japão</li>
            <li>Rio de Janeiro, Brasil</li>
            <li>Sydney, Austrália</li>
          </ul>
        </TagTela>
    );
  }
  
  export default Tela;

  const TagTela = styled.div`
 text-align: center;
  margin: 50px auto;
  max-width: 600px;
h1 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}
`;