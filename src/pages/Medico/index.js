import { useContext, useState } from 'react'
import Agendar from "../../assets/img/icon-agendar.png"
import Config from "../../assets/img/icon-config.png"
import Historico from "../../assets/img/historico.png"
import Faq from "../../assets/img/icon-faq.png"
import Requisicao from "../../assets/img/icon-requisicao.png"
import Vacina from "../../assets/img/icon-vacina.png"
import Card from './components/Card'
import Footer from './components/Footer'
import TopSection from "./components/Top-section"
import { Container, Hub } from './style'
import { ThemeContext } from 'styled-components'

function Medico() {
  const { images } = useContext(ThemeContext)
  return (
    <Container>
      <TopSection image={images.pet} />
      <Hub>
        <Card tittle={"Ver agenda"} image={Agendar}></Card>
        <Card tittle={"Históricos"} image={Historico}></Card>
        <Card tittle={"Configuração"} image={Config}></Card>
        <Card tittle={"Faq"} image={Faq}></Card>
      </Hub>

      <Footer></Footer>
    </Container>
  );
}

export default Medico;
