import {
  split,
  HttpLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from './pages';

const httpLinkUri = process.env.REACT_APP_HTTPLINK_URI;
const wsLinkUri = process.env.REACT_APP_WSLINK_URI;

const httpLink = new HttpLink({
  uri: `${httpLinkUri}`,
  cache: new InMemoryCache(),
  name: 'ZERDA_FUR',
  version: '0.0.1',
});

const wsLink = new WebSocketLink({
  uri: `${wsLinkUri}`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Index />
      </Provider>
    </ApolloProvider>
  );
}

export default App;