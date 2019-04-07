import {observable, action} from 'mobx';
import axios from 'axios';

class store {
    @observable currentLoadedDate = '';
    @observable list = {};
    @action.bound init(date) {
        this.currentLoadedDate = date;
        const time = date.split('-').slice(0, 2);
        axios.get(`http://localhost:8033/record/${time.join('/')}`)
            .then(res => res.data)
            .then(res => {
                if (res.status === 0) {
                    this.list = res.data;
                }
            });
    }

    editingTime = null;
    @observable editingData = {};
    @observable editorVisible = false;
    @action.bound updateRecord(data) {
        axios.post(`http://localhost:8033/record/${this.editingTime.replace(/-/g, '/')}`, data)
            .then(res => res.data)
            .then(res => {
                this.hideEditor();
                if (res.status === 0) {
                    this.init(this.editingTime);
                    this.editingTime = '';
                }
            });
    }
    @action.bound handleClickDate(date) {
        const day = date.split('-')[2];
        this.editingData = this.list[day] || [];
        this.editingTime = date;
        this.openEditor();
    }
    @action.bound openEditor() {
        this.editorVisible = true;
    }
    @action.bound hideEditor() {
        this.editorVisible = false;
    }
}

export default store;