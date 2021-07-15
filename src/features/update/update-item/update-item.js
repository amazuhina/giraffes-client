import React from 'react'
import './update-item.css'


export const UpdateItem = ({date, action, name, status}) => {
    return (
        <div className={'update-item'}>
            <div>{date}</div>
            <div>{action}</div>
            <div>{name}</div>
            <div>{status}</div>
        </div>
    )
}