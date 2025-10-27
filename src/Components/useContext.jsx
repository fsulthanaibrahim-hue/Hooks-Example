//   //--------------------------UserContext(Context + Provider)----------------------
// import React, { createContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const [userName, setUserName] = useState("Sulthana");
//    return (
//     <UserContext.Provider value={{ userName, setUserName }}>
//         {children}
//     </UserContext.Provider>
//    );
// };


//    //----------------------------------Language Context------------------------------
// import React, {createContext, useState } from "react";
// export const LanguageContext = createContext();
// export const LanguageProvider = ({ children }) => {
//     const [language, setLanguage] = useState("en");
//     const toggleLanguage = () => {
//         setLanguage(language === "en" ? "ml" : "en");
//     };
//     return (
//         <LanguageContext.Provider value={{ language, toggleLanguage }}>
//             {children}
//         </LanguageContext.Provider>
//     );
//  };


//   //---------------------------------------Counter Context--------------------------
// import React, { createContext, useState } from "react";
// export const CounterContext = createContext();
// export const CounterProvider = ({ children }) => {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount((prev) => prev + 1);
//     const decrement = () => setCount((prev) => prev - 1);
//     return (
//         <CounterContext.Provider value={{ count, increment, decrement }}>
//             {children}
//         </CounterContext.Provider>
//     );
// };



//  //---------------------------------Login Status--------------------------------------
// import React, { createContext, useState } from "react";
// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const login = () => setIsLoggedIn(true);
//     const logout = () => setIsLoggedIn(false);
//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };











// import React, { createContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const [userName, setUserName] = useState("Sulthana");
//    return (
//     <UserContext.Provider value={{ userName, setUserName }}>
//         {children}
//     </UserContext.Provider>
//    );
// };


// import React, { createContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const [userName, setUserName] = useState("Dua");
//     return (
//         <UserContext.Provider value={{ userName, setUserName }}>
//             {children}
//         </UserContext.Provider>
//     );
// }


// import React, { createContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const [userName, setUserName] = useState("Zahra");
//     return (
//         <UserContext.Provider value={{ userName, setUserName }}>
//             {children}
//         </UserContext.Provider>
//     );
// }



// import React, { createContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const [userName, setUserName] = useState("Aysha");
//     return (
//         <UserContext.Provider value={{ userName, setUserName }}>
//             {children}
//         </UserContext.Provider>
//     )
// }



// import React, { createContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const [userName, setUserName] = useState("Dua");
//     return (
//         <UserContext.Provider value={{ userName, setUserName }}>
//             {children}
//         </UserContext.Provider>
//     );
// }




// import React, { createContext, useContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const[userName, setUserName] = useState("Sulthana");
//     return (
//         <UserContext.Provider value={{ userName, setUserName }}>
//             {children}
//         </UserContext.Provider>
//     );
// }




// import React, { createContext, useState } from "react";
// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const login = () => setIsLoggedIn(true);
//     const  logout = () => setIsLoggedIn(false);
//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }



// import React, { createContext, useState } from "react";
// export const MessageContext = createContext();
// export const MessageProvider = ({ Children }) => {
//     const [showMessage, setShowMessage] = useState(true);
//     const toggleMessage = () => setShowMessage(!showMessage);
//     return (
//         <MessageContext.Provider value={{ showMessage, toggleMessage }}>
//             {Children}
//         </MessageContext.Provider>
//     );
// };


// import React, { createContext, useState } from "react";
// export const UserContext = createContext();
// export const UserProvider = ({ children }) => {
//     const [userName, setUserName] = useState("Sulthana");
//     return (
//         <UserContext.Provider value={{ userName, setUserName }}>
//             {children}
//         </UserContext.Provider>
//     );
// }







