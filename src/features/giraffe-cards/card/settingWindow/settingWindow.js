import React from 'react'
import './settingWindow.css'
import iconEdit from "../../../../../src/attachments/edit.png";
import iconDelete from "../../../../../src/attachments/delete.png";


export const SettingWindow = ({id, editInfo}) => {

    const onRemove = (id) => {
        console.log(id)
    }

    return (
        <div className={'settingWindow'}>
            <button
                className={'edit'}
               onClick={editInfo}
            >
                <img className={'iconSetting'} src={iconEdit}/>
                Редактировать
            </button>
            <button
                className={'delete'}
                onClick={() => onRemove()}
            >
                <img className={'iconSetting'} src={iconDelete}/>
                Удалить
            </button>
        </div>
    )
}