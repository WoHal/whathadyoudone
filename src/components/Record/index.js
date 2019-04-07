import React from 'react';
import { Calendar, Badge, Popover } from 'antd';
import {observer, inject} from 'mobx-react';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import './index.scss';

import DoneList from '../DoneList';

@inject(({store}) => ({
    init: store.init,
    list: store.list,
    editRecord: store.editRecord
}))
@observer
export default class Record extends React.Component {
    dateCellRender(date) {
        const month = date.format('YYYY-MM-DD').split('-')[1];
        const data = this.props.list[month];
        const content = <DoneList data={data} />

        return (
            <Popover content={content}>
                {content}
            </Popover>
        );
    }
    monthCellRender(value) {
        return <div></div>;
    }
    onChange(date) {
        console.log(date)
    }
    onPanelChange(date, mode) {
        console.log(mode);
        console.log(date.format('YYYY-MM-DD'))
        this.props.init(date.format('YYYY-MM-DD'));
    }
    render() {
        return (
            <Calendar
                dateCellRender={this.dateCellRender.bind(this)}
                monthCellRender={this.monthCellRender}
                onChange={this.onChange.bind(this)}
                onPanelChange={this.onPanelChange.bind(this)}
            />
        );
    }
}