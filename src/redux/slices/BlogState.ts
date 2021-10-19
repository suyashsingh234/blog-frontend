import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BlogState {
    blog: any
}

const initialState: BlogState = {
    blog: ''
}

export const slice = createSlice({
    name: 'BlogState',
    initialState,
    reducers: {
        set_blog: ( state, action: PayloadAction<boolean>) => {
            state.blog = action.payload
        }
    }
})

export const BlogStateActions = slice.actions
export default slice.reducer
