import React from 'react';
import {Badge} from 'antd';

import './index.scss';

export default class DoneList extends React.Component {
    render() {
        const {data, className} = this.props;

        return data && data.length ? (
            <ul className={'events ' + (className || '')}>
            {
                data.map((item, index) => {
                    return (
                        <li key={index}>
                            <Badge status="success" text={item} />
                        </li>
                    );
                })
            }
            </ul>
        ) : null;
    }
}