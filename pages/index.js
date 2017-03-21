import { Component, PropTypes } from 'react';
import 'isomorphic-fetch';

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
      <div className="root">
        <div className="container">
          <h1>React.js News</h1>
          {this.props.news.map(item => (
            <article key={item.link} className="newsItem">
              <h1 className="newsTitle"><a href={item.link}>{item.title}</a></h1>
              <div
                className="newsDesc"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </article>
          ))}
        </div>
        <style jsx>{`
          .root {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .container {
            margin: 0 auto;
            padding: 0 0 40px;
            max-width: var(--max-content-width);
          }

          .newsItem {
            margin: 0 0 2rem;
          }

          .newsTitle {
            font-size: 1.5rem;
          }

          .newsDesc {
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-size: 1.125rem;
            }

            pre {
              white-space: pre-wrap;
              font-size: 0.875rem;
            }

            img {
              max-width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}
