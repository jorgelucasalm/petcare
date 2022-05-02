import RequisitonButton from "../../components/RequisitionButton";
import { Navbar } from "../Login/style";
import Footer from "../../components/Footer";
import { Container} from "./style";

function Requisitions(){
    return(
        <>  
            <Navbar></Navbar>
            <Container>
                <header>
                    <h1>Requisições</h1>
                    <p>Selecione uma das opções para mais detalhes</p>
                </header>
                <div>
                    <RequisitonButton>Categoria</RequisitonButton>
                    <RequisitonButton>Categoria</RequisitonButton>
                    <RequisitonButton>Categoria</RequisitonButton>
                    <RequisitonButton>Categoria</RequisitonButton>
                </div>                
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Requisitions;