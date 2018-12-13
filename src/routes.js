import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import { MainLayout } from './modules/layout/containers'
import { Home } from './modules/home/containers'
import { slide as Menu } from 'react-burger-menu'

class Routes extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }
  
    render () {
      return (
        <Router>
            <MainLayout>
                {/* <div id="pt" className="canvas"></div> */}
                <Menu isOpen={this.state.menuOpen} width={ 250 } customBurgerIcon={ <img src="img/menu.png"/> } >
                    <Link id="about" onClick={() => this.closeMenu()} to="/my-react-web" className="menu-item">About</Link>
                    <Link id="skills" onClick={() => this.closeMenu()} to="/skills" className="menu-item">Skills</Link>
                    <Link id="experience" onClick={() => this.closeMenu()} to="/experience" className="menu-item">Experience</Link>
                    <Link id="education" onClick={() => this.closeMenu()} to="/education" className="menu-item">Education</Link>
                    <Link id="contact" onClick={() => this.closeMenu()} to="/contact" className="menu-item">Contact</Link>
                    {/* <a id="home" className="menu-item" href="/">About</a>
                    <a id="about" className="menu-item" href="/skills">Skills</a>
                    <a id="contact" className="menu-item" href="/experience">Experience</a>
                    <a id="contact" className="menu-item" href="/education">Education</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a> */}
                </Menu>
                <div className="container">
                    <Route key="home" exact path='/my-react-web' component={Home} />
                    <Route key="skills" exact path='/skills' component={Skills} />
                    <Route key="experience" exact path='/experience' component={Experience} />
                    <Route key="education" exact path='/education' component={Education} />
                    <Route key="contact" exact path='/contact' component={Contact} />
                </div>
            </MainLayout>
        </Router>
      )
    }
  }

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
                <p>
                    <u>Projects:</u> 
                    <a href="https://www.egolomt.mn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=01&LANGUAGE_ID=001" target="_blank">egolomt.mn</a>
                </p>     
            </li>
            <li className="event" data-date="2013">
                <h6>WEB MASTER</h6>
                <span>Sodonsolution LLC</span>
                <p>
                <u>Projects:</u> 
                    <a href="http://english.amartravel.mn" target="_blank">amartravel.mn</a>
                    <a href="http://english.nepko.mn" target="_blank">nepko.mn</a>
                    <a href="http://mtgroup.mn/en/" target="_blank">mtgroup.mn</a>
                    <a href="https://english.iek.mn" target="_blank">iek.mn</a>
                    <a href="http://www.azkhur.mn" target="_blank">azkhur.mn</a>
                    <a href="http://english.transparency.mn" target="_blank">transparency.mn</a>
                    <a href="http://english.khishigarvin.mn" target="_blank">khishigarvin.mn</a>
                    <a href="http://english.trusttrade.mn" target="_blank">trusttrade.mn</a>
                    <a href="http://www.emma.mn" target="_blank">emma.mn</a>
                </p>    
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
        <p><a><i className="fa fa-map-marker" aria-hidden="true"></i>Alameda, CA</a></p>
        <p><a><i className="fa fa-phone" aria-hidden="true"></i>+1 (415) 279-3780</a></p>
        <p><a href="mailto:munkhdelger.buyandalai@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>Email</a></p>
        <p><a href="https://www.linkedin.com/in/munkhdelger-buyandalai/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a></p>
        <p><a href="https://github.com/deegii22" target="_blank"><i className="fa fa-github-alt" aria-hidden="true"></i>Github</a></p>
    </div>
);

export default Routes;