import { PropTypes } from 'react';
import { css, withStyles } from '../lib/withStyles';

const Feedback = ({ styles }) => (
  <div {...css(styles.root)}>
    <div {...css(styles.container)}>
      <a
        {...css(styles.link)}
        href="https://gitter.im/nextjs-starter-kit/"
      >
        Ask a question
      </a>
      <span {...css(styles.spacer)}>|</span>
      <a
        {...css(styles.link)}
        href="https://gitter.im/nextjs-starter-kit/"
      >
        Report an issue
      </a>
    </div>
  </div>
);

Feedback.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default withStyles(({ maxContentWidth }) => ({
  root: {
    background: '#f5f5f5',
    color: '#333',
  },
  container: {
    margin: '0 auto',
    padding: '20px 8px',
    maxWidth: maxContentWidth,
    textAlign: 'center',
    fontSize: '1.5em',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    ':active': {
      color: '#333',
      textDecoration: 'none',
    },
    ':hover': {
      color: '#333',
      textDecoration: 'underline',
    },
    ':visited': {
      color: '#333',
      textDecoration: 'none',
    },
  },
  spacer: {
    paddingRight: '15px',
    paddingLeft: '15px',
  },
}))(Feedback);
