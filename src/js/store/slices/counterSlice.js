// import { createSlice } from "@reduxjs/toolkit"
const { createSlice } = RTK

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0
	},
	reducers: {
		decrementCounter: state => {
			state.value -= 1
		},
		incrementCounter: state => {
			state.value += 1
		},
		setCounter: (state, action) => {
			state.value = action.payload
		},
	}
})

export const { decrementCounter, incrementCounter, setCounter } = counterSlice.actions
export default counterSlice.reducer