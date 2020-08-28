import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../images/LandingPage.png'
import '../App.css';
import welcomeBlack from '../images/welcomeBlack.png'

function Home() {

  return (
    <main>
      <div className="img-container">
        <img src={welcomeBlack} alt="logo steamer big bold caption you know what grinds my gears?" />
      </div>

      <div className="text-container">



        <div className='card'>
          <p>
            Here at Steam Room we are happy to provide people not matter the age, gender, and ethnicity, with the ability to get what is weighing them down and off their minds.
            </p>
          <h4>
            <strong>In today’s world we tend to not have time for much of anything besides work.
<h3>Where does the self care go?</h3>
            </strong>
            Once we are done with our daily routines, possible fit in seeing a family member, friend, or taking care of a child or pet. There ends up not being time to actually talk through what is bothering us. Or how we like to call it here at Steam Room. <br /><strong>Grinding Our Gears</strong>
          </h4>


          <p> This is where Steamer comes in..
          We have no rules of what this space looks like.
          It’s yours to use as you see if, on any emotion,
topic, or event that is relevant to you. </p>
          <h4>New Around Here?</h4>
          <Link to='/register'><button className="btn third">Start Here</button></Link>
        </div>
      </div>
    </main>
  )
};

export default Home;
