import { PropTypes } from 'react';
import Head from 'next/head';
import { css, withStyles } from '../lib/withStyles';
import Header from './Header';
import Feedback from './Feedback';
import Footer from './Footer';
import stylesheet from './Layout.css';

const Layout = ({ children, styles, title, description }) => (
  <div {...css(styles.root)}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />{
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
  description: PropTypes.string,
};

Layout.defaultProps = {
  title: 'This is a default title',
  description: 'This is a default description',
};

export default withStyles(({ fontFamilyBase }) => ({
  root: {
    fontFamily: fontFamilyBase,
  },
}))(Layout);
