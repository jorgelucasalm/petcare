import { DropdownContainer } from './style';

function Dropdown({ children, onChange }) {
  return <DropdownContainer onChange={onChange}> {children} </DropdownContainer>;
}

export default Dropdown;
