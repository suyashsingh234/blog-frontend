import { configureStore } from '@reduxjs/toolkit'
import BlogState from './slices/BlogState'

export const store = configureStore({
	reducer: {
        BlogState: BlogState
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
