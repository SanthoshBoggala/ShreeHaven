import React from 'react'
import './aboutPage.css'

const AboutPage = () => {
  return (
    <div className='minHeight aboutPage'>
      <div className="whoWeAre row">
        <div className='col-md-6 col-12'>
          <div className='lightBorder'></div>
          <h2 className='bigText'>Who We Are</h2>
          <div className='normalText'>
            Shreehaven is a leading eCommerce platform offering a wide range of
            high-quality clothing and fashion items for men and women. Our mission
            is to provide our customers with the best shopping experience possible.
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <img
            src='https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/about1.jpg'
            alt='about us'
            className='img-fluid p-5'
          />
        </div>
      </div>
      <div className="ourTeam">
        <div className='lightBorder'></div>
        <h2 className='bigText'>Our Team</h2>
        <div className='normalText'>
        At Shree Haven, we are proud of our diverse and talented team. Each member brings unique skills and expertise, contributing to our shared mission of providing exceptional service and quality products to our customers. Get to know the faces behind our brand <br />
          Meet the passionate individuals behind Shree Haven:
        </div>
        <div className="teamMembers">
          <h3 className='bigText'>Our Team Members</h3>
          <div className='teams row'>
            <div className='oneTeam col-md-4 col-12 '>
              <img
                src='https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/team1.png'
                alt='team member'
                className='img-fluid teamImage'
              />
              <div className='headName'>Harvey Spector <br /> Founder & CEO</div>
            </div>
            <div className='oneTeam col-md-4 col-12'>
              <img
                src='https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/team2.png'
                alt='team member'
                className='img-fluid teamImage'
              />
              <div className='headName'>Jessica Pearson <br /> COO</div>
            </div>
            <div className='oneTeam col-md-4 col-12'>
              <img
                src='https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/team3.png'
                alt='team member'
                className='img-fluid teamImage'
              />
              <div className='headName'>Rachel Zain <br /> Marketing Head</div>
            </div>
            <div className='oneTeam col-md-4 col-12'>
              <img
                src='https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/team4.png'
                alt='team member'
                className='img-fluid teamImage'
              />
              <div className='headName'>Luise Litt <br /> Lead Developer</div>
            </div>
            <div className='oneTeam col-md-4 col-12'>
              <img
                src='https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/team5.png'
                alt='team member'
                className='img-fluid teamImage'
              />
              <div className='headName'>Katrina Bennett <br /> Intern Designer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row features">
        <div className='lightBorder m-3'></div>
        <h2 className='bigText'>Our Commitments</h2>
        <div className="col-md-3">
          <div className="feature">
            <img src="https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/f1.png" className='img-fluid featureImg' alt="Worldwide Shipping" />
            <h3>Worldwide Shipping</h3>
            <p>We offer worldwide shipping to ensure our customers can enjoy our products no matter where they are.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature">
            <img src="https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/f2.png" className='img-fluid featureImg' alt="Best Quality" />
            <h3>Best Quality</h3>
            <p>Our products are carefully selected to guarantee the best quality for our customers.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature">
            <img src="https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/f3.png" className='img-fluid featureImg' alt="Best Offers" />
            <h3>Best Offers</h3>
            <p>Enjoy amazing discounts and special offers on a wide range of products.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature">
            <img src="https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/f4.png" className='img-fluid featureImg' alt="Secure Payments" />
            <h3>Secure Payments</h3>
            <p>Shop with confidence knowing that your payments are secure and protected.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
