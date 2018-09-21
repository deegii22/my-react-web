import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import { MainLayout } from './modules/layout/containers'
import { Home } from './modules/home/containers'

const Routes = () => (
    <Router>
        <MainLayout>
            {/* <div id="pt" className="canvas"></div> */}
            <nav className="navbar navbar-light d-block d-sm-none">
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-react-web">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-react-web/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-react-web/experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/my-react-web/education">Education</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="menu d-none d-sm-block">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/my-react-web">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-react-web/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-react-web/experience">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-react-web/education">Education</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <Route key="home" exact path="/my-react-web" component={Home} />
                <Route key="skills" exact path="/skills" component={Skills} />
                <Route key="experience" exact path="/experience" component={Experience} />
                <Route key="education" exact path="/education" component={Education} />
            </div>
                
        </MainLayout>
    </Router>
)
const Skills = () => (
    <div>
      <h5>Languages</h5>
      <ul>
          <li>Java</li>
          <li>JavaScript</li>
      </ul>
      <h5>Web</h5>
      <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>jQuery</li>
          <li>AJAX</li>
          <li>JSP</li>
          <li>NodeJS</li>
          <li>AngularJS</li>
          <li>ReactJS</li>
      </ul>
      <h5>Web Services</h5>
      <ul>
          <li>RESTful</li>
          <li>SOAP</li>
          <li>JSON</li>
          <li>XML</li>
      </ul>
      <h5>Web/App Servers</h5>
      <ul>
          <li>WebSphere</li>
          <li>Tomcat</li>
          <li>Jetty</li>
          <li>IHS</li>
          <li>nginx</li>
      </ul>
      <h5>Frameworks</h5>
      <ul>
          <li>Spring</li>
          <li>Hibernate</li>
          <li>Jetty</li>
          <li>Angular</li>
          <li>Bootstrap</li>
      </ul>
      <h5>Databases</h5>
      <ul>
          <li>PL/SQL</li>
          <li>Oracle</li>
          <li>MySQL</li>
          <li>MSSQL</li>
          <li>MongoDB</li>
      </ul>
      <h5>Tools</h5>
      <ul>
          <li>IntellijIDEA</li>
          <li>Eclipse</li>
          <li>VS Code</li>
          <li>Dart</li>
          <li>MongoVue</li>
          <li>Toad</li>
          <li>Putty</li>
          <li>WINSCP</li>
          <li>MySQL Workbench</li>
          <li>Git</li>
          <li>Fiddler</li>
          <li>Jasper</li>
          <li>Linux</li>
          <li>Shell</li>
      </ul>
    </div>
);

const Experience = () => (
    <div>
        <ul className="timeline">
            <li className="event" data-date="2012">
                <h3>WEB MASTER</h3>
                <span>Sodonsolution LLC</span>
                <p></p>    
            </li>
            <li className="event" data-date="2013">
                <h3>SOFTWARE DEVELOPER</h3>
                <span>Golomt Bank of Mongolia</span>
                <p></p>     
            </li>
            <li className="event" data-date="2016">
                <h3>SOFTWARE ENGINEER</h3>
                <span>Golomt Bank of Mongolia</span>
                <p></p>    
            </li>
            <li className="event" data-date="Jan 2018">
                <p>pursuing Master's degree in the US</p>
                <p>now</p>
            </li>
        </ul>
    </div>
);

const Education = () => (
    <div>
        <ul className="timeline">
            <li className="event" data-date="2008">
                <h3>BACHELOR OF SCIENCE IN INFORMATION SYSTEMS</h3>
                <p>Mongolia University of Science and Technology, Ulaanbaatar, Mongolia</p>
                <p></p>    
            </li>
            <li className="event" data-date="2012">
                <p>worked and gained valuable experience</p>
            </li>
            <li className="event" data-date="Jan 2018">
                <h3>MASTER OF SCIENCE IN COMPUTER SCIENCE</h3>
                <p>Maharishi University of Management, Fairfield, IA</p>
                <p>now</p>     
            </li>
        </ul>
    </div>
);

export default Routes;