import React, { useState } from 'react';


export const Sample = () => {
    
    const[count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
  return (
    <>
    <div>count is {count}</div>
    <button onClick={incrementCount}>click</button>
    </>
  )
}
