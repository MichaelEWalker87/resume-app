import React, { useState, useEffect } from 'react';
import Route from "./components/Route";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import LogoAnimation from "./pages/Animation/LogoAnimation";
import SignatureAnimation from "./pages/Animation/SignatureAnimation";
import AboutMe from './pages/AboutMe/AboutMe';
import WorkHistory from "./pages/WorkHistory/WorkHistory";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import ContactMe from "./pages/ContactMe/ContactMe";
import LoadIcon from "./components/LoadIcon/LoadIcon"
import './App.scss'; 


function App() {
    const [showHeaderFooter, setShowHeaderFooter] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        const animationDuration = 1;

        setTimeout(() => {
            setShowHeaderFooter(true);
        }, 4000);

        setTimeout(() => {
            setShowAnimation(true);
        }, animationDuration);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };

    }, []);

    const checkScreenSize = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const displayWarning = (screenWidth < 481 || screenHeight < 440) ||
          (screenWidth >= 481 && screenWidth <= 649) ||
          (screenWidth >= 650 && screenHeight <= 465) ||
          (screenWidth >= 865 && screenHeight <= 475) ||
          (screenWidth >= 1125 && screenHeight <= 495) ||
          (screenWidth >= 1365 && screenHeight <= 585);
        
        setShowAnimation(false);
        setShowWarning(displayWarning);
      };

    return (
        <div className="container">
            {showWarning ? (
                <div className='error-mobile-sizing'>
                    <div className="warning-message">
                        Hey there!  I'm still buffing this corner of my portfolio for smaller screens. For the full, shiny experience, please adjust your screen size and give it another go. Or, feel free to check out my LinkedIn profile or hop over to Calendly to book a meeting with me directly!                    </div>
                    <Footer /> 
                    <LoadIcon title="Size Error"/> 
                </div>
            ) : (
                <>
                    <div className={`${showAnimation ? '' : 'animate-done-logo'}`}>
                        <LogoAnimation />
                    </div>
                    {showHeaderFooter && <Header />}
                    { showHeaderFooter &&
                        <div>
                            <Route path="/">
                                <AboutMe />
                            </Route>
                            <Route path="/workhistory">
                                <WorkHistory />
                            </Route>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/contactme">
                                <ContactMe />
                            </Route>
                        </div>
                    }
                    <div className={`${showAnimation ? '' : 'animate-done-logo'}`}>
                        <SignatureAnimation /> 
                    </div>
                    {showHeaderFooter && <Footer />} 
                </>
            )}
        </div>
    );
}

export default App;
