import React from 'react';
import {observer, inject} from 'mobx-react';
import {Modal, Button, Input} from 'antd';

import './index.scss';

import DoneList from '../DoneList';

@inject(({store}) => ({
    editingData: store.editingData,
    editorVisible: store.editorVisible,
    updateRecord: store.updateRecord,
    hideEditor: store.hideEditor
}))
@observer
export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [].concat(props.editingData),
            creating: false
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            list: [].concat(nextProps.editingData),
            creating: false
        });
    }
    handleOK() {
        this.props.updateRecord(this.state.list);
    }
    handleCancel() {
        this.props.hideEditor();
    }
    createNewRecord() {
        this.setState({
            creating: true
        });
    }
    addNewRecord(value) {
        this.setState({
            list: this.state.list.concat(value),
            creating: false
        });
    }
    render() {
        const {list, creating} = this.state;
        return (
            <Modal
                title="Editing"
                visible={this.props.editorVisible}
                onOk={this.handleOK.bind(this)}
                onCancel={this.handleCancel.bind(this)}
            >
                <DoneList data={list} className="list" />
                {
                    creating ?
                        <Input.Search
                            placeholder=""
                            size="large"
                            enterButton="Save"
                            onSearch={this.addNewRecord.bind(this)}
                        /> : null
                }
                <div className="ft">
                    <Button type="success" onClick={this.createNewRecord.bind(this)}>+ Create A Record</Button>
                </div>
            </Modal>
        );
    }
}