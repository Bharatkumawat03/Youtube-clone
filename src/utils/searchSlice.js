import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{
        searchQuery: "",
    },
    reducers: {
        cacheResults: (state, action) => {
            // state = {...action.payload, ...state};
            state = Object.assign(state, action.payload);
        },
        getSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        clearSearchQuery: (state, action) => {
            state.searchQuery = "";
        },
    },
});

export const {
    cacheResults,
    getSearchQuery,
    clearSearchQuery,
} = searchSlice.actions;
export default searchSlice.reducer;
