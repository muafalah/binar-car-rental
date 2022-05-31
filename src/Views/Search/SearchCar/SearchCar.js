import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../../../Components/Homepage/Hero/Hero'
import SearchActive from '../../../Components/Search/SearchActive/SearchActive'
import Layout from '../../Layout'
import style from './SearchCar.module.css'

const SearchCar = () => {
    return (
        <Layout.Customer>
            <section id="Hero-Search" className={'pt-3 mb-4 ' + style.hero}>
                <Hero />
            </section>
            <Container>
                <section id="SearchCar-Search" className={'ms-lg-5 me-lg-5 mb-4 ' + style.search_box}>
                    <SearchActive />
                </section>
            </Container>
        </Layout.Customer>
    )
}

export default SearchCar