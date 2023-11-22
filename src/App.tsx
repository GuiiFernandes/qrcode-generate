import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import LinksList from './pages/LinksList';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/list" element={ <LinksList /> } />
      </Route>
    </Routes>
  );
}

export default App;
