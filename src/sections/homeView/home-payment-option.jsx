import React from 'react'
import apple from '../../assets/images/payment/apple.png'
import master from '../../assets/images/payment/master.png'
import paypal from '../../assets/images/payment/paypal1.png'

const HomePaymentOption = () => {

  return (
    <>
      <section className='w-full'>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-0 pb-16">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-dark text-center">
            A Variety Of <span className='text-primary-one'>Flexible Payment </span> Options To Meet
            Your Needs
          </h2>

          <div className="flex w-full justify-center flex-col sm:flex-row items-center flex-wrap gap-5 mt-10">
            <img className="w-[5rem] sm:w-[6.5rem] mx-6 sm:mx-10" src={master} alt="payment method" />
            <img className="w-[4rem] sm:w-[4.5rem] mx-6 sm:mx-10" src={paypal} alt="payment method" />
            <img className="w-[5rem] sm:w-[6.5rem] mx-6 sm:mx-10" src={apple} alt="payment method" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePaymentOption
