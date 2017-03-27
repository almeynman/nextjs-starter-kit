import { PropTypes } from 'react';
import { css, withStyles } from '../lib/withStyles';
import Link from './Link';

const Navigation = ({ styles }) => (
  <div {...css(styles.root)} role="navigation">
    <Link {...css(styles.link)} to="/about">About</Link>
    <Link {...css(styles.link)} to="/contact">Contact</Link>
    <span {...css(styles.spacer)}> | </span>
    <Link {...css(styles.link)} to="/login">Log in</Link>
    <span {...css(styles.spacer)}>or</span>
    <Link {...css(styles.link, styles.highlight)} to="/register">Sign up</Link>
  </div>
);

Navigation.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default withStyles(() => ({
  root: {
    float: 'right',
    margin: '6px 0 0',
  },
  link: {
    display: 'inline-block',
    padding: '3px 8px',
    textDecoration: 'none',
    fontSize: '1.125em',
    color: 'rgba(255, 255, 255, 0.6)',
    ':active': {
      color: 'rgba(255, 255, 255, 0.6)',
    },
    ':visited': {
      color: 'rgba(255, 255, 255, 0.6)',
    },
    ':hover': {
      color: 'rgba(255, 255, 255, 1)',
    },
  },
  highlight: {
    marginRight: '8px',
    marginLeft: '8px',
    borderRadius: '3px',
    background: 'rgba(0, 0, 0, 0.15)',
    color: '#fff',
    ':hover': {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  },
  spacer: {
    color: 'rgba(255, 255, 255, 0.3)',
  },
}))(Navigation);
