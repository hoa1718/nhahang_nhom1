import './Modal.css'
import React,{useState} from 'react';
function Modal(open) {
  return (
   <div className='Modal'>
       <div className='overlay'></div>
   </div>
  );
}

export default Modal;
