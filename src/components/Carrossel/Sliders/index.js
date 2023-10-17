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
            capa: 'https://github.com/JulianaMCamargo/yvy/blob/main/public/images/ap_161_01.png?raw=true',
            titulo: 'Apartamento 161',
            descricao: 'Designer de um apartamento',
            localidade: 'São Paulo',
            link: '#',
        },
        {
            id: uuidv4(),
            capa: 'https://github.com/JulianaMCamargo/yvy/blob/main/public/images/qt_oeiras_01.jpeg?raw=true',
            titulo: 'Quarto',
            descricao: 'Remodelação quarto de casal',
            localidade: 'Oeiras',
            link: '#',
        },
        {
            id: uuidv4(),
            capa: 'https://github.com/JulianaMCamargo/yvy/blob/main/public/images/ap_joab_01.jpeg?raw=true',
            titulo: 'Apartamento São Paulo',
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
                            capa={projeto.capa}
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