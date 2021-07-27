import React from 'react'
import './table.css'
import {UpdateItem} from "../update-item/updateItem";
import {useSelector} from "react-redux";
import {updateSelector} from "../../../redux/updateSlice";


export const Table = ({closeTable}) => {

    const update = useSelector(updateSelector)

    return (
        <div className="table">
            <div className="title">
                <h2>Обновления</h2>
                <button
                    className={'btn-close-table'}
                    onClick={closeTable}
                >
                    x
                </button>
            </div>
                <div>
                    <div className={'items'}>Дата</div>
                    <div>Действие</div>
                    <div>Жираф</div>
                    <div>Статус</div>
                </div>
                <div className={'items'}>
                    {update.map (i => <UpdateItem
                        date={i.date}
                        action={i.action}
                        name={i.name}
                        status={i.status}
                    />)}
                </div>
        </div>
    )
}