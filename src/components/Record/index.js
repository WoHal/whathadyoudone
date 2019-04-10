import React from 'react';
import { Calendar, Badge, Popover } from 'antd';
import {observer, inject} from 'mobx-react';

import './index.scss';

import DoneList from '../DoneList';

@inject(({store}) => ({
    init: store.init,
    list: store.list,
    editRecord: store.editRecord,
    handleClickDate: store.handleClickDate,
    currentLoadedDate: store.currentLoadedDate
}))
@observer
export default class Record extends React.Component {
    equalDate(diff1, diff2) {
        return diff1.slice(0, 7) === diff2.slice(0, 7);
    }
    dateCellRender(date) {
        const dateStr = date.format('YYYY-MM-DD');
        const dateFormated = dateStr.split('-');
        const day = dateFormated[2];
        const data = this.props.list[day];
        const content = <DoneList data={data} />

        return this.equalDate(dateStr, this.props.currentLoadedDate) ? (
            <Popover content={content}>
                {content}
            </Popover>
        ) : null;
    }
    // TODO
    monthCellRender(value) {
        return <div></div>;
    }
    onPanelChange(date) {
        this.props.init(date.format('YYYY-MM-DD'));
    }
    onSelect(date) {
        this.props.handleClickDate(date.format('YYYY-MM-DD'));
    }
    render() {
        return (
            <Calendar
                dateCellRender={this.dateCellRender.bind(this)}
                monthCellRender={this.monthCellRender}
                onPanelChange={this.onPanelChange.bind(this)}
                onSelect={this.onSelect.bind(this)}
            />
        );
    }
}