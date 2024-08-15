import { createSlice } from "@reduxjs/toolkit";

type TFilterInitialState = {
    searchTerm: string;
    priority: string;
}

const initialState: TFilterInitialState = {
    searchTerm: '',
    priority: ""
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setPriority: (state, action) => {
            state.priority = action.payload;
        }
    }
})

export const { setPriority, setSearchTerm } = filterSlice.actions;
export default filterSlice.reducer