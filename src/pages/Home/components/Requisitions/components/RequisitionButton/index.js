import Button from "./style"

function SelectButton({ children, color, onClick }) {
  return (
    <Button color={color} onClick={onClick}>{children}</Button>
  );
}

export default SelectButton;
