import React from 'react'

export default function Contact() {
  return (
    <div className='relative'>
      <img src="./images/get-in-touch-light.jpg" alt="" />
      <div className='bg-[#ffff] p-[30px] flex-row gap-6 absolute top-[35%] left-[35%] justify-center items-center py-[60px] px-[40px] rounded-[36px]'>
        <h1 className='py-8 text-[26px]'>Get in touch with our team</h1>
        <button className='p-2 px-[120px] border border-[blue] rounded-[20px] text-[white] font-[600] bg-[#2e21de] hover:bg-[blue]'>contact us</button>
      </div>
    </div>
  )
}
