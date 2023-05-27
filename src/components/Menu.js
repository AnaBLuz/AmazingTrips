import styled from 'styled-components';

function Menu() {
    return (
      <TagMenu>
        <div>
        <h3>Selecione o seu destino</h3>
        </div>
        <div>
        <h3>Veja as passagens com preços e datas</h3>
        <ul>
          <li>
            <a href="#flights">Passagens</a> - Encontre voos com os melhores preços e datas
          </li>
          <li>
            <a href="#offers">Ofertas</a> - Confira nossas ofertas especiais de voos
          </li>
        </ul>
        </div>
        <div>
       <h3>Veja as opções de hospedagem disponíveis</h3>
        <ul>
          <li>
            <a href="#hotels">Hotéis</a> - Encontre as melhores opções de hospedagem
          </li>
          <li>
            <a href="#resorts">Resorts</a> - Descubra resorts de luxo para relaxar
          </li>
        </ul>
        </div>
      
        </TagMenu>
    );
  }
  
  export default Menu;

  const TagMenu = styled.div` 
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  display:flex;
  h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

h3 {
  font-size: 20px;
  color: #666;
  margin: 20px 0 10px;
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

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: underline;
} `