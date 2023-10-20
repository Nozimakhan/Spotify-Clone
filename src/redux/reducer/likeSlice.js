import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedSongs: []
}

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        likeMusic : (state, action) => {
            state.value=true;

            if(state.likedSongs?.some(product => product.id === action.payload?.track?.id)){

            }else{
                state.likedSongs.push(action.payload)
            }
        },
        dislikeMusic : (state, action) => {
            let indexOfRemovedSong = state.likedSongs.findIndex(product => product.id !== action.payload?.track?.id);

            if(state.likedSongs?.findIndex(product => product.id !== action.payload?.track?.id)){
                
            }else{
                state.likedSongs.splice(indexOfRemovedSong, 1)
            }
        }
    }
})

export const { likeMusic, dislikeMusic } = likeSlice.actions;
export default likeSlice.reducer;