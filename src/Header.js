import React from 'react'
import logo from './assets/postando-logo-white.png'; // with import
import './Header.css'

export default function Header() {
  
   return (
      <div className="header">
         <img className="header__image" src={logo} alt='Postando Logo' />
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <linearGradient id="gradient" gradientTransform="rotate(90)">
               <stop className="main-stop" offset="20%" />
               <stop className="alt-stop" offset="100%" />
            </linearGradient>
            <path fill="url(#gradient)" fillOpacity="1" d="M0,256L48,224C96,192,192,128,288,112C384,96,480,128,576,144C672,160,768,160,864,170.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
         </svg>
         {/* <div className="header__navigation">
            <ul>
               <li className="item" >Today</li>
               <li className="item">Last Week</li>
               <li className="item">Last Month</li>
               <li className="item">Last Year</li>
            </ul>
         </div> */}
         </div>
   )
}
