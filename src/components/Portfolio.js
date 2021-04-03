import React from 'react';
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import taskManager from "../images/task-manager.png";
import portfolio from "../images/portfolio.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

//REACT POPUPBOX
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = ()=> {

  //netflix
  const openPopupboxNetflix =()=>{
    const content =(
      <>
      <img className="portfolio-image-popupbox" src={netflix} alt=""netflix clone project/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <b>GitHub:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
      </>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigNetflix={
    titleBar:{
      enable:true,
      text: "Netflix clone project"
    },
    fadeIn:true,
    fadeInSpeed:500
  }


  //city guide app
  const openPopupboxCityGuide =()=>{
    const content =(
      <>
      <img className="portfolio-image-popupbox" src={cityGuide} alt="city guide project"/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <b>Demo:</b><a className="hyper-link" onClick={()=>window.open("https://city-guide-app-project.herokuapp.com/")}>https://city-guide-app-project.herokuapp.com/</a>
      <br />
      <b>GitHub:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
      </>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigCityGuide={
    titleBar:{
      enable:true,
      text: "City Guide project"
    },
    fadeIn:true,
    fadeInSpeed:500
  }


   //Portfolio project
   const openPopupboxPortfolio =()=>{
    const content =(
      <>
      <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio project"/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <b>Demo:</b><a className="hyper-link" onClick={()=>window.open("https://city-guide-app-project.herokuapp.com/")}>https://city-guide-app-project.herokuapp.com/</a>
      <br />
      <b>GitHub:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
      </>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigPortfolio={
    titleBar:{
      enable:true,
      text: "Portfolio React and Material UI Project"
    },
    fadeIn:true,
    fadeInSpeed:500
  }

   //Portfolio project
   const openPopupboxTaskManager =()=>{
    const content =(
      <>
      <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager Project"/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <b>Demo:</b><a className="hyper-link" onClick={()=>window.open("https://city-guide-app-project.herokuapp.com/")}>https://city-guide-app-project.herokuapp.com/</a>
      <br />
      <b>GitHub:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
      </>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigTaskManager={
    titleBar:{
      enable:true,
      text: "React and Redux Task Manager Project"
    },
    fadeIn:true,
    fadeInSpeed:500
  }





  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
        <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
          <img className="portfolio-image" src={netflix} alt="Netflix clone project.."/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
        

        <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
          <img className="portfolio-image" src={cityGuide} alt="City Guide Project.."/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

        </div>
        

        <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
          <img className="portfolio-image" src={portfolio} alt="React project"/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

          </div>
        

        <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
          <img className="portfolio-image" src={taskManager} alt="Task manager react and redux project.."/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix}/>
      <PopupboxContainer {...popupboxConfigCityGuide}/>
      <PopupboxContainer {...popupboxConfigPortfolio}/>
      <PopupboxContainer {...popupboxConfigTaskManager}/>
    </div>
  )
}

export default Portfolio
