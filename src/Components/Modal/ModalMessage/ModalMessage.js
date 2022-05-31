import React from 'react'
import { Modal } from 'react-bootstrap'
import style from './ModalMessage.module.css'

const ModalMessage = (props) => {
    return (
        <Modal {...props} size="md">
            <div style={{ backgroundColor: props.bg }} className={'text-center pt-3 pb-3 ' + style.modal}>{props.text}</div>
        </Modal>
    )
}

export default ModalMessage