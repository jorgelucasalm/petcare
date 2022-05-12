import Button from "./style"

function SelectButton({ children, onClick }) {
  return (
    <Button onClick={onClick}>
      <span></span>
      {children}
    </Button>
  );
}

export default SelectButton;
