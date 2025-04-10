import React from 'react'

const HomePaymentOption = () => {
  const Institutions = [
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_4.png?v=1713358377",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_5.png?v=1713358380",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_8.png?v=1713358378",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_9.png?v=1713358378",
    },
  ]

  return (
    <>
      <section className='w-full'>
        <div className="max-w-7xl mx-auto pt-8 pb-16">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-dark text-center">
            A Variety Of <span className='text-primary-one'>Flexible Payment </span> Options To Meet
            Your Needs
          </h2>

          <div className="flex w-full justify-center items-center flex-wrap gap-5 mt-10">
            {Institutions?.map((data, index) => (
              <div key={index}>
                <img className="w-[6.5rem] mx-6 sm:mx-10" src={data?.img} alt="payment method" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePaymentOption
