import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SidebarMenu from './components/SidebarMenu';
import DynamicForm from './pages/DynamicForm';
import OutputPage from './pages/OutputPage';
import './index.css';

function App() {
  // Application logic...

  return (
    <Provider store={store}>
      <div className="App">
        <SidebarMenu />
        {/* Routing logic or conditional rendering for DynamicForm and OutputPage */}
      </div>
    </Provider>
  );
}

export default App;
