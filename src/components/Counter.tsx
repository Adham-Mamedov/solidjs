import {createSignal} from "solid-js";
import cls from "../styles/Counter.module.css";


const Counter = () => {
  const [count, setCount] = createSignal(0);

  const adjustCounter = (amount: number) => setCount(count() + amount);

  return (
    <div>
      <h2>Counter: {count()}</h2>
      <button class={cls.counter_button} style={{"margin-right": '1rem'}} onClick={() => adjustCounter(1)}>Increment</button>
      <button class={cls.counter_button} onClick={() => adjustCounter(-1)}>Decrement</button>
    </div>
  );
};

export default Counter;