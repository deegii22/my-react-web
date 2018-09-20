import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import { MainLayout } from './modules/layout/containers'
import { Home } from './modules/home/containers'

const Routes = () => (
    <Router>
        <MainLayout>
            {/* <div id="pt" className="canvas"></div> */}
            <div className="menu">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/skills">Skills</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/experience">Experience</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/education">Education</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <Route key="home" exact path="/" component={Home} />
                <Route key="skills" exact path="/skills" component={Skills} />
                <Route key="experience" exact path="/experience" component={Experience} />
                <Route key="education" exact path="/education" component={Education} />
            </div>
                
        </MainLayout>
    </Router>
)
const Skills = () => (
    <div>
      <h2>Skills</h2>
    </div>
);

const Experience = () => (
    <div>
      <h2>Experience</h2>
    </div>
);

const Education = () => (
    <div>
      <h2>Education</h2>
    </div>
);

export default Routes;