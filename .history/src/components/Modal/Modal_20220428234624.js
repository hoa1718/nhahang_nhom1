import './Modal.css'
import React from 'react';
function Modal({open,children}) {
    if (!open) return null;
  return (
   <div className='modal'>
       <div className='overlay'>{children}</div>
   </div>
  );
}

export default Modal;
