//  //----------------------------------FactorialCalculator-----------------------------
// import React, { useState, useMemo } from "react";
// function FactorialCalculator() {
//     const [number, setNumber] = useState(0);
//     const factorial = (n) => {
//         console.log("Calculating factorial...");
//         if (n === 0 || n === 1) return 1;
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         } 
//         return result;
//     };
//     const fact = useMemo(() => factorial(number), [number]);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>🧮 Factorial Calculator (useMemo)</h2>
//            <input
//              type="number"
//              value={number}
//              onChange={(e) => setNumber(Number(e.target.value))} 
//              placeholder="Enter number"
//              style={{ padding: "8px", width: "150px" }}
//            />
//            <h3>Factorial : {fact}</h3>  
//         </div>
//     );
// }
// export default FactorialCalculator;


//   //---------------------------------FibonacciCalculator------------------------------
// import React, { useState, useMemo } from "react";
// function FibonacciCalculator() {
//     const [number, setNumber] = useState(0);
//     const fibonacci = (n) => {
//         console.log("Calculating Fibonacci...");
//         if (n <= 0) return 0;
//         if (n === 1) return 1;
//         let a = 0,
//             b = 1,
//             c = 1;
//         for (let i = 2; i <= n; i++) {
//             c = a + b;
//             a = b;
//             b = c;
//         } 
//         return c;
//     };
//     const fib = useMemo(() => fibonacci(number), [number]);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>🔢 Fibonacci Calculator (useMemo)</h2>
//            <input 
//              type="number"
//              value={number}
//              onChange={(e) => setNumber(Number(e.target.value))}
//              placeholder="Enter number"
//              style={{ padding: "8px", width: "150px" }}
//            />
//            <h3>Fibonacci: {fib}</h3>   
//         </div>
//     );
// }
// export default FibonacciCalculator;


//  //-------------------------------Filter List---------------------------------------
// import React, { useState, useMemo } from "react";
// function FilterList() {
//   const [search, setSearch] = useState("");
//   const names = [
//     "Sulthana",
//     "Hasna",
//     "Udaifa",
//     "Fathima",
//     "Wafa",
//     "Zara",
//     "Rifa",
//     "Meharin",
//   ];
//   const filteredNames = useMemo(() => {
//     console.log("Filtering names...");
//     return names.filter((name) =>
//       name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]);
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>🔍 Filter List App (useMemo)</h2>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search names..."
//         style={{ padding: "8px", width: "200px" }}
//       />
//       <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
//         {filteredNames.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default FilterList;


//   //----------------------------------SumArray-----------------------------------
// import React, { useState, useMemo} from "react";
// function SumArray() {
//     const [numbers, setNumbers] = useState([]);
//     const [input, setInput] = useState("");
//     const addNumber = () => {
//         if (input !== "") {
//             setNumbers([...numbers, Number(input)]);
//             setInput("");
//         }
//     };
//     const sum = useMemo(() => {
//         console.log("Calculating Sum...");
//         return numbers.reduce((acc, num) => acc + num, 0);
//     }, [numbers]);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//            <h2>➕ Sum of Array (useMemo)</h2>
//            <input
//              type="number"
//              value={input}
//              onChange={(e) => setInput(e.target.value)}
//              placeholder="Enter number"
//              style={{ padding: "8px", width: "150px" }}
//            />
//            <button onClick={addNumber} style={{ marginLeft: "10px" }}>
//               Add
//            </button>  
//            <h3>Numbers: {numbers.join(", ")}</h3>
//            <h3>Sum : {sum}</h3>
//         </div>
//     );
// }
// export default SumArray;


//  //-------------------------------Object Compare-------------------------
// import React, { useState, useMemo } from "react";
// function ObjectCompare() {
//     const [obj1, setObj1] = useState({ a: 1, b: 2, c: 3 });
//     const [obj2, setObj2] = useState({ a: 1, b: 2, c: 3 });
//     const ChangeObj2 = () => {
//         setObj2({ ...obj2, c: obj2.c + 1 });
//     };
//     const isEqual = useMemo(() => {
//         console.log("Comparing objects...");
//         return JSON.stringify(obj1) === JSON.stringify(obj2);
//     }, [obj1, obj2]);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>🧾 Object Comparison (useMemo)</h2>
//             <prev>Object 1: {JSON.stringify(obj1)}</prev>
//             <prev>Object 2: {JSON.stringify(obj2)}</prev>
//          <button onClick={ChangeObj2}>Change Object 2</button>
//           <h3>Object are equal? {isEqual ? "✅ Yes" : "❌ No"}</h3>
//         </div>
//     );
// }
// export default ObjectCompare;







