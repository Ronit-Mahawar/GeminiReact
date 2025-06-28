import React, { useState,useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Main = () => {
  const { prevPrompt,setPreviousPrompt } = useContext(Context);
  const { input,setInput } = useContext(Context);
  const { recentPrompt,setRecentPrompt } = useContext(Context);
  const { showResult,setShowResult } = useContext(Context);
  const { loading,setLoading } = useContext(Context);
  const { resultData,setResultData } = useContext(Context);
  const {AskQuestion}=useContext(Context);

  

  // const delayPara=(index,nextWord)=>{
  //   setTimeout(function(){
  //     setResultData(prev=>prev+nextWord)
  //   },75*index)
  // }

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
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:<>
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            
            </>
            }
            
          </div>
         </div>
         }
          


          <div className="main-bottom">
            <div className="search-box">
              <input type="text"  placeholder='Enter a prompt' value={input} onChange={(event)=>{setInput(event.target.value)}} />
              
              <div>
                <img src={assets.gallery_icon}  alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} onClick={()=>AskQuestion()} alt="" />
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