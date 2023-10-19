const initialState = {
    likedSongs : [],
    playedSongs: [],
    isPlaying: false
}

const likeReducer = (state = initialState, action) => {
    switch(action.type){
        case "LIKE_PRODUCT" :
            localStorage.setItem("likedSongs", JSON.stringify(action.addedProduct)) ;
            return({
                likedSongs: [...state.likedSongs, action.addedProduct]
            })
        case "DISLIKE_PRODUCT":
            localStorage.removeItem("likedSongs")
            console.log(action.id)
            let indexOfRemovedSong = state.likedSongs.findIndex(product => product.id !== action.id);
            state.likedSongs.splice(indexOfRemovedSong, 1);
            return({
                likedSongs: [...state.likedSongs]
            })
        case "PLAYED_SONGS" : 
            localStorage.setItem("playedSongs", JSON.stringify(action.addedProduct)) ;
            return({
                playedSongs: [...state.playedSongs, action.addedProduct]
            })
        case "SET_PLAYING" :
            return({
                ...state,
                isPlaying: action.playing,
            })
            default:
                return state
    }
}


export { likeReducer };