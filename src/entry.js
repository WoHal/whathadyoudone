import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import Store from './store';

import Record from './components/Record';

class App extends React.Component {
    render() {
        return (
            <Provider className="entry" store={new Store()}>
                <Record />
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);