import Button from "./style"

function ConfigButton({children, color}) {
    return (
      <Button color={color}>{children}</Button>
    );
  }
  
  export default ConfigButton;