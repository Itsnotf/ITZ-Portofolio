import React, { useState } from 'react'
import { TERipple } from 'tw-elements-react';

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
            <button type="button" onClick={HandleKlik} className={Klik ? 'transition-all ease-in-out -translate-y-2 translate-x-1 w-[250px] h-[50px] border-none  bg-orange-300 rounded-[10px]  shadow-none '
                : 'md:w-[250px] w-[200px] md:h-[50px] h-[40px] border-none bg-orange-300 hover:duration-500 hover:ease-in-out transition-all rounded-[10px] shadow-[0_5px_10px_7px_rgba(255,157,0,0.15)] '}>
                <p className='md:text-[23px] text-[15px] font-semibold text-white'>{props.text}</p>
            </button>
        </div>
    )
}

export default Buttons