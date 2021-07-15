import {createSlice} from "@reduxjs/toolkit"

const giraffeSlice = createSlice({
    name: 'giraffeSlice',
    initialState: {
        giraffe: [],
        isFailure: false
    },
    reducers: {
        addGiraffe: (state, action) => {
            state.giraffe.push(action.payload.giraffe)
        },

        setGiraffe: (state, action) => {
            state.giraffe = action.payload.giraffes
        }
    }
})

export const giraffeSelector = (state) => state.giraffeReducer.giraffe


export const {
    addGiraffe,
    setGiraffe
} = giraffeSlice.actions

export const reducer = giraffeSlice.reducer


