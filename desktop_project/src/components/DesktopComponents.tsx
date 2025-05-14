import { useState } from "react"
import heroImage from '../assets/images/image-hero-desktop.png';


export const Desktop_Components = () => {
  const [showFeatures, setShowFeatures] = useState(false)   //tracks whether the "Features" dropdown is visible.
  const [showCompany, setShowCompany] = useState(false)     //tracks whether the "Company" dropdown is visible.
  return (
    <div>
        <div className="toptaskbar">
            <h2>Snap</h2>
            <div className="taskbar1">
                <button className="featuresdroplabel" onClick={() => setShowFeatures((prev) => !prev)}>
                    {/*
                        This function as the logic track whenever it should be visible or not
                        if it was flase (theres input), hence menu was shown, the same the opposite
                    */}
                    Features
                </button>

                {showFeatures && (
                    <div className="featuresdropselection">
                        <button className="choice1">To do list</button>
                        <button className="choice2">Calendar</button>
                        <button className="choice3">Reminders</button>
                        <button className="choice4">Planning</button>
                    </div>)}
            </div>

            <div className="taskbar2">
                <button className="companydroplabel" onClick={() => setShowCompany((prev) => !prev)}>
                    Company
                </button>
            
                {showCompany && (
                    <div className="featuresdropselection">
                        <button className="choiceone1">History</button>
                        <button className="choicetwo2">Our team</button>
                        <button className="choicethree3">Blog</button>
                    </div>)}
            </div>

            <div className="taskbar3">
                <button className="careers">
                    Careers
                </button>
            </div>

            <div className="taskbar4">
                <button className="about">
                    About
                </button>
            </div>

            <div className="taskbar5">
                <button className="login">
                    Login
                </button>
            </div>

            <div className="taskbar6">
                <button className="register">
                    Register
                </button>
            </div>

        </div>

        <div className= "mainpage">
            <h1> Make remote work </h1>
            <h3> Get your team in sync, no matter your location. </h3>
            <h3> Streamline processes, create team rituals,</h3>
            <h3> and watch productivity soar</h3>

            <div className = "person">
                <img src={heroImage} alt="person holding laptop" />
            </div>

            <button className="learmorebutton">
                    Learn more
            </button>
        </div>
     </div>
  )}

export default Desktop_Components;


