// import { configureStore } from "@reduxjs/toolkit"
const { configureStore } = RTK
import counterReducer from "./slices/counterSlice.js"

const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})

export default store