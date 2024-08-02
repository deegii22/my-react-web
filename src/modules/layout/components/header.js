import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    row: {  
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 20,
      float: 'right',
    },
    bigAvatar: {
      width: 50,
      height: 50,
    //   boxShadow: '0 0 20px #ccc',
    },
  };

const Header = (props) => {
    const { classes } = props;
    return (
        <header>
            <Avatar
                alt="Munkhdelger Buyandalai"
                src={process.env.PUBLIC_URL + '/img/avatar.png'}
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
        </header>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Header);
;
