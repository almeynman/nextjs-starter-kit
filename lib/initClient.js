import { ApolloClient, createNetworkInterface } from 'react-apollo';

let apolloClient = null;

// eslint-disable-next-line no-underscore-dangle
const _initClient = (headers, initialState) => new ApolloClient({
  initialState,
  ssrMode: !process.browser,
  dataIdFromObject: result => result.id || null,
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
    opts: {
      credentials: 'same-origin',
      // Pass headers here if your graphql server requires them
    },
  }),
});

const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return _initClient(headers, initialState);
  }
  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState);
  }
  return apolloClient;
};

export default initClient;
