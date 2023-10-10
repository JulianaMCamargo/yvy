import styles from './Imagem.module.css';

function Imagem({imagem}){
    return(
        <img className={styles.imagem} src={imagem}/>
    )
}

export default Imagem;