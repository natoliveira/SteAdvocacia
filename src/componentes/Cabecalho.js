import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = props => {
    return (
            <div>
                <div className='jumbotron text-center'>
                        <h1>Joelma Beatriz</h1> 
                        <p>Soluções jurídicas eficazes!</p> 
                        <form>
                        <div className='input-group'>
                            <input type='email' classname='form-control' size='50' placeholder='Email Address' required />
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
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
            <li><Link to="/">INSTITUCIONAL</Link></li>
            <li><Link to='/servicos'>ÁREAS DE ATUAÇÃO</Link></li>
            <li><Link to='/portfolio'>CONTEÚDO</Link></li>
            <li><Link to='/precos'>CONTATO</Link></li>
            <li><Link to='/contato'>MAIS INFORMAÇÕES</Link></li>
            </ul>
        </div>
        </div>
    </nav>
    </div>


    )
}

export default Cabecalho;