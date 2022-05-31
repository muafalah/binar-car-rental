import React from 'react'
import CTABanner from '../../Components/Homepage/CTABanner/CTABanner'
import FAQ from '../../Components/Homepage/FAQ/FAQ'
import Hero from '../../Components/Homepage/Hero/Hero'
import OurService from '../../Components/Homepage/OurService/OurService'
import Testimonial from '../../Components/Homepage/Testimonial/Testimonial'
import WhyUs from '../../Components/Homepage/WhyUs/WhyUs'
import Layout from '../Layout'
import style from './Homepage.module.css'

const Homepage = () => {

    const space = "mt-lg-4 mb-lg-4 mt-2 mb-2"

    return (
        <Layout.Default >
            <div className={'d-grid gap-5'}>
                <section id="Hero-Homepage" className={'pt-3 mb-4 ' + style.hero}>
                    <Hero type="homepage" />
                </section>
                <section id="OurService-Homepage" className={space}>
                    <OurService />
                </section>
                <section id="WhyUs-Homepage" className={space}>
                    <WhyUs />
                </section>
                <section id="Testimonial-Homepage" className={space}>
                    <Testimonial />
                </section>
                <section id="CTABanner-Homepage" className={space}>
                    <CTABanner />
                </section>
                <section id="FAQ-Homepage" className={space}>
                    <FAQ />
                </section>
            </div>
        </Layout.Default>
    )
}

export default Homepage