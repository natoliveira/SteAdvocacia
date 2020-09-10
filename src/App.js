import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Site from './Site';
import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';
import Contatos from './componentes/Contatos';
import Profissionais from './componentes/Profissionais';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Cabecalho />
        <br></br>
        <br></br>
        <br></br>
        <Route path='/' exact component={Inicio} />
        <Route path='/servicos'component={Servicos}/>
        <Route path='/profissionais'component={Profissionais}/>
        <Route path='/contatos'component={Contatos}/>
        <Rodape />
        </div>
        </BrowserRouter>
    );
  }
}
 

export default App;
