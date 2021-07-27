import React, {useState} from 'react'
import './card.css'
import {SettingWindow} from "./settingWindow/settingWindow";
import iconSex from '../../../attachments/sex.png'
import iconWeight from '../../../attachments/weight.png'
import iconHeight from '../../../attachments/height.png'
import iconSetting from '../../../attachments/setting.png'
import {useDetectClickOutside} from "react-detect-click-outside";



export const Card = ({id, photo, name, color, diet, character, sex, weight, height}) => {

    const [isEdited, setIsEdited] = useState(true)

    const editInfo = () => {
        setIsEdited(false)
    }



    const [isShowSetting, setIsShowSetting] = useState(false)

    let isShowSettingStatus = false

    const openSetting = () => {
        setIsShowSetting(true)
        isShowSettingStatus = true

        console.log('is show - ' + isShowSettingStatus)
    }
    const closeSetting = () => {
        setIsShowSetting(false)
        isShowSettingStatus = false
    }

    const [sexState, setSex] = useState(sex)
    const [weightState, setWeight] = useState(weight)
    const [heightState, setHeight] = useState(height)

    const onOverflow = () => {

        console.log('test')

        // console.log(isShowSetting)
    }

    // const ref = useDetectClickOutside({
    //     onTriggered: onOverflow,
    //     disableClick: isShowSettingStatus
    // })




    return (
        <div className={'Card'} >
            <button
                className={'btnSetting'}
                onClick={openSetting}
            >

                <img className={'icon'} src={iconSetting}/>
            </button>
            <div>
                {
                    isShowSetting &&  <SettingWindow id={id} editInfo={editInfo}/>
                }
            </div>


            <div className="mainValues">
                <img className={'photo'} src={photo}/>
                <input type="text" value={name} className={'infoName'} disabled={'true'} />
            </div>

            <div className={'icons'}>
                <img className={'icon'} src={iconSex}/>
                <img className={'icon'} src={iconWeight}/>
                <img className={'icon'} src={iconHeight}/>
            </div>
            <div className={'tableValues'}>
                <input type="text" onChange={e => setSex(e.target.value)} value={sexState} className={'infoTable'} disabled={isEdited} />
                <input type="text" onChange={e => setWeight(e.target.value)} value={weightState} className={'infoTable'} disabled={isEdited} />
                <input type="text" onChange={e => setHeight(e.target.value)} value={heightState} className={'infoTable'} disabled={isEdited} />
            </div>
            <div className="characteristicValues">
                <p className={'titleCharacteristic'}>Цвет:</p>
                <input type="text" value={color} className={'infoCharacteristic'} disabled={isEdited} />
                <p className={'titleCharacteristic'}>Диета:</p>
                <input type="text" value={diet} className={'infoCharacteristic'} disabled={isEdited} />
                <p className={'titleCharacteristic'}>Характер:</p>
                <input type="text" value={character} className={'infoCharacteristic'} disabled={isEdited} />

            </div>
            <button className={'toSave'}>Сохранить</button>

        </div>
    )
}