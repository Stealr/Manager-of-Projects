import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import "/src/styles/modal.scss";

const Modal = forwardRef(function Modal({ title, onClose, onEdit }, ref) {
  return createPortal(
    <dialog ref={ref} className="modal">
      <h1>Проект {title} успешно добавлен!</h1>
      <div className="control-btns">
        <button className="first-btn" onClick={onClose}>Close</button>
        <button onClick={onEdit}>Go to edit</button>
      </div>
    </dialog>,
    document.getElementById('modal-root') || document.body
  );
});

export default Modal;