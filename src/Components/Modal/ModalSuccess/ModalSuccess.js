import React from 'react'
import { Modal } from 'react-bootstrap'
import Success from '../../../Assets/image/Auth/animation-success.gif'
import style from './ModalSuccess.module.css'

const ModalSuccess = (props) => {
    return (
        <Modal {...props} className={style.bg} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
            <div className={'d-flex justify-content-center pt-4 pb-4'}>
                <img src={Success} width="200" height="200" />
            </div>
        </Modal>
    )
}

export default ModalSuccess