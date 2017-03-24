import { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import 'isomorphic-fetch';
import Layout from '../components/Layout';

export default class IndexPage extends Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  }

  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/v1/news');
    const json = await res.json();
    return { news: json };
  }

  render() {
    return (
      <Layout>
        <div className={css(styles.root)}>
          <div className={css(styles.container)}>
            <h1>React.js News</h1>
            {this.props.news.map(item => (
               <article key={item.link} className={css(styles.newsItem)}>
                 <h1 className={css(styles.newsTitle)}><a href={item.link}>{item.title}</a></h1>
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

const styles = StyleSheet.create({
  root: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  container: {
    margin: '0 auto',
    padding: '0 0 40px',
  },
  newsItem: {
    margin: '0 0 2rem',
  },
  newsTitle: {
    fontSize: '1.5rem',
  },
});
