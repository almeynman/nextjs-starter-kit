import { PropTypes } from 'react';
import { css, withStyles } from '../lib/withStyles.js';
import Link from './Link';

const Footer = ({ styles }) => (
  <div {...css(styles.root)}>
    <div {...css(styles.container)}>
      <span {...css(styles.text)}>© Your Company</span>
      <span {...css(styles.spacer)}>.</span>
      <Link {...css(styles.link)} to="/">Home</Link>
      <span {...css(styles.spacer)}>.</span>
      <Link {...css(styles.link)} to="/admin">Admin</Link>
      <span {...css(styles.spacer)}>.</span>
      <Link {...css(styles.link)} to="/privacy">Privacy</Link>
      <span {...css(styles.spacer)}>.</span>
      <Link {...css(styles.link)} to="/not-found">Not Found</Link>
    </div>
  </div>
);

Footer.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default withStyles(({ maxContentWidth }) => ({
  root: {
    background: '#333',
    color: '#fff',
  },
  container: {
    margin: '0 auto',
    padding: '20px 15px',
    maxWidth: maxContentWidth,
    textAlign: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.5)',
    padding: '2px 5px',
    fontSize: '1em',
  },
  spacer: {
    color: 'rgba(255, 255, 255, 0.3)',
  },
  link: {
    padding: '2px 5px',
    fontSize: '1em',
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.6)',
    ':hover': {
      color: 'rgba(255, 255, 255, 1)',
    },
  },
}))(Footer);
