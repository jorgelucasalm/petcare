import { Button } from "./style";

function SecundaryButton({ children, onClick }) {
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}

export default SecundaryButton;