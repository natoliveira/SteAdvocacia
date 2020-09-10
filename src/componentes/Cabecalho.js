import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = props => {
    return (
        <div>
            <div className='jumbotron text-center'>
                        <p>Soluções jurídicas eficazes!</p> 
                        <form>
                        <div className='input-group'>
                            <div className='input-group-btn'>
                            </div>
                        </div>
                        </form>
                    </div> 
            <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
        <div className='navbar-header'>
            <button type='button' classname='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>                        
            </button>
        <Link classname=''><img className='bar'src="logo.jpeg"></img></Link>
        <h5 className="slogan">Soluções jurídicas!</h5>
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
            <li><Link to="/">PROFISSIONAIS</Link></li>
            <li><Link to='/servicos'>ÁREAS DE ATUAÇÃO</Link></li>
            <li><Link to='/profissionais'>INSTITUCIONAL</Link></li>
            <li><Link to='/contatos'>CONTATOS</Link></li>
            {/*<li><Link to='/contato'>MAIS INFORMAÇÕES</Link></li>*/}
            </ul>
        </div>
        </div>
    </nav>
    </div>


    )
}

export default Cabecalho;