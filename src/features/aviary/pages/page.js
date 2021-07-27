import React from 'react'
import './page.css'
import {Aviary} from "../aviary";
import {GiraffeCards} from "../../giraffe-cards/giraffeCards";
import {Update} from "../../update/update";



export const Page = ({}) => {
    return (
        <div className={'Page'}>
            <Aviary/>
            <GiraffeCards/>
            <Update/>
        </div>
    )
}