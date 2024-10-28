import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png' 
import instagram_icon from '../../assets/instagram_icon.png' 
import facebook_icon from '../../assets/facebook_icon.png' 


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help centere</li>
        <li>Gift cards</li>
        <li>media Centere</li>
        <li>Investor relations</li>
        <li>jobs</li>
        <li>privacy</li>
        <li>Legal Notices</li>
        <li>Coockie preference</li>
        <li>corporate information</li>
        <li>contact us</li>

      </ul>
      <p className='copyright-text'>@ 1999-2024 Netflix, Inc</p>
    </div>
  )
}

export default Footer