import { PropTypes } from 'react';
import { css, withStyles } from '../lib/withStyles';

const Page = ({ title, html, styles }) => (
  <div {...css(styles.root)}>
    <div {...css(styles.container)}>
      <h1>{title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
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
}))(Page);
