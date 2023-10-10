import styles from './Carrossel.module.css';
import Sliders from '../Sliders';


function Carrossel() {

    return (
        <section className={styles.container}>
            <div className={styles.texto}>
                <h3>Nossos Projetos</h3>
            </div>

            <Sliders />
        </section>
    )


}


export default Carrossel;