import { Component, PropTypes } from 'react';
import 'isomorphic-fetch';
import { css, withStyles } from '../lib/withStyles';
import Layout from '../components/Layout';

class IndexPage extends Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
    styles: PropTypes.object.isRequired,
  }

  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/v1/news');
    const json = await res.json();
    return { news: json };
  }

  render() {
    const { styles } = this.props;
    return (
      <Layout>
        <div {...css(styles.root)}>
          <div {...css(styles.container)}>
            <h1>React.js News</h1>
            {this.props.news.map(item => (
              <article key={item.link} {...css(styles.newsItem)}>
                <h1 {...css(styles.newsTitle)}><a href={item.link}>{item.title}</a></h1>
                <div
                  className="newsDesc"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </article>
             ))}
          </div>
        </div>
      </Layout>
    );
  }
}

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
  newsItem: {
    margin: '0 0 2rem',
  },
  newsTitle: {
    fontSize: '1.5rem',
  },
}))(IndexPage);
