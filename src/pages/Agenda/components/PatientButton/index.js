import Content from './style';

function PatientButton({ children, color }) {
  return (
    <Content color={color}>
        {children}
    </Content>
  );
}

export default PatientButton;
