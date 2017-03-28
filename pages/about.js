import Layout from '../components/Layout';
import Page from '../components/Page';
import html from './about.md';

const About = () => (
  <Layout>
    <Page title="About Us" html={html} />
  </Layout>
);

export default About;
