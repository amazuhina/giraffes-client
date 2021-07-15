import React from 'react'
import './aviary-title.css'
import {useDispatch} from "react-redux";
import {getGiraffe} from "../../../api/giraffe";

import {finishLoading, setCards, startLoading} from "../../../redux/cardsSlice";


 export const AviaryTitle = ({id, title}) => {
    const dispatch = useDispatch()

    const onsetCards = () => {
        fetch('url')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(toHaveErrorMessage => {
                // todo: dispatch(hasFailure())
                console.error(toHaveErrorMessage)
            })

        dispatch(startLoading())

        setTimeout(() => {
            const cards = getGiraffe(id)

            dispatch(setCards({cards: cards}))
            dispatch(finishLoading())
        }, 1000)
    }

    return (
        <button
            onClick={onsetCards}
            className={'selectAviary'}
        >
            {title}
        </button>
    )
}