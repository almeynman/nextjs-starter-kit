import Layout from '../components/Layout';
import Submit from '../components/Submit';
import PostList from '../components/PostList';
import withData from '../lib/withData';

export default withData((props) => (
  <Layout>
    <Submit />
    <PostList />
  </Layout>
));
