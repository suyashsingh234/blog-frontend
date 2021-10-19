import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BlogState {
    blog: any
}

const initialState: BlogState = {
    blog: {
        blocks: [{
            data: {
                text: "// write it out!"
            },
            id: "w3ykgLRuwB",
            type: "paragraph"
        }],
        time: 1634646897293,
        version: "2.22.2"
    }
}

export const slice = createSlice({
    name: 'BlogState',
    initialState,
    reducers: {
        set_blog: ( state, action: PayloadAction<any>) => {
            state.blog = action.payload
        }
    }
})

export const BlogStateActions = slice.actions
export default slice.reducer
