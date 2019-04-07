import React from 'react';
import {observer, inject} from 'mobx-react';
import {Modal} from 'antd';

import './index.scss';

import DoneList from '../DoneList';

@inject(({store}) => ({
    editingData: store.editingData,
    editorVisible: store.editorVisible,
    editorHandleOK: store.editorHandleOK,
    editorHandleCancel: store.editorHandleCancel
}))
@observer
export default class Editor extends React.Component {
    render() {
        return (
            <Modal
                title="Editing"
                visible={this.props.editorVisible}
                onOk={this.props.editorHandleCancel.bind(this)}
                onCancel={this.props.editorHandleCancel.bind(this)}
            >
                <DoneList data={this.props.editingData} />
                <div className="ft">
                    <Button type="success">+ Create A Record</Button>
                </div>
            </Modal>
        );
    }
}