import { Component } from 'react';
import { Overlay,ModalWindow } from '../Modal/Modal.styled';




export class Modal extends Component { 


  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

    handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

    
     handleBackdropClick = event => {
       if (event.target === event.currentTarget) {
      this.props.onClose();
       }  
    }


    render() { 


        return (

            <Overlay onClick={this.handleBackdropClick}>
                <ModalWindow>
                    <img src={this.props.largeImage} alt="" />
                </ModalWindow>
            </Overlay>
           );

    }

}



