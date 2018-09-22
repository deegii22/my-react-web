import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import { MainLayout } from './modules/layout/containers'
import { Home } from './modules/home/containers'
import { slide as Menu } from 'react-burger-menu'

const Routes = (match) => (
    <Router>
        <MainLayout>
            {/* <div id="pt" className="canvas"></div> */}
            <Menu noOverlay  width={ 250 } customBurgerIcon={ <img src="img/menu.png"/> } >
                <Link id="about" to="/my-react-web" className="menu-item">About</Link>
                <Link id="skills" to="/skills" className="menu-item">Skills</Link>
                <Link id="experience" to="/experience" className="menu-item">Experience</Link>
                <Link id="education" to="/education" className="menu-item">Education</Link>
                <Link id="contact" to="/contact" className="menu-item">Contact</Link>
                {/* <a id="home" className="menu-item" href="/">About</a>
                <a id="about" className="menu-item" href="/skills">Skills</a>
                <a id="contact" className="menu-item" href="/experience">Experience</a>
                <a id="contact" className="menu-item" href="/education">Education</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a> */}
            </Menu>
            <div className="container">
                <Route key="home" exact path='/' component={Home} />
                <Route key="skills" exact path='/skills' component={Skills} />
                <Route key="experience" exact path='/experience' component={Experience} />
                <Route key="education" exact path='/education' component={Education} />
                <Route key="contact" exact path='/contact' component={Contact} />
            </div>
        </MainLayout>
    </Router>
)
const Skills = () => (
    <div className="skills">
      <h6>Languages</h6>
      <ul>
          <li>Java</li>
          <li>JavaScript</li>
      </ul>
      <h6>Web</h6>
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
      <h6>Web Services</h6>
      <ul>
          <li>RESTful</li>
          <li>SOAP</li>
          <li>JSON</li>
          <li>XML</li>
      </ul>
      <h6>Web/App Servers</h6>
      <ul>
          <li>WebSphere</li>
          <li>Tomcat</li>
          <li>Jetty</li>
          <li>IHS</li>
          <li>nginx</li>
      </ul>
      <h6>Frameworks</h6>
      <ul>
          <li>Spring</li>
          <li>Hibernate</li>
          <li>Jetty</li>
          <li>Angular</li>
          <li>Bootstrap</li>
      </ul>
      <h6>Databases</h6>
      <ul>
          <li>PL/SQL</li>
          <li>Oracle</li>
          <li>MySQL</li>
          <li>MSSQL</li>
          <li>MongoDB</li>
      </ul>
      <h6>Tools</h6>
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
            <li className="event" data-date="now">
                <p><small>pursuing Master's degree in the US</small></p>
            </li>
            <li className="event" data-date="Jan 2018">
                <h6>SOFTWARE ENGINEER</h6>
                <span>Golomt Bank of Mongolia</span>
                <p></p>    
            </li>
            
            <li className="event" data-date="2016">
                <h6>SOFTWARE DEVELOPER</h6>
                <span>Golomt Bank of Mongolia</span>
                <p></p>     
            </li>
            <li className="event" data-date="2013">
                <h6>WEB MASTER</h6>
                <span>Sodonsolution LLC</span>
                <p></p>    
            </li>
            <li className="event" data-date="2012">
                <p><small>graduated university</small></p>    
            </li>
        </ul>
    </div>
);

const Education = () => (
    <div>
        <ul className="timeline">
            <li className="event" data-date="now">
                <h6>MASTER OF SCIENCE IN COMPUTER SCIENCE</h6>
                <p>Maharishi University of Management, Fairfield, IA</p>
            </li>
            <li className="event" data-date="Jan 2018">
                <p><small>worked and gained valuable experience</small></p>
            </li>
            <li className="event" data-date="2012">
                <h6>BACHELOR OF SCIENCE IN INFORMATION SYSTEMS</h6>
                <p>Mongolia University of Science and Technology, Ulaanbaatar, Mongolia</p>
                <p></p>    
            </li>
            <li className="event" data-date="2008">
                <p><small>graduated high school</small></p>    
            </li>
        </ul>
    </div>
);

const Contact = () => (
    <div className="contact">
        <p><a><i className="fa fa-map-marker" aria-hidden="true"></i>Oakland, CA</a></p>
        <p><a><i className="fa fa-phone" aria-hidden="true"></i>+1 (415) 279-3780</a></p>
        <p><a href="mailto:munkhdelger.buyandalai@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>Email</a></p>
        <p><a href="https://www.linkedin.com/in/munkhdelger-buyandalai/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a></p>
        <p><a href="https://github.com/deegii22" target="_blank"><i className="fa fa-github-alt" aria-hidden="true"></i>Github</a></p>
    </div>
);

export default Routes;