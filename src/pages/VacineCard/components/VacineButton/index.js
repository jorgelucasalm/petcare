import Button from "./style"

function VacineButton({children, color}) {
    return (
      <Button color={color}>{children}</Button>
    );
  }
  
  export default VacineButton;
  