import { useState } from 'react';
import Modal from './components/Modal';

function Paciente() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = (e) => {
    if (e.classList.contains('modal')) {
      setShowModal(false);
    }
  }

  return (
    <>
      <h1 onClick={e => { setShowModal(true) }}>Open Modal</h1>
      <Modal showModal={showModal} closeModal={closeModal} />
    </>
  );
}
export default Paciente;
