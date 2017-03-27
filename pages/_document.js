import Document, { Head, Main, NextScript } from 'next/document';
import { StyleSheetServer } from 'aphrodite';
import { fontFamilyBase } from '../lib/theme';
import stylesheet from '/static/index.css';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    return { ...html, css };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
          <style dangerouslySetInnerHTML={{ __html: `html { font-family: ${fontFamilyBase};}`}} />
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
