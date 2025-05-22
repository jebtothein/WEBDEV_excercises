import React, { useEffect, useState } from "react";
import heroImage from '../assets/images/image-hero-desktop.png';
import heroImage2 from '../assets/images/image-hero-mobile.png';
import checvrondown from '../assets/images/icon-arrow-down.svg';
import todolist from '../assets/images/icon-todo.svg';
import calendar from '../assets/images/icon-calendar.svg';
import reminders from '../assets/images/icon-reminders.svg';
import planning from '../assets/images/icon-planning.svg';
import sponsor1 from '../assets/images/client-audiophile.svg';
import sponsor2 from '../assets/images/client-databiz.svg';
import sponsor3 from '../assets/images/client-maker.svg';
import sponsor4 from '../assets/images/client-meet.svg';
import menubutton from '../assets/images/icon-menu.svg';
import closemenu from '../assets/images/icon-close-menu.svg'

export const Desktop_Components = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 376);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(""); // for sliding animation classes

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 376);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openMenu = () => {
    setShowMobileMenu(true);
    setMenuAnimation("slideInRight");
  };

  const closeMenu = () => {
    setMenuAnimation("slideOutLeft");
    setTimeout(() => {
      setShowMobileMenu(false);
      setMenuAnimation("");
    }, 300);
  };

  return (
    <div className={isSmallScreen ? "small-screen" : ""}>
      <div className="toptaskbar">
        <div className="toptaskbarleft">
          <h1>snap</h1>

          {/* Features dropdown */}
          <div className="taskbar1">
            <button
              className="featuresdroplabel"
              onClick={() => setShowFeatures((prev) => !prev)}
            >
              Features <img src={checvrondown} alt="arrowchevrondown" />
            </button>
            <div
              className={`featuresdropselection ${
                showFeatures ? "slide-in" : "slide-out"
              }`}
            >
              <button className="choice1">
                <img src={todolist} alt="To do list icon" /> To do list
              </button>
              <button className="choice2">
                <img src={calendar} alt="Calendar icon" /> Calendar
              </button>
              <button className="choice3">
                <img src={reminders} alt="Reminders icon" /> Reminders
              </button>
              <button className="choice4">
                <img src={planning} alt="Planning icon" /> Planning
              </button>
            </div>
          </div>

          {/* Company dropdown */}
          <div className="taskbar2">
            <button
              className="companydroplabel"
              onClick={() => setShowCompany((prev) => !prev)}
            >
              Company <img src={checvrondown} alt="arrowchevrondown" />
            </button>
            <div
              className={`featuresdropselection ${
                showCompany ? "slide-in" : "slide-out"
              }`}
            >
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

          {/* Mobile Menu Button */}
          <div className="menu mobile-only">
            <button className="menudroplable" onClick={openMenu}>
              <img src={menubutton} alt="menu button" />
            </button>
          </div>

          {/* Mobile Slide Menu */}
          {showMobileMenu && (
            <div className={`mobile-slide-menu ${menuAnimation}`}>
              <button className="close-button" onClick={closeMenu}>
                <img src={closemenu} alt="close menu icon" />
              </button>

              <div className="mobile-menu-section">
                <button
                  onClick={() => setShowFeatures((prev) => !prev)}
                  className="featuresdroplabel"
                >
                  Features <img src={checvrondown} alt="arrow" />
                </button>
                {showFeatures && (
                  <div className="featuresdropselection mobile">
                    <button className="choice1">
                      <img src={todolist} alt="todo icon" /> To do list
                    </button>
                    <button className="choice2">
                      <img src={calendar} alt="calendar icon" /> Calendar
                    </button>
                    <button className="choice3">
                      <img src={reminders} alt="reminders icon" /> Reminders
                    </button>
                    <button className="choice4">
                      <img src={planning} alt="planning icon" /> Planning
                    </button>
                  </div>
                )}
              </div>

              <div className="mobile-menu-section">
                <button
                  onClick={() => setShowCompany((prev) => !prev)}
                  className="companydroplabel"
                >
                  Company <img src={checvrondown} alt="arrow" />
                </button>
                {showCompany && (
                  <div className="featuresdropselection mobile">
                    <button className="choiceone1">History</button>
                    <button className="choicetwo2">Our team</button>
                    <button className="choicethree3">Blog</button>
                  </div>
                )}
              </div>

              <div className="mobile-menu-section">
                <button className="careers">Careers</button>
                <button className="about">About</button>
              </div>

              <div className="mobile-menu-section">
                <button className="login">Login</button>
                <button className="register">Register</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mainpage">
        <div className="maincontent">
          <h1>Make remote work</h1>
          <h3>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar
          </h3>
          <button className="learnmorebutton">Learn more</button>

          <div className="sponsors">
            <img src={sponsor1} alt="sponsor audiophile" />
            <img src={sponsor2} alt="sponsor databiz" />
            <img src={sponsor3} alt="sponsor maker" />
            <img src={sponsor4} alt="sponsor meet" />
          </div>
        </div>

        <div className="person">
          <img src={heroImage} alt="person holding laptop" />
        </div>

        <div className="person2">
          <img src={heroImage2} alt="mobile version" />
        </div>
      </div>
    </div>
  );
};

export default Desktop_Components;










