import React from 'react';
import Button from 'react-bootstrap/Button';
import './styleSheets.css'

function ModalNotification({ setModalOpen }) {
  return (
    <>
      <div className="modalBackground" />
      <div className='modal-todo'>
        <div className="modalContainer">
          <div className="title">
            <h5>Verifique seu email</h5>
          </div>
          <div className="body">
            <p style={{ marginLeft: '4%' }}>Caso o email informado esteja cadastrado no sistema, você
              receberá uma mensagem com a nova senha temporária</p>
          </div>
          <div className="footer">
            <Button className='button-submit-form' variant="primary" onClick={() => setModalOpen(false)} >Confirmar</Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModalNotification