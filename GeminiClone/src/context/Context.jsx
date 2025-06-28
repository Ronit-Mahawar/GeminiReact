import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [prevPrompt, setPreviousPrompt] = useState([]);
  const [input,setInput]=useState("");
  const [recentPrompt,setRecentPrompt]=useState("");
  const [showResult,setShowResult]=useState(false);
  const [loading,setLoading]=useState(false);
  const [resultData,setResultData]=useState(""); 

  const delayPara=(index,nextWord)=>{
    setTimeout(function(){
      setResultData(prev=>prev+nextWord)
    },75*index)
    }
  
  const AskQuestion=async(customPrompt = input)=>{
    
    const payload={
     
    "contents": [
      {
        "parts": [
          {
            "text": customPrompt
          }
        ]
      }
    ]
  
  }
    setRecentPrompt(customPrompt)
    setPreviousPrompt(prev=>[...prev,customPrompt])
    setResultData("")
    setLoading(true)
    setShowResult(true)
    let response= await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="+import.meta.env.VITE_GEMINI_API_KEY,
      {
        method:"POST",
        body:JSON.stringify(payload)
      }
    )

    response=await response.json();
    const result=response.candidates[0].content.parts[0].text;
    
    let responseArray=result.split("**");
    let newArray="";
    for(let i=0;i<responseArray.length;i++){
      if(i===0 || i%2!==1){
        newArray+=responseArray[i];
      }else{
        newArray+="<b>"+responseArray[i]+"</b>"
      }
    }
    console.log(newArray)
    let newArray2=newArray.split("*").join("</br>")
    let newResponsArray=newArray2.split(" ");
    for(let i=0;i<newResponsArray.length;i++){
      const nextWord=newResponsArray[i];
      delayPara(i,nextWord+" ")

    }
    console.log(result)
    console.log(responseArray)
    setResultData(newArray2)
    setLoading(false)
    setInput("")
  }

  const contextValue = {
    prevPrompt,
    setPreviousPrompt,
    input,setInput,
    recentPrompt,setRecentPrompt,
    showResult,setShowResult,
    loading,setLoading,
    resultData,setResultData,
    AskQuestion
    
    

  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

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


