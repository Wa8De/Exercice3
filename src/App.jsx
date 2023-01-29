import React from 'react'
import { legacy_createStore as createStore } from 'redux';
import { Reducer } from './config/Reducer'
import { Provider } from 'react-redux';
import TaskViewer from './Components/TaskViewer';

const App = () => {
    const store = createStore(Reducer)
    return (
        <Provider store={store}>
          <TaskViewer/>
        </Provider>
    )
}

export default App