import { useCounterStore } from "../store/counterStore";



function Counter() {

    const { count, increase, decrease, reset } = useCounterStore();


    return (
        <div>
            <h2>Counter</h2>
            <h3>Count: {count}</h3>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
