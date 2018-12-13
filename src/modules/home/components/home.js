import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="home-img"><img src="img/me.jpg"/></div>
                <div className="about">
                    Hello, I'm <span className="highlight">Munkhdelger Buyandalai.</span> <br/>I'm a front-end and full-stack web developer focused on pixel-perfect design. Passionate about learning new web technologies and skills.
                </div>
            </div>
        )
        
    }
}

export default Home;