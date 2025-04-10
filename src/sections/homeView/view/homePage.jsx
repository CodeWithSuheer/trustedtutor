import React from 'react'
import HomeFaq from '../homeFaq'
import HomeAcademic from '../home-academic'
import HomeHero from '../home-hero'
import HomeProcess from '../home-process'
import HomeOfferExpert from '../home-offer-expert'
import LogoGrid from '../home-logoGrid'
import HomeProfessionals from '../home-professionals'
import HomePaymentOption from '../home-payment-option.jsx'
import HomeTestimonials from '../home-testimonials.jsx'
import HomeOnlineSupport from '../home-online-support.jsx'
import HomeTeam from '../home-team.jsx'

const HomeView = () => {
  return (
    <>
      <div className="w-full">
        <HomeHero />
        <HomeProcess />
        <HomeAcademic />
        <HomeTeam />
        <LogoGrid />
        <HomeOnlineSupport />
        <HomeOfferExpert />
        <HomeProfessionals />
        <HomePaymentOption />
        <HomeTestimonials />
        <HomeFaq />
      </div>
    </>
  )
}

export default HomeView
