import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: "toDos",
    initialState: [],
    reducers: {
        addToDo: (state, action) => [{text: action.payload, id: Date.now()}, ...state],
        deleteToDo: (state, action) => state.filter(toDo => toDo.id != action.payload)
    }
});

export const {addToDo, deleteToDo} = toDoSlice.actions;

export default toDoSlice.reducer;