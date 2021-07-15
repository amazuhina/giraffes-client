import React from 'react'
import './card.css'


export const Card = ({photo, name, color, diet, character, sex, weight, height}) => {
    return (
        <div className={'Card'}>
            <img className={'photo'} src={photo}/>
            <p>{name}</p>
            <div className={'icons'}>
                <img className={'icon'}/>
                <img className={'icon'}/>
                <img className={'icon'}/>
            </div>
            <div className={'tableValues'}>
                <p>{sex}</p>
                <p> {weight}</p>
                <p>{height}</p>
            </div>
            <p>Цвет:</p> <p className={'info-values'}>{color}</p>
            <p>Диета:</p> <p className={'info-values'}>{diet}</p>
            <p>Характер:</p> <p className={'info-values'}>{character}</p>

        </div>
    )
}