import React from 'react';
import Button from 'react-bootstrap/Button';
import './styleSheets.css'

function ModalNotification(props) {
  const { body, title, callBack } = props

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
              <Button className='button-submit-form' variant="primary" onClick={() => callBack()} >Confirmar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalNotification