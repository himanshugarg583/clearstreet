import React from 'react'
import Nav from './Nav'
import Marquee from './Marquee'
import Card from './Card'
import Showvid from './Showvid'
import ScrollTracker from './Scroll'
import Showvid2 from './Showvid2'
import Showvid3 from './Showvid3'
import StockMarketChart from './StockMarketChart'
import AnimatedText from './Animated'
import ClearStreet from './ClearStreet'
import TextHighlight from './TextHighlight'
import VidCard from './VidCard'
import VidCard2 from './VidCard2'
import SVG from './SVG'
import MainVid from './MainVid'
import Canva from './Canva'
import For from './For'
import News from './News'
import Contact from './Contact'
import Footer from './Footer'


export default function App() {

  

  return (
   <>
   <div className='bg-[#2e21de]'>
   <Nav />
   <Marquee />
   <ScrollTracker />
   <Showvid />
   <Showvid2 />
   <Showvid3 />
   {/* <StockMarketChart /> */}
   {/* <AnimatedText /> */}
   <ClearStreet />
   </div>
   <TextHighlight />
   <VidCard />
   <VidCard2 />
   <SVG />
   <MainVid />
   <Canva />
   <For />
   <News />
   <Contact />
   <Footer />
   </>
  )
}
