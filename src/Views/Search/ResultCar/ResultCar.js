import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardResult from '../../../Components/Card/CardResult/CardResult'
import SearchEdit from '../../../Components/Search/SearchEdit/SearchEdit'
import { getAdminCar } from '../../../Redux/features/adminCarSlice'
import Layout from '../../Layout'
import style from './ResultCar.module.css'

const ResultCar = () => {

    const dispatch = useDispatch()
    const { driver, date, time, passenger } = useParams()
    const { isLoading, dataCar } = useSelector(state => state.adminCarReducer)

    useEffect(() => {
        dispatch(getAdminCar())
    }, [dispatch])

    return (
        <Layout.Customer>
            <div className={style.blank}></div>
            <Container>
                <section id="SearchEdit-Search" className={'ms-lg-5 me-lg-5 mb-4 ' + style.search_box}>
                    <SearchEdit driver={driver} date={date} time={time} passenger={passenger} />
                </section>
                <section id="ResultCar-Result" className={'ms-lg-5 me-lg-5 mb-4 '}>
                    <Row className={'mt-4 '}>
                        {isLoading ?
                            <div className={'text-center mt-5'}><Spinner animation="border" /></div>
                            :
                            (dataCar ?
                                dataCar?.map((value, index) => {
                                    if (value.status === false) {
                                        if (passenger == 0) {
                                            return <CardResult key={index} data={value} />
                                        } else if (0 < passenger && passenger < 5) {
                                            if (value.category === "small") {
                                                return <CardResult key={index} data={value} />
                                            }
                                        } else if (4 < passenger && passenger < 7) {
                                            if (value.category === "medium") {
                                                return <CardResult key={index} data={value} />
                                            }
                                        } else if (6 < passenger && passenger < 10) {
                                            if (value.category === "large") {
                                                return <CardResult key={index} data={value} />
                                            }
                                        } else if (passenger > 9) {
                                            console.log("error")
                                        }
                                    }
                                })
                                : null
                            )
                        }
                    </Row>
                </section>
            </Container>
        </Layout.Customer>
    )
}

export default ResultCar