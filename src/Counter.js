import React from 'react'
import { useEffect } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(0);
  
  return (
  <div className="counter" style={{ border: "1px solid black",padding: "20px",borderRadius: "10px",width: "300px",margin: "230px auto", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)",}}
  ><h1>Redux Store</h1>
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())} style={{ margin: "10px", padding: "8px 16px" }} >Increment </button>
      <br />

      <span style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</span>
      <br />

      <button aria-label="Decrement value" onClick={() => dispatch(decrement())} style={{ margin: "10px", padding: "8px 16px" }} >Decrement</button>
      <br />
      <br />

      <input type="text" placeholder="Enter Quantity" onChange={(e) => setAmount(Number(e.target.value))} style={{ padding: "8px", width: "80%", borderRadius: "5px", border: "1px solid #ccc", textAlign: "center", }} />
      <br />
      <br />
      <button aria-label="Increment Quantity"  onClick={() => dispatch(incrementByAmount(amount))} style={{ marginTop: "10px", padding: "8px 16px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", }}> Increment Amount  </button>
    </div>
  </div>
);

}