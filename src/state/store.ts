import { configureStore } from '@reduxjs/toolkit'
import initialSlice from './initialSlice'

const store = configureStore({
    reducer: {
        init: initialSlice
    },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch