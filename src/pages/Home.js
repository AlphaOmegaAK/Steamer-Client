import React from 'react';
import Steamer from '../images/SteamerFinal.png'

function Home() {


  return (
    <main>
      <div>

        <img src={Steamer} alt="logo steamer big bold caption you know what grinds my gears?" />
      </div>
      <div className="text-container">
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
        <button>Start Here</button>
      </div>
    </main>
  )
};

export default Home;
