import { PropTypes } from 'react';
import Head from 'next/head';
import { css, withStyles } from '../lib/withStyles';
import Header from './Header';
import Feedback from './Feedback';
import Footer from './Footer';
import stylesheet from './Layout.css';

const Layout = ({ children, styles, title }) => (
  <div {...css(styles.root)}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />{
      // eslint-disable-next-line react/no-danger
      }<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    {children}
    <Feedback />
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: 'This is a default title',
};

export default withStyles(({ fontFamilyBase }) => ({
  root: {
    fontFamily: fontFamilyBase,
  },
}))(Layout);
