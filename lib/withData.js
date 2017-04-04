import { Component } from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import initClient from './initClient';
import initStore from './initStore';

export default (InnerComponent) => (
  class extends Component {
    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {};
      const client = initClient(headers);
      const store = initStore(client, client.initialState);

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {}),
      }

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <InnerComponent {...props} />
          </ApolloProvider>
        );
        await getDataFromTree(app);
        console.log('returnul')
      }

      const state = store.getState();

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data
          }
        },
        headers,
        ...props
      };
    }

    constructor(props) {
      super(props);
      this.client = initClient(this.props.headers, this.props.initialState);
      this.store = initStore(this.client, this.props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <InnerComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }
);
