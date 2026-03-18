import React from 'react'
import Card from './Card'

export default function Marquee() {
  return (
    <>
    <div className='bg-[#2e21de]'>
    <marquee className='text-[white] text-5xl pt-4 pb-6' behavior="scroll" direction="left">$20bn &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 94%YoY  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1.0bn &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~$60bn &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +450 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +600 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~450mm</marquee>
    <div className='h-[1px] bg-[#4655ff]'></div>
    </div>
    <div className='w-[1100px] m-auto pt-8'>
    <Card />
    </div>
    </>
  )
}
