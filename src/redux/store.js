import { configureStore } from '@reduxjs/toolkit'

import {reducer as cardsReducer} from "./cardsSlice"
import {reducer as aviaryReducer} from "./aviarySlice"
import {reducer as giraffeReducer} from "./giraffeSlice"
import {reducer as updateReducer} from "./updateSlice"


export default configureStore({
    reducer: {
        cardsReducer: cardsReducer,
        aviaryReducer: aviaryReducer,
        giraffeReducer: giraffeReducer,
        updateReducer: updateReducer,

    }
})