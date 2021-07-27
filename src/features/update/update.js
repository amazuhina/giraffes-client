import React, {useEffect, useState} from 'react'
import './update.css'
import {useDispatch, useSelector} from "react-redux";
import {setUpdate, updateSelector} from "../../redux/updateSlice";
import {UpdateItem} from "./update-item/updateItem";
import {Fullness} from "./fullness/fullness"
import {Table} from "./table/table";


export const Update = ({}) => {

    const dispatch = useDispatch()

    useEffect(() =>{
        // fetch('http://girafee/api/update.php')
        //     .then(response => response.json())
        //     .then(data => {
        //         const payload = {
        //             update: {
        //                 date: data.date,
        //                 action: 'TEST',
        //                 name: null,
        //                 status: 'TEST',
        //             }
        //         }
        //
        //         fetch('http://girafee/api/girafee.php?id=' + data.giraffeId)
        //             .then(res => res.json())
        //             .then(data => {
        //                 payload.update.name = data.name
        //
        //                 dispatch(setUpdate(payload))
        //             })
        //
        //     })
    })




    const [isShowTable, setIsShowTable] = useState(false)

    const openTable = () => {
        setIsShowTable(true)
    }

    const closeTable = () => {
        setIsShowTable(false)
    }



    return (
        <div className={'Update'}>
            {
                isShowTable && <Table closeTable={closeTable}/>
            }
            <div className="left">
                <Fullness openTable={openTable}/>
            </div>

        </div>
    )
}