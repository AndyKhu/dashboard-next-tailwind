import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface activeMenu{
    value: string ,
    child: string ,
}
interface initialState{
    activeMenu: activeMenu
}

const initialState:initialState = {
    activeMenu: {value:'',child:''}
}

export const authSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setActiveMenu: (state, action:PayloadAction<activeMenu>) =>{
            state.activeMenu = action.payload;
        }
    }
})

export const {setActiveMenu} = authSlice.actions

export default authSlice.reducer