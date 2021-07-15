import React from 'react'
import './fullness.css'
import {useSelector} from "react-redux";
import {cardsSelector} from "../../../redux/cardsSlice";
import {maxGiraffeInAviary} from "../../../share";


export const Fullness = ({openTable}) => {


    const giraffe = useSelector(cardsSelector)
    const giraffeCount = giraffe.length


    const percent = (giraffeCount * 100) / maxGiraffeInAviary

    return (
        <div className={'fullness'}>
            <button className={'btn-close'}>
                x
            </button>
            <h2>{percent}% Заполнение вольера </h2>
            <div className={'information'}>
                <progress max={'100'}  value={percent }></progress>
                <button
                    className={'btn-info'}
                    onClick={openTable}
                >
                    Информация
                </button>
            </div>

        </div>
    )
}