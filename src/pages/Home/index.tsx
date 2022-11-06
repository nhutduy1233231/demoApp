import React from 'react';
import { Col, Divider, Row } from 'antd';
import './style.scss';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const Home: React.FC<any> = () => {
    return (
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <ul className="reddddd">
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
        </Row>
    );
};

export default Home;
