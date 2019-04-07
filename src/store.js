import {observable, action} from 'mobx';
import axios from 'axios';

class store {
    @observable list = {};
    @action.bound init(date) {
        const time = date.split('-').slice(0, 2);
        axios.get(`//localhost:8033/record/${time.join('/')}`)
            .then(res => res.data)
            .then(res => {
                if (res.status === 0) {
                    this.list = res.data;
                }
            });
    }
}

export default store;