import Button from "./style"

function PrimaryButton({children},/*{color}*/) {
    return (
      <Button /*color={color}*/> {children}</Button>
    );
  }
  
  export default PrimaryButton;
  