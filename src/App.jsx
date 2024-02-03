import { Provider } from 'react-redux';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import store from './redux/store';
import Greeting from '../src/components/Greeting';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/" exact element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;