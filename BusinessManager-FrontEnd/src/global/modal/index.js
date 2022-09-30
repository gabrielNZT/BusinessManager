import React from 'react';
import Button from 'react-bootstrap/Button';
import './styleSheets.css'

function ModalNotification(props) {
  const {setModalOpen, body, title} = props
  return (
    <>
      <div className="modalBackground" />
      <div className='modal-todo'>
        <div className="modalContainer">
          <div className="title">
            <h5><b>{title}</b></h5>
          </div>
          <div className="body">
            <p>{body}</p>
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