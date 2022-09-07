import './App.css';
import AlertExample from './components/AlertExample';
import AlertManager from './components/AlertManager';

import {AlertProvider} from './context/AlertContext';
function App () {
  return (
    <div className="App">
      <AlertProvider>
        <AlertManager />
        <AlertExample />

      </AlertProvider>
    </div>
  );
}

export default App;
