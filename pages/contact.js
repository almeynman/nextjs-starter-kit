import { PropTypes } from 'react';
import { css, withStyles } from '../lib/withStyles';
import Layout from '../components/Layout';

const Contact = ({ styles }) => (
  <Layout>
    <div {...css(styles.root)}>
      <div {...css(styles.container)}>
        <h1>Contact</h1>
        <p>...</p>
      </div>
    </div>
  </Layout>
);

Contact.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default withStyles(({ maxContentWidth }) => ({
  root: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  container: {
    margin: '0 auto',
    padding: '0 0 40px',
    maxWidth: maxContentWidth,
  },
}))(Contact);
