import Button from "./style"
import Clock from "../../assets/img/clock.svg"
import Check from "../../assets/img/check.svg"
import Retorno from "../../assets/img/retorno.svg"
import Cancel from "../../assets/img/cancel.svg"

function SelectButton({children, color, bg}) {
    return (
      <Button color={color} bg={bg}>{children}</Button>
    );
  }
  
  export default SelectButton;
  