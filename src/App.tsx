import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Layout }>
        <Route path="" Component={ Home } />
        <Route path="lista" Component={ List } />
      </Route>
    </Routes>
  );
}

export default App;
