import Button from "./style"

function PrimaryButton({ children, onClick, color }) {
  return (
    <Button color={color} onClick={onClick}> {children}</ Button>
  );
}

export default PrimaryButton;
