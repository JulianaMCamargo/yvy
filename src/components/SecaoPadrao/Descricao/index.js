import styles from './Descricao.module.css';

function Descricao({children}){
    return(
        <p className={styles.descricao}>{children}</p>
    )
}

export default Descricao;