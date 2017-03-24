import Document, { Head, Main, NextScript } from 'next/document';
import { StyleSheetServer } from 'aphrodite';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    return { ...html, css };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          <style>{`
            .newsDesc h1, .newsDesc h2,
            .newsDesc h3, .newsDesc h4,
            .newsDesc h5, .newsDesc h6 {
              font-size: 1.125rem;
            }
            .newsDesc pre {
              white-space: pre-wrap;
              font-size: 0.875rem;
            }

            .newsDesc img {
              max-width: 100%;
            }
          `}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.css.content }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
