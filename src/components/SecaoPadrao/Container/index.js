import styles from './Container.module.css';

function Container({children, corDeFundo}){
    return(
        <section className={styles.container} style={{backgroundColor: {corDeFundo}}}>
            {children}
        </section>
    )
}

export default Container;