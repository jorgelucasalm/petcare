import Button from "./style"
import Clock from "../../assets/img/clock.svg"
import Check from "../../assets/img/check.svg"
import Retorno from "../../assets/img/retorno.svg"
import Cancel from "../../assets/img/cancel.svg"

function SelectButton({children, color}) {
    return (
      <Button color={color}>
        {children}
        

      </Button>
    );
  }
  
  export default SelectButton;
  