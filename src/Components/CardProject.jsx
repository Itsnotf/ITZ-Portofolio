import React from 'react'
import Buttons from './ButtonCard'

function CardProject({ card }) {
    return (
        <div className='transition ease-in-out bg-[#FCFCFC] border-[rgb(252,252,252)] duration-100 hover:-translate-y-5 hover:duration-150 flex flex-col w-[398px] h-[458px]  rounded-xl shadow-md shadow-slate-200 hover:transition-all hover:ease-in-out hover:shadow-[0_0px_30px_2px_rgba(255,157,0,0.15)]'>
            <div className='w-[100%] h-[50%]  bg-white rounded-t-xl  overflow-hidden'>
                <img src={card.gambar} alt="" className='object-cover h-[100%] w-full' />
            </div>
            <div className='flex mt-[20px] mx-[18px] flex-col font-poppins text-[#213C57]'>
                <div className='w-full h-[160px]'>
                    <h1 className='text-[25px] text-[#DFAA74] font-semibold '>{card.heading}</h1>
                    <p className='mt-[10px]'>{card.tittle}</p>
                </div>
                <div className=''>
                    <Buttons text="Selengkapnya!" />
                </div>
            </div>



        </div>
    )
}

export default CardProject