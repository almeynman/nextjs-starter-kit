import Layout from '../components/Layout';
import Page from '../components/Page';
import html from './privacy.md';

const Privacy = () => (
  <Layout>
    <Page title="Privacy Policy" html={html} />
  </Layout>
);

export default Privacy;
