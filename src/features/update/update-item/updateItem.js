import React from 'react'
import './updateItem.css'


export const UpdateItem = ({date, action, name, status}) => {
    return (
        <div className={'updateItem'}>
            <div>{date}</div>
            <div>{action}</div>
            <div>{name}</div>
            <div>{status}</div>
        </div>
    )
}