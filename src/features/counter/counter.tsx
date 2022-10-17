import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [incrementAmount, setIncrementAmount] = useState(0);

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button className="counterBtn" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="counterBtn" onClick={() => dispatch(decrement())}>
        -
      </button>

      <div>
        <input
          value={incrementAmount}
          type={"number"}
          onChange={(e) => {
            setIncrementAmount(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(incrementAmount));
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
