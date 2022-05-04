import Button from "./style"

function SelectButton({children, color}) {
    return (
      <Button color={color}>{children}</Button>
    );
  }
  
  export default SelectButton;
  