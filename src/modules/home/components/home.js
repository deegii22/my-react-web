import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home-img"><img src={process.env.PUBLIC_URL + '/img/me.jpg'}/></div>
                <div className="about">
                    Hello, I'm <span className="highlight">Munkhdelger Buyandalai.</span> <br/>I'm experienced and versatile front-end and full-stack web developer. Skilled in building responsive and user-friendly interfaces, optimizing performance, and
integrating APIs to deliver robust solutions.
                </div>
            </div>
        )
        
    }
}

export default Home;