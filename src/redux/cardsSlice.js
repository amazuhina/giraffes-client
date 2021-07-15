import {createSlice} from "@reduxjs/toolkit"
import {maxGiraffeInAviary} from "../share";

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState: {
        cards: [],
        isLoading: false,
        isFailure: false
    },
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload.cards
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
        addGiraffe: (state, action) => {
            if (state.cards.length < maxGiraffeInAviary) {
                state.cards.push(action.payload.giraffe)
            }
        }
    }
})


export const cardsSelector = (state) => state.cardsReducer.cards
export const isLoadingSelector = (state) => state.cardsReducer.isLoading
export const isFailureSelector = (state) => state.cardsReducer.isFailure
export const giraffeSelector = (state) => state.giraffeReducer.giraffe

export const {
    setCards,
    startLoading,
    finishLoading,
    hasFailure,
    hasNotFailure,
    addGiraffe
} = cardsSlice.actions

export const reducer = cardsSlice.reducer



/*
*
* HTTP Веб сервер
* - apache
* - nginx
*
* HTTP
* HTTPS
*
* FTP
*
*
* */


