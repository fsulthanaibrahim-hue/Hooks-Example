//--------------------------------------CounterApp------------------------------------
// import React, { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0)
//    return (
//     <div>
//         <h2>Count : {count}</h2>
//         <button onClick={() => setCount(count + 1)}>Increase</button>
//         <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//    );
// } 
// export default Counter;


//---------------------Change Text App--------------------------------
// import React, { useState } from "react";
// function ShowMessage() {
//     const [message, setMessage] = useState("Hello!");
//    return (
//     <div>
//         <h2>{message}</h2>
//         <button onClick={() => setMessage("Welcome!")}>
//             Click
//         </button>
//     </div>
//    );
// }
// export default ShowMessage;


//------------------------------Show/Hide Text App--------------------------------
// import React, { useState } from "react";
// function ShowHide() {
//     const [show, setShow] = useState(true);
//     const toggleText = () => {
//         setShow(!show);
//     };
//     return (
//         <div>
//             <button onClick={toggleText}>
//                 {show ? "Hide Text" : "Show Text"}
//             </button>
//             {show && <p>Hello</p>}
//         </div>
//     );
// }
// export default ShowHide;



//-------------------------Click Button------------------------------------
// import React, { useState } from "react";
// function ShowMessage() {
//     const [message, setMessage] = useState("Hello!");
//     const toggleShow = () => {
//         setMessage(!message);
//     };
//    return (
//     <div>
//         <button onClick={toggleShow}>
//             {message ? "Click" : "Clicked"}
//         </button>
//         <h2>
//             {message
//              ? "Hello where are you"
//              : "Welcome to here"}
//         </h2>
//     </div>
//    );
// }
// export default ShowMessage;



// import React, { useState } from "react";
// function ShowHide() {
//     const [show, setShow] = useState("Hello")
//    const toggleShow = () => {
//     setShow(!show)
//    };
//    return (
//     <div>
//         <button onClick={toggleShow}>
//            {show ? "Hide" : "show"}
//         </button>
//          {show && <h1>Helloo</h1>}
//     </div>
//    );
// }
// export default ShowHide;




// import React, { useState } from "react";
// function ShowHide() {
//     const [show, setShow] = useState(true);
//     const toggleShow = () => {
//         setShow(!show);
//     }
//     return (
//         <div style={{ marginLeft: "600px"}}>
//             <button onClick={toggleShow}>{show ? "Hide" : "Show"}</button>
//              {show && <h2>Helloo...</h2>}
//         </div>
//     )
// }
// export default ShowHide;



// import React, { useState } from "react";
// function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <div>Count : {count}</div>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <button onClick={() => setCount(count - 1)}>Decrease</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     );
// }
// export default Counter;


// import React, { useState } from "react";
// function ShowHide() {
//     const [show, setShow] = useState(true);
//     const toggleShow = () => {
//         setShow(!show);
//     }
//     return (
//         <div>
//             <button onClick={toggleShow}>{show ? "Hide" : "Show"}</button>
//             {show && <h2>Hide Message</h2>}
//         </div>
//     );
// }
// export default ShowHide;




// import React, { useState } from "react";
// function ShowMessage() {
//     const [message, setMessage] = useState("Hello!")
//     const toggleShow = () => {
//         setMessage(!message);
//     };
//     return (
//         <div>
//             <button onClick={toggleShow}>{message ? "Click" : "Clicked"}</button>
//             <h2>{message
//                ? "Hello where are you"
//                : "Welcome to here" }
//             </h2>
//         </div>
//     );
// }
// export default ShowMessage;



// import React, { useState } from "react";
// function ShowMessage() {
//     const [show, setShow] = useState(true);
//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>{show ? "Click" : "Clicked"}</button>
//             <h2>{show ? "Hello where are you" : "Welcome to here" }</h2>
//         </div>
//     );
// }
// export default ShowMessage;


// import React, { useState } from "react";
// function ShowMessage() {
//     const [show, setShow] = useState(true);
//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>{show ? "Click" : "Clicked"}</button>
//             <h2>{show ? "Helloo" : "How are you ? "}</h2>
//         </div>
//     );
// }
// export default ShowMessage;



// import React, { useState } from "react";
// function Counter() {
//     const[count, setCount] = useState(0);
//     return (
//         <div>
//             <h2>Count : {count}</h2>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <button onClick={() => setCount(count - 1)}>Decrease</button>
//         </div>
//     );
// }
// export default Counter;


// import React, { useState } from "react";
// function ShowHide() {
//     const[show, setShow] = useState(true);
//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
//             {show && <h2>Hide Message.</h2>}
//         </div>
//     );
// }
// export default ShowHide;

// import React, { useState } from "react";
// function ShowMessage() {
//     const[message, setMessage] = useState(true);
//     return (
//         <div>
//             <button onClick={() => setMessage(!message)}>{message ? "Click" : "Clicked"}</button>
//             {message ? "Helloo" : "How are you"}
//         </div>
//     );
// }
// export default ShowMessage;