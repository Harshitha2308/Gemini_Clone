import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
  const {onSent,recentPrompt,showResults,loading,resultData,setInput,input}=useContext(Context)
  const handleCardClick = (promptText) => {
    setInput(promptText);};
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_iconn} alt="" />
      </div>
      <div className="main-container">
        {!showResults?
        <>
        <div className="greet">
          <p><span>Hello,Sai.</span></p>
          <p>How can i help you</p>
        </div>
        <div className="cards">
          <div className="card"
          onClick={() =>
            handleCardClick("Suggest Some Place To Visit In Kerala")
          }>
            <p>Suggest some beautiful places to go on a road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card"
          onClick={() =>
            handleCardClick(
              "Brainstorm team bonding activities for our work retreat"
            )
          }
          >
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card" onClick={() =>
									handleCardClick(
										"Brainstorm team bonding activities for our work retreat"
									)
								}>
            <p>Brainstrom eam bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card"
          onClick={() => 
            handleCardClick(
              "Create a Script for the youtube video about coding "
            )}>
            <p>Create a Script for the youtube video about coding</p>                <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>:
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-dat">
            <img src={assets.gemini_icon} alt="" />
            {/* {loading?
            <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :
            <p dangerouslySetInnerHTML={{__html:resultData}}>{resultData}</p>
          } */}
          {loading ?
          <div className="loader">
            <hr />
            <hr />
            <hr />
          </div>
          :
          <p dangerouslySetInnerHTML={{__html: resultData}}></p>
          }

          </div>
        </div>
        }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may dispaly inaccurate info, including about people,so double-check its response. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main