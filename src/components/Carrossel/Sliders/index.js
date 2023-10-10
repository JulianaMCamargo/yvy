import styles from './Sliders.module.css';
import Slider from 'react-slick';
import Card from '../Card';
import {v4 as uuidv4} from 'uuid';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Sliders() {

    const projetos = [
        {
            id: uuidv4(),
            capa: {ap},
            titulo: 'Apartamento 161',
            descricao: 'Designer de um apartamento',
            localidade: 'São Paulo',
            link: '#',
        }

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
    };

    return (

        <div className={styles.slider}>
            <Slider {...settings}>
                {projetos.map((projeto) => (
                    <div key={projeto.id} className={styles.card}>
                        <Card
                            id={projeto.id}
                            capa={projeto.linkImagem}
                            titulo={projeto.titulo}
                            descricao={projeto.descricao}
                            localidade={projeto.localidade}
                            link={projeto.linkCard}
                        />
                    </div>
                ))}
            </Slider>

        </div>
    )

}

export default Sliders; 