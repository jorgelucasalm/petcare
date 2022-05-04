import Button from "./style"

function SelectButton({children, color, bg}) {
    return (
      <Button color={color} bg={bg}>{children}</Button>
    );
  }
  
  export default SelectButton;
  