import Layout from '../components/Layout';
import Page from '../components/Page';
import data from './about.md';

const About = () => (
  <Layout>
    <Page {...data} />
  </Layout>
);
