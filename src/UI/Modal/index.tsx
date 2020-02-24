import React from 'react';
import Modal from 'react-modal';
import './index.css';

Modal.setAppElement('#root');

type UIModalProps = {
    isOpen: boolean,
    onRequestClose?: Function
}

const UIModal: React.FC<UIModalProps> = (props: any) => {
    return <Modal portalClassName="uimodal-portal" overlayClassName="uimodal-overlay" className="uimodal-content" shouldCloseOnOverlayClick={true} {...props}>
        {props.children}
    </Modal>
}

export default UIModal;