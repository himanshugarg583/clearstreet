import React from 'react';
import { RxCross1 } from "react-icons/rx";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Card() {

  


  const imageSources = [
    {
      heading: "Institutional",
      image: 'card1.jpg',
      div: 'Institutional Providing emerging to established firms',
      span: 'the institutional services they need to efficiently manage and grow their businesses.',
    },
    {
      heading: "Professional Clearing",
      image: 'card2.jpg',
      div: 'Offering market-making and futures clearing participants',
      span: 'the institutional services they need to efficiently manage and grow their businesses.',
    },
    {
      heading: "Active Trader",
      image: 'card3.jpg',
      div: 'Helping active traders and professional trading groups',
      span: 'the institutional services they need to efficiently manage and grow their businesses.',
    },
  ];

  return (
    <>
      <div className="flex gap-2">
        {imageSources.map((data, index) => (
          <div data-aos="zoom-in-up" className='group w-[395px]' key={index}>
            <h1 className="text-white pb-3 text-xl font-[500]">{data.heading}</h1>
            <div className='w-[370px] h-[380px] overflow-hidden rounded-[18px] relative'>
            <img className='w-full h-full scale-1 transition duration-[500ms] group-hover:scale-[1.2]' src={`./images/${data.image}`} alt="" />
            <div className='h-[45px] w-[45px] rounded-[50%] absolute bottom-3 bg-[#2e21de] right-2 text-[white] scale-1 transition duration-500 group-hover:rotate-[180deg] group-hover:scale-[1.1] group-hover:bg-[blue]'><div className='w-[45px] h-[45px] flex justify-center items-center '><RxCross1 fontWeight={'600'} fontSize={'20px'} /></div></div>
            </div>
            <div className='pt-2 text-[white] text-[16px]'>{data.div} <span className='text-[#9bbcfd]'>{data.span}</span></div>
          </div>
        ))}
      </div>
    </>
  );
}
