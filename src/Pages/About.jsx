import React from 'react'
import aboutme from '../assets/aboutme.svg'
function About(props) {
    return (
        <div className='flex w-screen h-auto mt-[40px]  flex-row'>
            <div className='w-[50%] h-auto'>
                <img src={aboutme} alt="" />
            </div>
            <div className='mt-[80px] text-[36px] font-semibold font-Poppins w-[50%] text-[#213C57]'>
                <h1> Saya adalah Mahasiswa jurusan <span className='text-[#DFAA74]'>Manajemen Informatika</span> di <span className='text-[#DFAA74]'>Politeknik Negeri Sriwijaya</span>, dan sekarang saya ada di semester 3.</h1>
                <h2 className='mt-[50px] text-[#DFAA74]'>Who am I?</h2>
                <p className='text-[20px] font-normal w-[76%] '><span className='text-[#DFAA74]'>Faiz aflah hafizuddin</span>, anak pertama dari 4 bersaudara yang memiliki mimpi menjadi salah satu software angineering yang mampu memberikan dampak
                    positif untuk sekitarnya.</p>
                <h1 className='mt-[40px]'>Terimakasih Atas Kunjungan nya</h1>
            </div>

        </div>

    )
}

export default About