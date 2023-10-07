import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AiFillGithub,AiFillLinkedin,AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import './App.css'

function App() {

  return (
    <>
      <div className="px-4 py-5 my-5 text-center container-fluid">
        <img className="d-block mx-auto mb-4" src="img.png" alt="" width="100" height="100" />
        <h1 className="display-5 fw-bold text-body-emphasis">Hello There !</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">My name is <b>Arjun.P</b> and I'm a CS(AI) student in MBCET,Trivandrum,Kerala.<br/> Welcome to my part of internet! </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="https://github.com/arjun2004" className="btn btn-lg btn-light fw-bold border-white bg-white rounded-pill"><AiFillGithub/>&nbsp;Github</a>
            <a href="https://www.linkedin.com/in/arjun-p-bb5920242" className="btn btn-lg btn-light fw-bold border-white bg-white rounded-pill"><AiFillLinkedin/>&nbsp;LinkedIn</a>
            <a href="mailto:arjunajju2004@gmail.com" className="btn btn-lg btn-light fw-bold border-white bg-white rounded-pill"><AiOutlineMail/>&nbsp;Email</a>
            <a href="tel:+919074353513" className="btn btn-lg btn-light fw-bold border-white bg-white rounded-pill"><AiFillPhone/>&nbsp;Mobile no.</a>
            
          </div>
        </div>
      </div>
      
      <div className='footer'>Made With ❤️ using React + Vite + Bootstrap</div>
      
      
    </>
  )
}

export default App
