import React from 'react'
import Typed from 'typed.js'
import Buttons from '../Components/Buttons';
import Hero from '../assets/Hero.svg'
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub, SlSocialFacebook } from 'react-icons/sl'

function Home(props) {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front End Developer', 'UI/UX Designer'],
            typeSpeed: 100,
            loop: true,
            backSpeed: 100,
            backDelay: 300,
            showCursor: false
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='overflow-hidden bg-gradient-to-r from-white via-white to-blue-200 h-screen '>
            <div className='flex md:flex-row  md:mt-[30px] flex-col md:mx-[100px] mx-0 w-full h-auto z-50  mt-10  items-center justify-center'>
                <div className='flex flex-col  md:items-start items-center  mt-[60px] full'>
                    <h1 className='md:text-[60px] text-[25px] text-[#213C57] leading-10 md:leading-none font-semibold font-Poppins'>Faiz Aflah Hafizuddin</h1>
                    <p ref={el} className='font-Poppins md:text-[50px] text-[20px] font-bold text-[#DFAA74] absolute md:mt-[70px] mt-[30px]' />
                    <div className='md:mx-[0px] mx-[40px] md:mt-[120px] flex md:text-left text-center w-auto h-auto mt-[50px]'>
                        <p className='md:text-[20px] text-[10px] font-normal text-[#213C57] font-Poppins w-auto md:w-[70%] '>Gua Mahasiswa semester 3 yang suka
                            banget di dunia Tech terutama pada bagian interface seperti UI/UX serta Frond End webDev</p>
                    </div>
                    <div className='md:flex hidden mt-[100px] font-Poppins'>
                        <Buttons text="Selengkapnya!" />
                    </div>
                </div>
                <div className='flex md:w-full md:h-[545px] h-[auto] w-[200px] mt-[50px]  '>
                    <img src={Hero} className='object-cover' alt="" />
                </div>
                <div className=' md:mt-[100px] mt-[25px] md:hidden font-Poppins'>
                    <Buttons text="Selengkapnya!" />
                </div>

                <div className='flex  mt-[50px]  text-[#213C57] md:mx-[100px] gap-10 md:hidden '>
                    <div className='flex justify-center text-[15px] w-[30px] h-[30px] hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full '>
                        <button ><SlSocialFacebook /></button>
                    </div>
                    <div className='flex justify-center text-[15px] w-[30px] h-[30px]  hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full '>
                        <button ><SlSocialGithub /></button>
                    </div>
                    <div className='flex justify-center text-[15px] w-[30px] h-[30px]  hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full'>
                        <button ><SlSocialInstagram /></button>
                    </div>
                    <div className='flex justify-center text-[15px] w-[30px] h-[30px]  hover:text-orange-200 shadow-[0_0px_10px_2px_rgba(255,157,0,0.15)] ease-in-out transition-all hover:ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] duration-300 rounded-full'>
                        <button ><SlSocialLinkedin /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home