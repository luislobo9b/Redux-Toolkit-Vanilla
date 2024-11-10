import store from "./store/store.js"
import { decrementCounter, incrementCounter, setCounter } from "./store/slices/counterSlice.js"

function getCounter() {
	return store.getState().counter.value
}

console.log("RTK", RTK)
console.log("store", store)