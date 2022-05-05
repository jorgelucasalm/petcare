import SelectButton from "../../components/SelectButton";
import { Navbar } from "../Login/style";
import Footer from "../../components/Footer";
import { Container} from "./style";

function Categories(){
    return(
        <>  
            <Navbar></Navbar>
            <Container>
                <header>
                    <h1>Categorias</h1>
                    <p>Selecione uma das opções</p>
                </header>
                <div>
                    <SelectButton>Consulta de Rotina</SelectButton>
                    <SelectButton>Retorno</SelectButton>
                    <SelectButton>Vacinação</SelectButton>
                    <SelectButton>Exames</SelectButton>
                    <SelectButton>Lorem Ipsum</SelectButton>
                    <SelectButton>Lorem Ipsum</SelectButton>
                </div>                
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Categories;