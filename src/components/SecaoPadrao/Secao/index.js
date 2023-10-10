import styles from './Secao.module.css';

function Secao({children, corDeFundo}){
    return(
        <section className={styles.secao} style={{backgroundColor: {corDeFundo}}}>
            {children}
        </section>
    )
}

export default Secao;