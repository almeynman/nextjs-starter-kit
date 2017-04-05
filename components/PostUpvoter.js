import { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

const PostUpvoter = ({ upvote, votes, id }) => (
  <button onClick={() => upvote(id, votes + 1)}>
    {votes}
  </button>
);

PostUpvoter.propTypes = {
  upvote: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

const upvotePost = gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      id
      votes
    }
  }
`;

export default graphql(upvotePost, {
  props: ({ ownProps, mutate }) => ({
    upvote: (id, votes) => mutate({
      variables: { id, votes },
      optimisticResponse: {
        updatePost: {
          id: ownProps.id,
          votes: ownProps.votes + 1,
        },
      },
    }),
  }),
})(PostUpvoter);
