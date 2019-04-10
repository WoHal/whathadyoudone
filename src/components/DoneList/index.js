import React from 'react';
import {Badge, Icon} from 'antd';

import './index.scss';

function nop() {}

export default class DoneList extends React.Component {
    render() {
        const {data, className, onDelete} = this.props;

        return data && data.length ? (
            <ul className={'events ' + (className || '')}>
            {
                data.map((item, index) => {
                    return (
                        <li key={index} className="item">
                            <Badge status="success" title={item} text={item} />
                            {
                                onDelete ? <Icon type="close" onClick={onDelete.bind(this, item, index)} /> : null
                            }
                        </li>
                    );
                })
            }
            </ul>
        ) : null;
    }
}