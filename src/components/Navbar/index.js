import { Container } from "./style"

import User from "../../assets/img/icon-user-dog.png"
import { useContext } from "react";
import { ThemeContext } from "styled-components";

function Navbar({ changeTheme }) {
  const { images } = useContext(ThemeContext)

  return (
    <Container>
      <nav>
        <img src={images.user} alt="icon-user" onClick={changeTheme} />
        <span>Usuário</span>
      </nav>
    </Container>
  );
}

export default Navbar;
