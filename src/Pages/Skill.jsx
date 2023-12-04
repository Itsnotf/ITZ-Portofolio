import React from 'react'
import CardSkill from '../Components/cardSkill'
import { myskill } from '../constant/skill'
import Buttons from '../Components/Buttons'


function Skill(props) {

    return (
        <div className='w-full  h-auto  flex flex-col overflow-hidden relative  '>
            <div className='w-full h-auto flex flex-row md:mx-[100px] md:mt-10'>
                <div className='flex  mx-[10px] mt-[70px] md:text-[60px] text-[30px] md:w-[680px] w-auto text-[#213C57] font-semibold md:text-start text-center leading-tight font-Poppins'>
                    <p>My Mission Is <span className='text-orange-200'>Design & Develop </span>the best website around</p>
                </div>
            </div>
            <div className='flex pb-20 md:mx-[100px] mx-[10px] justify-between  gap-x-[120px] flex-wrap'>
                {myskill.map((skill, index) => (
                    <CardSkill key={index} skill={skill} />
                ))}
            </div>

        </div>
    )
}

export default Skill