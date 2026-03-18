import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function News() {

    const news = [
        {
            "date" : "Dec 4, 2024",
            "head" : "Bloomberg ·",
            "news" : "Fintech Firm Clear Street Joins LME as Floor-Dealing Broker"
        },
        {
            "date" : "Nov 14, 2024",
            "head" : "Financial Times · ",
            "news" : "Cear Street Launches Equity Research Group"
        },
        {
            "date" : "Oct 10, 2024",
            "head" : "Yahoo! Finance ·",
            "news" : "Clear Street Launches Rebrand of CenterPoint Securities and Provides Active Trading Division Update"
        },
        {
            "date" : "Oct 2, 2024",
            "head" : "Securities Finance Times · ",
            "news" : "Clear Street Acquires Fox River’s Algorithmic Trading Business"
        },
        {
            "date" : "Sept 25, 2024",
            "head" : "Reuters · ",
            "news" : "Clear Street Seeks to Join London Metal Exchange's Open-Outcry Trading Floor"
        }

    ]

  return (
    <div className='w-[900px] m-auto pt-[200px]'>
      <h1 className='text-4xl font-[500] pb-[80px]'>Clear Street in the News</h1>
      {
        news.map((data,index) => (
        <div  data-aos="fade-right" key={index} className='group relative z-10'> 
      <div className='w-[732px] m-auto bg-[#F1F4F9] rounded-[16px] my-[16px] p-[20px]'>
        <div className='flex gap-4' >
        <div className='text-[#7b7c8e] text-[14px] p-[10px] w-[150px]'>{data.date}</div>
        <div className='text-[23px]'><span className='text-[#7b7c8e]'>{data.head}</span>{data.news}</div>
        </div>
      </div>
        <div className='h-full absolute top-0 right-[64px] scale-x-0 group-hover:scale-x-100 transition-all bg-[#2e21de] text-[white] text-2xl rounded-r-[16px] flex justify-center items-center p-[20px]'>
        <MdArrowOutward />
        </div>
      </div>
        ))
      }
    </div>
  )
}
