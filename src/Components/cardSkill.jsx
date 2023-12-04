import React from 'react';

function CardSkill({ skill }) {
    return (
        <div className='flex flex-wrap md:mt-[70px] mt-[60px] '>
            <div className='md:w-[550px] w-[300px] h-auto flex flex-col mx-[10px] '>
                <div className=' w-[60px] h-[60px] bg-[#FF9D0026] shadow-[0_2px_20px_3px_rgba(223,170,116,1)] rounded-[10px] flex items-center justify-center'>
                    <img src={skill.img} alt="" className='w-[40px] h-[40px]' />
                </div>
                <p className=' md:text-base text-xs md:w-[500px] w-[300px] mt-[25px] font-Poppins'>{skill.desc}</p>
                <div className='flex flex-col w-full'>
                    <p className='flex w-[90%] justify-end text-[#DFAA74] font-Poppins font-semibold '>{skill.percentage} %</p>
                    <div className='w-full h-2 bg-[#FF9D0026]  rounded-full mt-[20px]'>
                        <div style={{ width: `${skill.percentage}%` }} className='h-2 bg-[#fe9d3d] rounded-full'></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CardSkill;
