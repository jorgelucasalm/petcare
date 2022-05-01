import Button from "./style"

function PrimaryButton({children, color},/*{color}*/) {
    return (
      <Button color={color} children={children}></Button>
    );
  }
  
  export default PrimaryButton;
  