import Banner from "components/Banner";
import Descricao from "components/SecaoPadrao/Descricao";
import Imagem from "components/SecaoPadrao/Imagem";
import Secao from "components/SecaoPadrao/Secao";
import Titulo from "components/SecaoPadrao/Titulo";
import sobreNos from 'components/SecaoPadrao/Imagem/sobreNos2.jpeg';
import Carrossel from "components/Carrossel/Carrossel";


function Inicio(){
    return(
        <>
            <Banner />
            
            <Secao corDeFundo='var(--branco)'>
                <Titulo>Sobre Nós</Titulo>
                <Imagem imagem={sobreNos}/>
                <Descricao>Use esta página para compartilhar a missão, 
                    visão ou história de sua empresa. 
                    Diferencie-se da concorrência com uma 
                    forte personalidade de marca e coloque 
                    seus clientes em primeiro lugar.
                </Descricao>
            </Secao>
            
            <Carrossel />
        </>
    )
}

export default Inicio;