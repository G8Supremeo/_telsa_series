import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"],
    darkMode: false,
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
})

export const { toggleDarkMode } = carSlice.actions;
export const selectCars = (state) => state.car.cars;
export const selectDarkMode = (state) => state.car.darkMode;

export default carSlice.reducer;