import React, {useState} from 'react'
import './btnNav.css'


export const BtnNav = ({img, imgFocused,  title}) => {

    const [focus, setFocus] = useState(false)


    return (
        <button className={'btnNav'} onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
            {
                (focus)
                    ? <img src={imgFocused} className={'icon'}/>
                    : <img src={img} className={'icon'}/>
            }

            <span>{title}</span>
        </button>
    )
}