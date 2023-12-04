import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub, SlSocialFacebook } from 'react-icons/sl'


function Navbars({ halaman, currentIndex, navigate, isActive }) {
    const [burger, setBurger] = useState(false);
    const isAtBeginning = currentIndex === 0;
    const isAtEnd = currentIndex === 3;

    const handleBackClick = () => {
        if (!isAtBeginning) {
            navigate('back');
        }
    };

    const handleForwardClick = () => {
        if (!isAtEnd) {
            navigate('forward');
        }
    };

    return (
        <div className={isActive ? "fixed w-full  z-50 shadow-md shadow-orange-100 bg-white opacity-75 " : "fixed w-full s z-50 bg-transparent"}>
            <div className='flex w-full md:h-[70px] sm:h-[50px] h-[40px] items-center mt-[10px] '>
                <div className='flex md:mx-[100px] sm:mx-[80px] mx-[20px] md:justify-normal justify-around w-full'>
                    <h1 className='md:text-[20px] text-[15px] text-[#213C57] font-Poppins font-bold'>ITSNOTFZ <span className='font-normal'>/</span></h1>
                    <h2 className='opacity-50 md:text-[20px] text-[#213C57] text-[15px] w-[60px] md:w-[100px] ml-[10px]'>{halaman}</h2>
                    <div className='flex flex-row '>
                        <button onClick={handleBackClick} disabled={isAtBeginning}><IoIosArrowBack className={isAtBeginning ? 'cursor-not-allowed md:text-[25px] sm:text-[20px] text[25px]' : 'cursor-pointer md:text-[25px] sm:text-[20px] text-[25px]'} /></button>
                        <button onClick={handleForwardClick} disabled={isAtEnd}><IoIosArrowForward className={isAtEnd ? 'cursor-not-allowed md:text-[25px] sm:text-[20px] text-[25px]' : 'cursor-pointer md:text-[25px] sm:text-[20px] text-[25px]'} /></button>
                    </div>
                </div>
                <div className='md:flex justify-end  text-gray-300  md:mx-[100px] gap-5 hidden '>
                    <div className='flex justify-center bg-[#FCFCFC] text-[20px] w-[30px] h-[30px] hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full '>
                        <button ><SlSocialFacebook /></button>
                    </div>
                    <div className='flex justify-center bg-[#FCFCFC] text-[20px] w-[30px] h-[30px]  hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full '>
                        <button ><SlSocialGithub /></button>
                    </div>
                    <div className='flex justify-center bg-[#FCFCFC] text-[20px] w-[30px] h-[30px]  hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full'>
                        <button ><SlSocialInstagram /></button>
                    </div>
                    <div className='flex justify-center bg-[#FCFCFC] text-[20px] w-[30px] h-[30px]  hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full'>
                        <button ><SlSocialLinkedin /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbars;
