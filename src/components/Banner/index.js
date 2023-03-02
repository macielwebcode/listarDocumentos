import './Banner.css';

function Banner() {
    return (
        <header className='banner'>
            {/* <img src="/img/banner.png" alt="imagem-banner-topo"></img> */}
            <h3>Olá, Bem vinda(o).</h3>
            <p>
                Você pode criar uma solicitação de documento 
                e ela será listada de acordo com o tipo de projeto.
            </p>
        </header>
        
    )
}
  
export default Banner;