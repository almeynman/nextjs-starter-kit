import Layout from '../components/Layout';
import Submit from '../components/Submit';
import PostList from '../components/PostList';
import withData from '../lib/withData';

const Posts = () => (
  <Layout>
    <Submit />
    <PostList />
  </Layout>
);

export default withData(Posts);
