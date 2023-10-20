import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSong: [],
    isActive: false
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        PlayAudio: (state, action) => {
            state.isActive=true;
            state.currentSong.unshift(action.payload)
        }

    },
})

export const { PlayAudio } = playerSlice.actions;
export default playerSlice.reducer;