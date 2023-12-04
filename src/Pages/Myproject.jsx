import React from 'react'
import CardProject from "../Components/CardProject"
import { Projects } from '../constant/project'

function Myproject() {
    return (
        <div className='md:mt-[170px] mt-[100px] flex h-auto w-full   flex-wrap  pb-28'>
            <div className='w-screen gap-10 h-auto flex flex-wrap md:mx-[80px] mx-[20px] '>
                {Projects.map((card, index) => (
                    <CardProject key={index} card={card} />
                ))}
            </div>
        </div>
    )
}

export default Myproject