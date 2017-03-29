import { PropTypes } from 'react';
import Link from 'next/link';
import { css, withStyles } from '../lib/withStyles';

const Footer = ({ styles }) => (
  <div {...css(styles.root)}>
    <div {...css(styles.container)}>
      <span {...css(styles.text)}>© Your Company</span>
      <span {...css(styles.spacer)}>.</span>
      <Link href="/"><a {...css(styles.link)}>Home</a></Link>
      <span {...css(styles.spacer)}>.</span>
      <Link href="/admin"><a {...css(styles.link)}>Admin</a></Link>
      <span {...css(styles.spacer)}>.</span>
      <Link href="/privacy"><a {...css(styles.link)}>Privacy</a></Link>
      <span {...css(styles.spacer)}>.</span>
      <Link href="/not-found"><a {...css(styles.link)}>Not Found</a></Link>
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
    color: 'rgba(255, 255, 255, 0.6)',
    textDecoration: 'none',
    ':active': {
      color: 'rgba(255, 255, 255, 0.6)',
      textDecoration: 'none',
    },
    ':visited': {
      color: 'rgba(255, 255, 255, 1)',
      textDecoration: 'none',
    },
    ':hover': {
      color: 'rgba(255, 255, 255, 1)',
    },
  },
}))(Footer);
