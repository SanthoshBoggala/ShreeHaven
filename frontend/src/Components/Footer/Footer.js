import React from 'react'
import './footer.css'
import { IonIcon } from '@ionic/react'
import { logoTwitter, logoFacebook, logoYoutube, logoInstagram } from 'ionicons/icons';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className='col-md-6 row footer1'>
          <div className='col-md-4'>
            <div className='footerMainText'>ABOUT</div>
            <div className='footerText'>Contact Us</div>
            <div className='footerText'>Careers</div>
            <div className='footerText'>Shree Haven Stories</div>
            <div className='footerText'>Corporate Information</div>
          </div>
          <div className='col-md-4'>
            <div className='footerMainText'>HELP</div>
            <div className='footerText'>Payments</div>
            <div className='footerText'>Shpping</div>
            <div className='footerText'>Cancellation</div>
            <div className='footerText'>FAQ</div>
            <div className='footerText'>Report Infringement</div>
          </div>
          <div className='col-md-4'>
            <div className='footerMainText'>CONSUMER POLICY</div>
            <div className='footerText'>Cancellation & Returns</div>
            <div className='footerText'>Terms of Use</div>
            <div className='footerText'>Security</div>
            <div className='footerText'>Privacy</div>
          </div>
        </div>
        <div className='co-md-6 row footer2'>
          <div className='col-md-6'>
            <div className='footerMainText'>Mail Us:</div>
            <div className='footerText'>ShreeHaven Private Limited,</div>
            <div className='footerText'>Buildings Aiyaaa, Kempapura &</div>
            <div className='footerText'>Outer Ring Road,</div>
            <div className='footerText'>Bangalore, 517125</div>
            <div className='footerText'>Karnataka, India</div>
          </div>
          <div className='col-md-6'>
            <div className='footerMainText'>Social:</div>
            <div className='icons'>
              <div className='footerText'> <IonIcon icon={logoFacebook} />  </div>
              <div className='footerText'>  <IonIcon icon={logoTwitter} /> </div>
              <div className='footerText'>  <IonIcon icon={logoYoutube} /> </div>
              <div className='footerText'>  <IonIcon icon={logoInstagram} /> </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerBottom'>
        <div>@2023-2024 Shreehaven.com</div>
      </div>
    </>
  )
}

export default Footer
