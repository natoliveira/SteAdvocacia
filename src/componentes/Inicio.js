import React from 'react'

const Inicio = props => {
        return (
                    <div>           
                <div id='about' className='container-fluid'>
                    <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Sobre a página da Empresa</h2><br />
                        <h4>Joelma Beatriz Advocacia é um escritório virtual com foco em soluções jurídicas.</h4><br />
                        <p>Nossa MISSÃO é prestar serviços jurídicos a nossos clientes com base na ética, transparência, segurança, eficiência e agilidade para melhor defesa de seus interesses e construção de uma relação de confiança. Priorizamos a continua atualização e o constante aprimoramento da nossa equipe e de nossos sistemas.</p>
                        <br /><button className='btn btn-default btn-lg'>Get in Touch</button>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-signal logo'></span>
                    </div>
                    </div>
                </div>
                <div className='container-fluid bg-grey'>
            <div className='row'>
            <div className='col-sm-4'>
                <span className='glyphicon glyphicon-globe logo {/*'></span>
            </div>
            <div className='col-sm-8'>
                <h2>Our Values</h2><br />
                <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
         </div>
        </div>
       </div>

        )
    }

export default Inicio;