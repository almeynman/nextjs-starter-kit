import { PropTypes } from 'react';
import Head from 'next/head';
import { css, withStyles } from '../lib/withStyles';
import Header from './Header';
import stylesheet from '../static/index.css';

const Layout = ({ children, styles, title }) => (
  <div {...css(styles.root)}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    {children}
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
