import React from 'react'
import aboutme from '../assets/aboutme.svg'
function About(props) {
    return (
        <div className='flex w-screen h-auto md:mt-[40px] mt-[80px]  md:flex-row flex-col'>
            <h1 className='md:hidden text-[20px] font-semibold font-Poppins md:w-[50%] w-[100%] md:text-left text-center text-[#213C57]'> Saya adalah Mahasiswa jurusan <span className='text-[#DFAA74]'>Manajemen Informatika</span> di <span className='text-[#DFAA74]'>Politeknik Negeri Sriwijaya</span>, dan sekarang saya ada di semester 3.</h1>
            <div className='md:w-[50%] w-[100%] h-auto'>
                <img src={aboutme} alt="" />
            </div>
            <div className='md:mt-[80px] mt-[30px] md:text-[36px] text-[20px] font-semibold font-Poppins md:w-[50%] w-[100%] md:text-left text-center text-[#213C57]'>
                <h1 className='md:flex hidden'> Saya adalah Mahasiswa jurusan <span className='text-[#DFAA74]'>Manajemen Informatika</span> di <span className='text-[#DFAA74]'>Politeknik Negeri Sriwijaya</span>, dan sekarang saya ada di semester 3.</h1>
                <h2 className='md:mt-[50px] mt-[5px] text-[#DFAA74]'>Who am I?</h2>
                <p className='md:text-[20px] text-[15px] font-normal md:w-[76%] w-[100%] '><span className='text-[#DFAA74]'>Faiz aflah hafizuddin</span>, anak pertama dari 4 bersaudara yang memiliki mimpi menjadi salah satu software angineering yang mampu memberikan dampak
                    positif untuk sekitarnya.</p>
                <h1 className='mt-[40px]'>Terimakasih Atas Kunjungan nya</h1>
            </div>

        </div>

    )
}

export default About