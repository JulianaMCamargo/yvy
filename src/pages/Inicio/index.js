import Banner from "components/Banner";
import Carrossel from "components/Carrossel/Carrossel";
import Chamada from "components/Chamada";
import ComoFunciona from "components/ComoFunciona";
import Contato from "components/Contato/Contato";
import SobreNos from "components/SobreNos";


function Inicio() {
    return (
        <>
            <Banner />
            <SobreNos />
            <Carrossel />
            <Chamada />
            <ComoFunciona />
            <Contato />
        </>
    )
}

export default Inicio;