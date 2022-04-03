import { Container } from "./style"

import User from "../../assets/img/icon-user.png"

function Navbar() {
  return (
    <Container>
      <nav>
        <img src={User} alt="" />
        <span>Usuário</span>
      </nav>
    </Container>
  );
}

export default Navbar;
