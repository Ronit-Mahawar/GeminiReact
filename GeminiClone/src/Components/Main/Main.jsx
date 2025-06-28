import React, { useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {

  const [input,setInput]=useState("");
  const [recentPrompt,setRecentPrompt]=useState("");
  const [prevPrompt,setPreviousPrompt]=useState([]);
  const [showResult,setShowResult]=useState(false);
  const [loading,setLoading]=useState(false);
  const [resultData,setResultData]=useState("");  

  

   
  

  
  const payload={
     
    "contents": [
      {
        "parts": [
          {
            "text": input
          }
        ]
      }
    ]
  
  }
  
  const AskQuestion=async()=>{
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
    setResultData(response.candidates[0].content.parts[0].text)
    console.log(resultData)
    setLoading(false)
    setInput("")
  }
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
         {!showResult?
         <>
           <div className="greet">
            <p><span>Hello,Dev.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Breifly summarize this concept</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstorme team bonding activites for our trip</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest beautiful places to see on a upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Imporve the readabliy of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>

          </div>
         </>:<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
          </div>
         </div>
         }
          


          <div className="main-bottom">
            <div className="search-box">
              <input type="text"  placeholder='Enter a prompt' value={input} onChange={(event)=>{setInput(event.target.value)}} />
              
              <div>
                <img src={assets.gallery_icon}  alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} onClick={AskQuestion} alt="" />
              </div>
            </div>
            <p className="bottom-info">
                Gemini Apps are continuously evolving and may sometimes give inaccurate, offensive, or inappropriate information that doesn't represent Google's views.
            </p>
            
          </div>
        </div>
    </div>
  )
}

export default Main