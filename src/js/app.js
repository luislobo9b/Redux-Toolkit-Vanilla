import store from "./store/store.js"
import { decrementCounter, incrementCounter, setCounter } from "./store/slices/counterSlice.js"

function getCounter() { // normalmente chamado de selectCounter
	return store.getState().counter.value
}

console.log("RTK", RTK)
console.log("store", store)

const btnGetCounter = document.querySelector("#getCounter"),
	btnSetCounter = document.querySelector("#setCounter"),
	inputCounter = document.querySelector("#inputCounter"),
	btnDecrementCounter = document.querySelector("#decrementCounter"),
	btnIncrementCounter = document.querySelector("#incrementCounter"),
	resultElement = document.querySelector("#result")

btnGetCounter.addEventListener("click", () => {
	const counter = getCounter()
	console.log(counter)
})

btnSetCounter.addEventListener("click", () => {
	const value = Number(inputCounter.value)
	inputCounter.value = 0
	store.dispatch(setCounter(value))
})

btnDecrementCounter.addEventListener("click", () => {
	store.dispatch(decrementCounter())
})

btnIncrementCounter.addEventListener("click", () => {
	store.dispatch(incrementCounter())
})

store.subscribe(render)

function render() {
	const counter = getCounter()
	resultElement.textContent = counter.toString()
}