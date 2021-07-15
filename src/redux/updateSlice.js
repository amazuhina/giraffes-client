import {createSlice} from "@reduxjs/toolkit"


const updateSlice = createSlice({
    name: 'updateSlice',
    initialState: {
        update: [
            {
                date: '1..',
                action: '2',
                name: '3',
                status: '4',
            },
            {
                date: '5',
                action: '6',
                name: '7',
                status: '8',
            }

        ],
        isLoading: false,
        isFailure: false
    },
    reducers: {
        setUpdate: (state, action) => {
            state.update = action.payload.update
        },

        startLoading: (state, action) => {
            state.isLoading = true
        },
        finishLoading: (state, action) => {
            state.isLoading = false
        },

        hasFailure: (state) => {
            state.isFailure = true
        },
        hasNotFailure: (state) => {
            state.isFailure = false
        },
    }
})



export const updateSelector = (state) => state.updateReducer.update
export const isLoadingSelector = (state) => state.updateReducer.isLoading
export const isFailureSelector = (state) => state.updateReducer.isFailure

export const {
    setUpdate,
    startLoading,
    finishLoading,
    hasFailure,
    hasNotFailure,
} = updateSlice.actions

export const reducer = updateSlice.reducer