import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Outlet } from 'react-router-dom';
import Footer from "./Components/Footer/index";
import FooterII from "./Components/FooterII/index";

import Background from './Components/Background';
import NavTabs from './Components/NavTabs';
import "./Home.css";
import { setContext } from '@apollo/client/link/context';





const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <main className="">
        <NavTabs />
        <Outlet />
        {/* <Footer /> */}
        <FooterII />
        <Background />

      </main>
    </div>
  </ApolloProvider>
)



export default App;