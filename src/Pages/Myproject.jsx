import React from 'react'
import CardProject from "../Components/CardProject"
import { Projects } from '../constant/project'

function Myproject() {
    return (
        <div className='mt-[120px] flex h-auto w-full   flex-wrap  pb-20'>
            <div className='w-screen gap-10 h-auto flex flex-wrap mx-[80px]'>
                {Projects.map((card, index) => (
                    <CardProject key={index} card={card} />
                ))}
            </div>
        </div>
    )
}

export default Myproject