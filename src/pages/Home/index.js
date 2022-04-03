import Logo from "../../assets/img/logo-petcare.png"
import Dog from "../../assets/img/icon-home-dog.png"

import Agendar from "../../assets/img/icon-agendar.png"
import Config from "../../assets/img/icon-config.png"
import Exame from "../../assets/img/icon-exames.png"
import Faq from "../../assets/img/icon-faq.png"
import Requisicao from "../../assets/img/icon-requisicao.png"
import Vacina from "../../assets/img/icon-vacina.png"

import Navbar from '../../components/Navbar'
import Card from './components/Card';
import { Hub, Container } from './style'

function Home() {
  return (
    <Container>
      <Navbar />
      <img src={Dog} alt="" />
      <h1>Olá, <span className="bold">Marlena!</span></h1>
      <Hub>
        <Card tittle={"Agendar"} image={Agendar}></Card>
        <Card tittle={"Requisições"} image={Requisicao}></Card>
        <Card tittle={"Cartão de vacina"} image={Vacina}></Card>
        <Card tittle={"Exames"} image={Exame}></Card>
        <Card tittle={"Configuração"} image={Config}></Card>
        <Card tittle={"FAQ"} image={Faq}></Card>
      </Hub>

    </Container>
  );
}

export default Home;
