import Link from '../Link';

const brandColor = '#61dafb';

export default () => (
  <div className="root">
    <div className="container">
      <Link className="brand" to="/">
        <span className="brandTxt">Your Company</span>
      </Link>
      <div className="banner">
        <h1 className="bannerTitle">React</h1>
        <p className="bannerDesc">Complex web apps made easy</p>
      </div>
    </div>
    <style jsx>{`
      .root {
        background: #373277;
        color: #fff;
      }

      .container {
        margin: 0 auto;
        padding: 20px 0;
        max-width: var(--max-content-width);
      }

      .brand {
        color: color(${brandColor} lightness(+10%));
        text-decoration: none;
        font-size: 1.75em; /* ~28px */
      }

      .brandTxt {
        margin-left: 10px;
      }

      .nav {
        float: right;
        margin-top: 6px;
      }

      .banner {
        text-align: center;
      }

      .bannerTitle {
        margin: 0;
        padding: 10px;
        font-weight: normal;
        font-size: 4em;
        line-height: 1em;
      }

      .bannerDesc {
        padding: 0;
        color: rgba(255, 255, 255, 0.5);
        font-size: 1.25em;
        margin: 0;
      }
    `}</style>
  </div>
);
