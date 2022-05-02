import PrimaryButton from "../../components/PrimaryButton"
import SecondaryButton from "../../components/SecundaryButton"
import { Navbar } from "../Login/style";
import Footer from "../../components/Footer";
import { Container} from "./style";

function Categories(){
    return(
        <>  
            <Navbar></Navbar>
            <Container>
                <header>
                    <h1>Confirmação</h1>
                    <t>Revise seus dados com atenção</t>
                </header>
                <div>
                    <item>
                        <p>Nº de identificação:</p>
                        <h2>123.456-00</h2>  
                    </item>       
                    <item>
                        <p>Requisição:</p>
                        <h2>CONSULTA</h2>  
                    </item>   
                    <item>
                        <p>Data selecionada:</p>
                        <h2>12/01 - MANHÃ</h2>  
                    </item>  
                    <item>
                        <p>Tratamento?</p>
                        <h2>NÃO</h2>  
                    </item>  
                    <item>
                        <p>Médico desejado:</p>
                        <h2>DRA. CAMILA GONÇALVEZ</h2>  
                    </item>  
                    <item>
                        <p>Autoriza realocação de horários?</p>
                        <h2>NÃO</h2>  
                    </item>       
                    <item>
                        <p>Descrição:</p>
                        <h2>LOREM IPSUM DOLOR</h2>  
                    </item>
                </div>                
                <PrimaryButton>Confirmar</PrimaryButton>
                <SecondaryButton>Voltar</SecondaryButton>      
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Categories;