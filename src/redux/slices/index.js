import {combineReducers} from '@reduxjs/toolkit';

import pageTitleSlice from './pageTitle'
const reducers = combineReducers({
    pageTitle : pageTitleSlice
})

export default reducers