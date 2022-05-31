import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import style from './ModalDelete.module.css'
import ImgBeepBeep from '../../../Assets/image/Modal/img-beepbeep.png'
import { useDispatch } from 'react-redux'
import { delAdminCarId } from '../../../Redux/features/adminCarSlice'

const ModalDelete = (props) => {

    const dispatch = useDispatch()

    const handleDelete = async () => {
        await dispatch(delAdminCarId({ id: props.id }))
    }

    return (
        <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body className={'text-center d-grid gap-3'}>
                <div><img src={ImgBeepBeep} alt="Image Delete" /></div>
                <h5>Menghapus Data Mobil</h5>
                <div>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</div>
                <div className={'d-flex justify-content-center gap-3'}>
                    <Button variant="primary" onClick={handleDelete}>Ya</Button>
                    <Button variant="outline-primary" onClick={props.onHide}>Tidak</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalDelete