import Button from "./style"

function SelectButton({children}) {
    return (
      <Button>
        <span></span>
        {children}
      </Button>
    );
  }
  
  export default SelectButton;
  