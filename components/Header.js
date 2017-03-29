import { PropTypes } from 'react';
import Link from 'next/link';
import { css, withStyles } from '../lib/withStyles';
import Navigation from './Navigation';

const Header = ({ styles }) => (
  <div {...css(styles.root)}>
    <div {...css(styles.container)}>
      <Navigation />
      <Link href="/">
        <a {...css(styles.brand)}>
          <img src="/static/logo-small.png" srcSet="/static/logo-small@2x.png" width="38" height="38" alt="React" />
          <span {...css(styles.brandTxt)}>Your Company</span>
        </a>
      </Link>
      <div {...css(styles.banner)}>
        <h1 {...css(styles.bannerTitle)}>React</h1>
        <p {...css(styles.bannerDesc)}>Complex web apps made easy</p>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default withStyles(({ color, maxContentWidth }) => ({
  root: {
    background: '#373277',
    color: '#fff',
  },
  container: {
    margin: '0 auto',
    padding: '20px 0',
    maxWidth: maxContentWidth,
  },
  brand: {
    color: color.primaryLight,
    textDecoration: 'none',
    fontSize: '1.75em', // ~28px
  },
  brandTxt: {
    marginLeft: '10px',
  },
  nav: {
    float: 'right',
    marginTop: '6px',
  },
  banner: {
    textAlign: 'center',
  },
  bannerTitle: {
    margin: 0,
    padding: '10px',
    fontWeight: 'normal',
    fontSize: '4em',
    lineHeight: '1em',
  },
  bannerDesc: {
    padding: 0,
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '1.25em',
    margin: 0,
  },
}))(Header);
