import './assets/css/App.css';
import { Provider } from "react-redux";
import storeConfig from './store';
import User from './components/User';
import './assets/sass/app.scss';

const store = storeConfig()

function App() {
  return (
      <Provider store={store}>
          <div className="App">
            <User />
          </div>
      </Provider>
  );
}

export default App;
