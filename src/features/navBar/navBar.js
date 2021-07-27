import React from 'react'
import './navBar.css'
import iconLogo from "../../attachments/logo.png";
import {arrayBtnNav} from "./btnObjects";
import {BtnNav} from "./btnNav/btnNav";


export const NavBar = ({}) => {
    return (
        <div className={'NavBar'}>
            <div className={'header'}>
                <img className={'iconLogo'} src={iconLogo}/>
                <div className="titleText">
                    <h1 className={'title'}>Ферма Заслуженных Жирафов </h1>
                    <h2 className={'subtitle'}>России и СНГ</h2>
                </div>
            </div>
            <div className="menu">
                {
                    arrayBtnNav.map(item => <BtnNav img={item.img} title={item.title}/>)
                }
            </div>
        </div>
    )
}