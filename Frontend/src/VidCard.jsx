import React from 'react'

export default function VidCard() {
  return (
    <>
    <div className='bg-[#eaf2ff] py-[100px]'>
    <div className='w-[1035px] m-auto'>
        <div data-aos="zoom-in-right" className='w-[1030px] h-[503px] overflow-hidden rounded-[18px] relative'>
            <video className='w-full h-[503px]' src="./images/vidcard1.mp4" muted autoPlay loop></video>
            <div className='absolute top-3 left-[80px] h-[54px] w-[54px] p-2 rounded-[50%] bg-[#2e21de]'>
            <svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 24 24"
  style={{ enableBackground: "new 0 0 24 24" }}
  xmlSpace="preserve"
  data-v-0b1d9552=""
>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{ __html: " .st0{fill:#ffff;} " }}
  />
  <g>
    <path
      className="st0"
      d="M17,3H7C5.35,3,4,4.35,4,6v11c0,1.65,1.35,3,3,3h10c1.65,0,3-1.35,3-3V6C20,4.35,18.65,3,17,3z M7,5h10
		c0.55,0,1,0.45,1,1v2H6V6C6,5.45,6.45,5,7,5z M18,10v3H6v-3H18z M17,18H7c-0.55,0-1-0.45-1-1v-2h12v2C18,17.55,17.55,18,17,18z"
    />
  </g>
</svg>

            </div>
            <div className='absolute bottom-[100px] left-[100px]'>
           <h1 className='text-4xl text-[#2e21de] font-[500]'>Built for Multi- <br />Asset Clearing</h1> 
           <div className='flex gap-6 pt-[40px] font-[500]'>
            <div className='text-[#2e21de]'>One platform for <br /> all asset classes</div>
            <div className='text-[#2e21de]'>Data available in <br /> real-time</div>
            <div className='text-[#2e21de]'>Information held <br /> in a single <br /> system</div>
           </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
