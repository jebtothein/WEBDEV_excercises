import { useState } from "react";
import heroImage from '../assets/images/image-hero-desktop.png';
import checvrondown from '../assets/images/icon-arrow-down.svg';
import todolist from '../assets/images/icon-todo.svg';
import calendar from '../assets/images/icon-calendar.svg';
import reminders from '../assets/images/icon-reminders.svg';
import planning from '../assets/images/icon-planning.svg';
import sponsor1 from '../assets/images/client-audiophile.svg'
import sponsor2 from '../assets/images/client-databiz.svg'
import sponsor3 from '../assets/images/client-maker.svg'
import sponsor4 from '../assets/images/client-meet.svg'

export const Desktop_Components = () => {
  const [showFeatures, setShowFeatures] = useState(false); // this basically to show the state of the value
  const [showCompany, setShowCompany] = useState(false);   // In thids case, when the useState condition is false, hence we show the dropdown
                                                           // If the useState condition wasn't false, hence the dropdown will be hidden.
  return (
    <div>
      <div className="toptaskbar">
        <div className="toptaskbarleft">
          <h1>snap</h1>

          <div className="taskbar1">
            <button className="featuresdroplabel" onClick={() => setShowFeatures((prev) => !prev)}>
              Features <img src={checvrondown} alt="arrowchevrondown" />
            </button>
            <div className={`featuresdropselection ${showFeatures ? "slide-in" : "slide-out"}`}> {/* basically the featuresdropselection is to connect to the css (the className) */}
              <button className="choice1"><img src={todolist} /> ‎ㅤ To do list</button>  {/* the ${showFeatures ? "slide-in" : "slide-out"} part is used as a conditional class */}
              <button className="choice2"><img src={calendar} /> ‎ㅤ Calendar</button>    {/* if the show feature is true,hence slide in the class, if the show feature is flase, hence slide out */}
              <button className="choice3"><img src={reminders} /> ‎ㅤ Reminders</button>
              <button className="choice4"><img src={planning} /> ‎ㅤ Planning</button>
            </div>
          </div>

          <div className="taskbar2">
            <button className="companydroplabel" onClick={() => setShowCompany((prev) => !prev)}> {/* This function applies the same thing as the one before */}
              Company <img src={checvrondown} alt="arrowchevrondown" />
            </button>
            <div className={`featuresdropselection ${showCompany ? "slide-in" : "slide-out"}`}>
              <button className="choiceone1">History</button>
              <button className="choicetwo2">Our team</button>
              <button className="choicethree3">Blog</button>
            </div>
          </div>

          <div className="taskbar3">
            <button className="careers">Careers</button>
          </div>

          <div className="taskbar4">
            <button className="about">About</button>
          </div>
        </div>

        <div className="toptaskbarright">
          <div className="taskbar5">
            <button className="login">Login</button>
          </div>
          <div className="taskbar6">
            <button className="register">Register</button>
          </div>
        </div>
      </div>

      <div className="mainpage">
        <div className="maincontent">
          <h1>Make remote work</h1>
          <h3>
            Get your team in sync, no matter your location. Streamline processes, create
            team rituals, and watch productivity soar
          </h3>
          <button className="learmorebutton">Learn more</button>
          <div>ㅤ </div>
          <div>ㅤ </div>
            <div className="sponsors">
                <img src={sponsor1} alt="sponsor" />
                <img src={sponsor2} alt="sponsor" />
                <img src={sponsor3} alt="sponsor" />
                <img src={sponsor4} alt="sponsor" />
            </div>
        </div>

        <div className="person">
          <img src={heroImage} alt="person holding laptop" />
        </div>

      </div>
    </div>
  );
};

export default Desktop_Components;



