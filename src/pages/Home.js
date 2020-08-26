import React from 'react';
import { Link } from 'react-router-dom';
import Steamer from '../images/SteamerFinal.png'
import '../App.css';
function Home() {

  return (
    <main>
      <div className="img-container">
        <img src={Steamer} alt="logo steamer big bold caption you know what grinds my gears?" />
      </div>

      <div className="text-container">
        <div className='card'>
          <p>
            Steamer provides a safe haven for your everybody to be
            able to talk about what is on their mind and express themselves.
            In today’s society we tend to not have time for friends, family,
            let alone being able to see a therapist to talk things out.
        </p>


          <p> This is where Steamer comes in..
          We have no rules of what this space looks like.
          It’s yours to use as you see if, on any emotion,
topic, or event that is relevant to you. </p>
          <h4>New Around Here?</h4>
          <Link to='/register'><button>Start Here</button></Link>
        </div>
      </div>
    </main>
  )
};

export default Home;
