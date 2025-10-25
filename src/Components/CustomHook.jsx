//   //-----------------------------------Counter-----------------------------------------
// import React, { useState, useCallback } from "react";
// export function useCounter(initialValue = 0) {
//     const [count, setCount] = useState(initialValue);
//     const increment = useCallback(() => setCount((prev) => prev + 1), []);
//     const decrement =  useCallback(() => setCount((prev) => prev - 1), []);
//     const reset = useCallback(() => setCount(initialValue), [initialValue]);
//     return { count, increment, decrement, reset };
// } 


//   //-----------------------------------Toggle-----------------------------------------
// import React, { useState, useCallback } from "react";
// export function useToggle(initialValue = false) {
//     const [value, setValue] = useState(initialValue);
//     const toggle = useCallback(() => setValue((prev) => !prev), []);
//     const setTrue = useCallback(() => setValue(true), []);
//     const setFalse = useCallback(() => setValue(false), []);
//     return { value, toggle, setTrue, setFalse };
// }







