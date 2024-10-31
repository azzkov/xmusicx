import React from 'react';
import Slider from 'react-slick';
import './Home.css'; // Importando o arquivo CSS para estilos personalizados

const slogans = [
    {
        text: "Distribuindo música com amor!",
        image: "https://www.revistaadventista.com.br/wp-content/uploads/2015/10/Musicos-que-servem-p-artigo-RA-creditos-da-imagem-Fotolia.jpg",
    },
    {
        text: "Sua música, sua história!",
        image: "https://img.migalhas.com.br/gf_base/empresas/MIGA/imagens/7317C50CABAF42A070D99C6A7DD88616EC45_musica.jpg",
    },
    {
        text: "A melhor plataforma para artistas!",
        image: "https://media.licdn.com/dms/image/v2/D4D12AQFg8TO9obKAWA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684263397481?e=2147483647&v=beta&t=Zvq5X27ALFzhEoWImEUjzaxNL44g06NF2QREAzWghxc",
    },
];

const Home = ({ totalVisualizacoes }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-in-out',
    };

    return (
        <div className="container">
            <div className="box">
                <h1 className="title">Bem-vindo ao xmusix</h1>
                <p className="subtitle">Estamos trabalhando para melhor aproveitamento de nossa plataforma.</p>
            </div>
            <Slider {...settings}>
                {slogans.map((slogan, index) => (
                    <div key={index} className="carousel-item">
                        <div className="image-container">
                            <img src={slogan.image} alt={slogan.text} style={{ width: '100%', borderRadius: '8px' }} />
                            <p className="carousel-text">{slogan.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Home;