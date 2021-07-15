import React from 'react'
import './aviary.css'
import {AviaryTitle} from "./aviary-title/aviary-title";
import {useDispatch, useSelector} from "react-redux";
import {aviarySelector, addAviary} from "../../redux/aviarySlice";






export const Aviary = ({}) => {

    const aviaryTitle = useSelector(aviarySelector)
    const dispatch = useDispatch()


    const onAddAviary = () => {
        const lastAviary = aviaryTitle[aviaryTitle.length - 1]
        const payload = {
            id: lastAviary.id + 1,
            title: `Вольер ${lastAviary.id + 1}`
        }

        dispatch(addAviary({aviary: payload}))

        // TODO: Save from data base
    }


    return (
        <div className={'Aviary'}>
            <div className={'aviary-item'}>
                {
                    aviaryTitle.map(i => <AviaryTitle id={i.id} title={i.title} />)
                }

                <button
                    onClick={onAddAviary}
                    className={'btnAddAviary'}
                >
                    + </button>
             </div>
        </div>
    )
}