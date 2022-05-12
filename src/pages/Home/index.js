import { useContext, useState } from 'react'
import Agendar from "../../assets/img/icon-agendar.png"
import Config from "../../assets/img/icon-config.png"
import Exame from "../../assets/img/icon-exames.png"
import Faq from "../../assets/img/icon-faq.png"
import Requisicao from "../../assets/img/icon-requisicao.png"
import Vacina from "../../assets/img/icon-vacina.png"
import Card from './components/Card'
import Footer from './components/Footer'
import TopSection from "./components/Top-section"
import { Container, Hub } from './style'
import { ThemeContext } from 'styled-components'
import Categories from './components/Categories'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const { images } = useContext(ThemeContext)

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <Container>
      <TopSection image={images.pet} />
      <Hub>
        <Card tittle={"Agendar"} image={Agendar} onClick={openModal}></Card>
        <Card tittle={"Requisições"} image={Requisicao}></Card>
        <Card tittle={"Cartão de vacina"} image={Vacina}></Card>
        <Card tittle={"Exames"} image={Exame}></Card>
        <Card tittle={"Configuração"} image={Config}></Card>
        <Card tittle={"FAQ"} image={Faq}></Card>
      </Hub>
      <Footer></Footer>
      <Categories showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}

export default Home;
