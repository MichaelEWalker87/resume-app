import React, { useState, useEffect } from 'react';
import Route from "./components/Route";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import LogoAnimation from "./pages/Animation/LogoAnimation";
import SignatureAnimation from "./pages/Animation/SignatureAnimation"
import WorkHistory from "./pages/WorkHistory/WorkHistory";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import ContactMe from "./pages/ContactMe/ContactMe";
import './App.scss'; 


function App() {

    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        setShowHeader(true);
        }, 5000);
    }, []);

    return (
        <div className="container">
            <LogoAnimation />
            {showHeader && <Header />}
            { showHeader &&
                <div>
                    <Route path="/aboutme">
                        <WorkHistory />
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
            <SignatureAnimation /> 
            <Footer /> 
        </div>
    );
}

export default App;





