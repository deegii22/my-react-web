import React from 'react';
import { PropTypes } from 'prop-types';
import Header from './header';
import Footer from './footer';

class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>{this.props.children}</div>
                <Footer />
            </div>
        );
    }
}

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
