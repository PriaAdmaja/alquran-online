import { createSlice} from '@reduxjs/toolkit';

const pageTitleSLice = createSlice({
    name: 'Surah Title',
    initialState: {
        pageTitle : ''
    },
    reducers: {
        setpageTitle : (prevState, action) => {
            return {
                ...prevState,
                pageTitle: action.payload
            }
        },
        removeTitle : (prevState) => {
            return {
                ...prevState,
                pageTitle: ''
            }
        }
    }
})

export const pageTitleAction = pageTitleSLice.actions
export default pageTitleSLice.reducer