import React from 'react'

export default function VidCard2() {
  return (
    <>
    <div className='bg-[#eaf2ff] '>
    <div data-aos="zoom-in-left" className='w-[909px] h-[503px] m-auto bg-[#fcfafa] rounded-[22px]'>
        <div className='flex'>
            <div className='w-[50%] m-4'>
                <div className='bg-[#2e21de] w-[54px] h-[54px] rounded-[50%] p-2 flex justify-center items-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0b1d9552=""><path d="M9.60001 22C9.45001 22 9.3 21.97 9.16001 21.9C8.75001 21.7 8.53 21.26 8.61 20.82L9.66001 15.2L5.62001 13.58C5.32001 13.46 5.10001 13.2 5.02001 12.89C4.94001 12.58 5.02001 12.24 5.24001 12L13.65 2.33999C13.94 1.99999 14.43 1.89999 14.84 2.09999C15.25 2.29999 15.47 2.73999 15.39 3.17999L14.34 8.79999L18.38 10.42C18.68 10.54 18.9 10.8 18.98 11.11C19.06 11.42 18.98 11.76 18.76 12L10.36 21.64C10.17 21.86 9.89001 21.98 9.61001 21.98L9.60001 22ZM7.68001 12.24L11.17 13.64C11.61 13.82 11.87 14.28 11.78 14.75L11.25 17.57L16.32 11.75L12.83 10.35C12.39 10.17 12.13 9.70999 12.22 9.23999L12.75 6.41999L7.68001 12.24Z" fill="#ffff"></path></svg>
                </div>
                <div className='pt-[140px]'>
                <h1 className='text-4xl text-[#2e21de] font-[500]'>Designed for the <br /> Future</h1>
                <div className='flex gap-6 pt-[40px] font-[500]'>
            <div className='text-[#2e21de]'>Cloud-native, API-<br /> based</div>
            <div className='text-[#2e21de]'>Horizontally  
            <br /> scalable <br /> technology</div>
            <div className='text-[#2e21de]'>Cost-effective <br /> maintenance</div>
           </div>
            </div>
            </div>
            
            <div className='w-[50%] h-[503px]'>
                <video className='pt-[65px]' height={'503px'} src="./images/vidcard2.mp4" autoPlay muted loop></video>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
