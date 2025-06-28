// import { createContext } from "react";
// import main from "../config/gemini";

// export const Context=createContext();
// const ContextProvider= (props)=>{

//    const onSent =async(Prompt)=>{
//      await main(prompt)
//    }
//    onSent("what is react js")


//    const contextValue={

//    }
//    return(
//     <Context.Provider value={contextValue}>
//         {props.children}
//     </Context.Provider>
//    )
// }
// export default ContextProvider;
// import { createContext, useState } from "react";
// import main from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = ({ children }) => {
//   const [response, setResponse] = useState("");

//   const onSent = async (prompt) => {
//     let text = "";
//     const stream = await main(prompt);

//     for await (const chunk of stream) {
//       text += chunk.text;
//     }
//     setResponse(text);
//   };

//   const contextValue = {
//     onSent,
//     response,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;
// import { createContext, useState, useEffect } from "react";
// import main from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = ({ children }) => {
//   const [response, setResponse] = useState("");

//   const onSent = async (prompt) => {
//     let text = "";
//     const stream = await main(prompt);

//     for await (const chunk of stream) {
//       text += chunk.text;
//     }

//     setResponse(text);
//   };

//   // ✅ Automatically call onSent once when the component mounts
//   useEffect(() => {
//     onSent("what is React JS");
//   }, []);

//   const contextValue = {
//     onSent,
//     response,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;
// ✅ Always import these hooks
// import { createContext, useState, useEffect } from "react";
// import main from "../config/gemini";

// // ✅ Named export
// export const Context = createContext();

// // ✅ Functional component for Provider
// const ContextProvider = ({ children }) => {
//   const [response, setResponse] = useState("");

//   const onSent = async (prompt) => {
//     let text = "";
//     const stream = await main(prompt);
//     for await (const chunk of stream) {
//       text += chunk.text;
//     }
//     setResponse(text);
//   };

//   useEffect(() => {
//     // Comment this in dev if hitting quota
//      onSent("What is React JS?");
//   }, []);

//   const contextValue = {
//     onSent,
//     response,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// };

// // ✅ Default export must be the component
// export default ContextProvider;


