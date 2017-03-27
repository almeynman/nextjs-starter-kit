import Document, { Head, Main, NextScript } from 'next/document';
import { StyleSheetServer } from 'aphrodite';
import { fontFamilyBase } from '../lib/theme';
import stylesheet from '../static/index.css';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    return { ...html, css };
  }

  render() {
    const styles = [
      stylesheet,
      `html { font-family: ${fontFamilyBase};}`,
      this.props.css.content
    ];
    
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          {styles.map(css =>
            <style dangerouslySetInnerHTML={{ __html: css }} />,
           )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
