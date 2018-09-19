import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import { MainLayout } from './modules/layout/containers'
import { Home } from './modules/home/containers'

const Routes = () => (
    <Router>
        <MainLayout>
            <nav class="hide-on-small-only">
                <ul class="side-nav fixed section table-of-contents">
                    <li class="logo"><a id="logo-container" aria-label="Navigate to the beginning of the page" href="#intro" class="brand-logo teal-text active">
                        <h1>Munkhdelger Buyandalai<span class="brown-text light">Full Stack Developer</span></h1></a></li>
                    <li class="bold"><a aria-label="Navigate to the About section" href="/" class="waves-effect waves-dark teal-text"><i class="mdi-social-person small"></i><span>About</span></a></li>
                    <li class="bold"><a aria-label="Navigate to the Experience section" href="#experience" class="waves-effect waves-dark cyan-text"><i class="mdi-action-trending-up small"></i><span>Experience</span></a></li>
                    <li class="bold"><a aria-label="Navigate to the Projects section" href="#projects" class="waves-effect waves-dark indigo-text"><i class="mdi-av-web small"></i><span>Projects</span></a></li>
                    <li class="bold"><a aria-label="Navigate to the Skills section" href="#skills" class="waves-effect waves-dark purple-text"><i class="mdi-av-equalizer small"></i><span>Skills</span></a></li>
                    <li class="bold"><a aria-label="Navigate to the Awards section" href="#awards" class="waves-effect waves-dark red-text"><i class="mdi-action-grade small"></i><span>Awards</span></a></li>
                    <li class="bold"><a aria-label="Navigate to the Education section" href="#education" class="waves-effect waves-dark orange-text"><i class="mdi-social-school small"></i><span>Education</span></a></li>
                    <li class="bold"><a aria-label="Navigate to the Contact section" href="#contact" class="waves-effect waves-dark brown-text"><i class="mdi-content-mail small"></i><span>Contact</span></a></li>
                    <li class="bold"><a aria-label="Open Andrew's resume in a new tab" href="https://docs.google.com/document/d/1evlvmAcOmPTttl1isyX_UcQbLO5pK8OwB4Rs2Sv4riY" target="_blank" class="waves-effect waves-dark grey-text text-darken-3"><i class="mdi-action-description small"></i><span>Resume</span></a></li>
                </ul>
            </nav>
                <Route key="home" exact path="/" component={Home} />
                <Route key="about" exact path="/about" component={About} />
                
        </MainLayout>
    </Router>
)
const About = () => (
    <div>
      <h2>About</h2>
    </div>
  );


export default Routes;