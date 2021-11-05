import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: { list: [] },
    reducers: {
        add: (state, action) => {
            state.list = [action.payload, ...state.list]
            return state
        }
    }
})

export const list_map = (state) => state.user.list
export const userActions = userSlice.actions
export default userSlice.reducer