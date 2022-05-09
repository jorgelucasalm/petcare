import { Button } from './style';

function SecundaryButton({ children, onClick, color }) {
  return (
    <Button color={color} onClick={onClick}>{children}</Button>
  )
}

export default SecundaryButton;
