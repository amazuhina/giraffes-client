import React, {useEffect, useState} from 'react'
import './giraffeCards.css'
import {Card} from "./card/card";
import {useDispatch, useSelector} from "react-redux";

import {
    cardsSelector,
    finishLoading, hasFailure, hasNotFailure,
    isFailureSelector,
    isLoadingSelector,
    setCards,
    startLoading
} from "../../redux/cardsSlice";
import {Loading} from "../../ui/spinner";
import {AlertIsFailure} from "../../ui/alertIsFailure";
import {addGiraffe, giraffeSelector} from "../../redux/cardsSlice";
import {setGiraffe} from "../../redux/giraffeSlice";


export const GiraffeCards = ({}) => {

/****/

    const dispatch = useDispatch()

    const onAddGiraffe = () => {
        const payload = {
            giraffe: {
            id: 'id',
            name: 'name',
            sex: 'sex',
            weight: 'weight',
            height: 'height',
            color: 'color',
            diet: 'diet',
            character: 'character',
            photo: 'photo',
            idAviary: 'idAviary'}

            }
         dispatch(addGiraffe(payload))
    }



/****/



    useEffect(() => {

        dispatch(startLoading())
        fetch('http://girafee/api/girafee.php')
            .then(response => response.json())
            .then(data => {
               setTimeout(() => {

                   const payload = {
                       cards: data.map(i => ({
                           id: i.id,
                           name: i.name,
                           sex: i.sex,
                           weight: i.weight,
                           height: i.height,
                           color: i.color,
                           diet: i.diet,
                           character: i.character,
                           photo: i.imgUrl
                       }))
                   }

                   dispatch(setCards(payload))
                   dispatch(finishLoading())
                   dispatch(hasNotFailure())
               }, 1000)
            })
            .catch(messageError => {
                dispatch(hasFailure())
                console.error(messageError)
            })
    }, [])

    const giraffes = useSelector(cardsSelector)

    const isLoading = useSelector(isLoadingSelector)

    const isFailure = useSelector(isFailureSelector)

    const renderCards = giraffes.length > 0
        ? giraffes.map(i => <Card
                id={i.id}
                name={i.name}
                sex={i.sex}
                weight={i.weight}
                height={i.height}
                color={i.color}
                diet={i.diet}
                character={i.character}
                photo={i.photo}
            />)
        : <h2>Вольер пустой</h2>

    const loadingRender = !isLoading ? renderCards : <Loading />

    return (
        <div className={'giraffeCards'}>
            <h2 className={'titlePage'}>Жирафы</h2>
            <button
                onClick={onAddGiraffe}
                className={'btnAddGiraffe'}
            >
                + </button>

            <div className={'row'}>
                {
                    !isFailure ? loadingRender :
                        <AlertIsFailure/>
                }
            </div>
        </div>
    )
}