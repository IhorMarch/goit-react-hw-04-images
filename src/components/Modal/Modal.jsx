
import { Overlay,ModalWindow } from '../Modal/Modal.styled';

import { useEffect, } from 'react';

// const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImage, onClose }) => { 


  useEffect(() => { 

    const handleKeyDown = event => {
    if (event.code === 'Escape') {
     onClose();
    }
  };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    }


  }, [onClose]);



  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

    return (
            <Overlay onClick={handleBackdropClick}>
                <ModalWindow>
                    <img src={largeImage} alt="" />
                </ModalWindow>
            </Overlay>)
           
           

}
