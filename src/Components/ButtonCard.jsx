import React, { useState } from 'react'

function Buttons(props) {
    const [Klik, setKlik] = useState(false)

    const HandleKlik = () => {
        setKlik(!Klik);

        setTimeout(() => {
            setKlik(false);
        }, 300)
    }
    return (
        <div>
            <button type="button" onClick={HandleKlik} className={Klik ? 'transition-all ease-in-out -translate-y-2 translate-x-1 md:w-[150px] w-[100px] md:h-[35px] h-[30px] border-none  bg-orange-300 rounded-[5px]  shadow-none '
                : 'md:w-[150px] w-[100px]   md:h-[35px] h-[30px] border-none bg-orange-300 hover:duration-500 hover:ease-in-out transition-all rounded-[5px] shadow-[0_2px_10px_2px_rgba(255,157,0,0.15)] '}>
                <p className='md:text-[15px] text-[10px] font-Poppins font-semibold text-white'>{props.text}</p>
            </button>
        </div>
    )
}

export default Buttons