import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, observer, inject} from 'mobx-react';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import Store from './store';

import Record from './components/Record';
import Editor from './components/Editor';

@inject(({store}) => ({
    init: store.init
}))
@observer
class App extends React.Component {
    componentDidMount() {
        const cur = moment().format('YYYY-MM-DD');
        this.props.init(cur);
    }
    render() {
        return (
            <div className="entry" store={new Store()}>
                <Record />
                <Editor />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={new Store()}><App /></Provider>,
    document.getElementById('app')
);