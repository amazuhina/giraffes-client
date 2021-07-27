import {createSlice} from "@reduxjs/toolkit"

const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: {
        isEdit: false,
        isDelete: false,
        isSave: false,
    },
    reducers: {

    }
})

export const aviarySelector = (state) => state.aviaryReducer.aviary


export const {

} = settingSlice.actions

export const reducer = settingSlice.reducer


