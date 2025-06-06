import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils/utils';
import Videocaraosel from './Videocaraosel';

const Highlights = () => {

  useGSAP(()=>{
    gsap.to('#title',{opacity:1,y:0})
    gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})
  },[])

  return (
    <section id='highlights'className='w-screen overflow-hidden h-full common-padding bg-zinc-950 '>
      <div className='screen-max-width '>
        <div className='mb-12 w-full items-center  md:flex justify-between'>
          <h1 id='title' className='section-heading'>Get the highlights.</h1>
          <div className='flex flex-wrap items-end gap-5 '>
            <p className='link flex gap-1'>watch the film 
            <img src={watchImg} alt='watch' className='ml-1 '/>
            </p> 
            <p className='link flex gap-1'>watch the event 
            <img src={rightImg} alt='watch' className='ml-1'/>
            </p> 
          </div>
        </div>
        <Videocaraosel />
      </div>
    </section>
  )
}

export default Highlights