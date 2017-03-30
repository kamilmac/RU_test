import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/root'

const store = createStore(reducer)

it('renders without crashing', () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.createElement('div'),
    )
})
