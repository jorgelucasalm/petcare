import ConfigButton from "./components/ConfigButton";
import Footer from "../../components/Footer";
import { Container} from "./style";
import Perfil from "../../assets/img/icon-home-dog.png"

function Configurar(){
    return(
        <>  
            <Container>
                <header>
                    <h1>Configurações</h1>
                    <img src={Perfil}/>
                    <div>
                        <p>Marley</p>
                        <div>
                            <p>(Maria do Bairro)</p>
                        </div>
                    </div>
                    
                </header>
                <div>
                    <ConfigButton>Paciente</ConfigButton>
                    <ConfigButton>Responsável</ConfigButton>
                    <ConfigButton>Senhas</ConfigButton>
                    <ConfigButton>FAQ</ConfigButton>
                    <ConfigButton>Lorem Ipsum</ConfigButton>
                    <ConfigButton color = 'alert'>Log off</ConfigButton>
                </div>                
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Configurar;