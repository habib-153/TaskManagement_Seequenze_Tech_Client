import { createSlice } from "@reduxjs/toolkit";

type TFilterInitialState = {
    priority: string;
}

const initialState: TFilterInitialState = {
    priority: ""
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setPriority: (state, action) => {
            state.priority = action.payload;
        }
    }
})

export const { setPriority } = filterSlice.actions;
export default filterSlice.reducer