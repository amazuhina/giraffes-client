import {createSlice} from "@reduxjs/toolkit"

const aviarySlice = createSlice({
    name: 'aviarySlice',
    initialState: {
        aviary: [
            {
                id: 1,
                title: 'Вольер 1'
            }
        ],
        isFailure: false
    },
    reducers: {
        addAviary: (state, action) => {
            state.aviary.push(action.payload.aviary)
        }
    }
})

export const aviarySelector = (state) => state.aviaryReducer.aviary


export const {
    addAviary
} = aviarySlice.actions

export const reducer = aviarySlice.reducer


