import { css, withStyles } from '../lib/withStyles';
import Layout from '../components/Layout';

const Register = ({ styles }) => (
  <Layout>
    <div {...css(styles.root)}>
      <div {...css(styles.container)}>
        <h1>Register</h1>
        <p>...</p>
      </div>
    </div>
  </Layout>
);

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
}))(Register);
