import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/mundo1.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/martin.daniel.568/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/TinchoBus/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/martindaniel09/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src="/img/estrella.png" alt='estrella'  />
        <strong>Pagina desarrollada por Martin Bustos, con la colaboracion de Tupac's Enterprise</strong>
    </footer>
}

export default Footer