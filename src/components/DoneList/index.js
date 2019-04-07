import React from 'react';

import './index.scss';

export default class DoneList extends React.Component {
    render() {
        const data = this.props.data;

        return typeof data === 'array' && data.length ? (
            <ul className="events">
            {
                arr.map((item, index) => {
                    return (
                        <li key={index}>
                            <Badge status="success" text={item + ' --> ' + item} />
                        </li>
                    );
                })
            }
            </ul>
        ) : null;
    }
}