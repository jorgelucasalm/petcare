import Button from "./style"
import Clock from "../../assets/img/clock.svg"
import Check from "../../assets/img/check.svg"
import Retorno from "../../assets/img/retorno.svg"
import Cancel from "../../assets/img/cancel.svg"

function SelectButton({children}) {
    return (
      <Button color={"cancel"}>
        <span>
          <img src={Cancel} />
        </span>
        <div>
          {children}
          <text>12/02</text>
        </div>
        

      </Button>
    );
  }
  
  export default SelectButton;
  