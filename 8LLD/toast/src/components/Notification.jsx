import React from 'react'
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, 
  AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import './Notification.css';

const iconsStyle = { marginRight: "10px"};
const icons = {
  success: <AiOutlineCheckCircle style={iconsStyle}/>,
  info:    <AiOutlineInfoCircle  style={iconsStyle}/>,
  warning: <AiOutlineWarning     style={iconsStyle}/>,
  error:   <AiOutlineCloseCircle style={iconsStyle}/>
};

export default function Notification({ type="info", message, onClose=() => {}}) {
  return (
    <div className={`notification ${type}`}>
      {/* icons */}
      {icons[type]}
      {/* message */}
      {message}
      {/* close button  */}
      <AiOutlineClose color='white' className="closeBtn" onClick={() => onClose()}/>
    </div>
  )
}
