import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { BusinessData } from './DetailsData';
import ProductFeatures from './ProductFeatures';

import './Details.less';
class BusinessDetails extends Component {
    state = { 
        type: ''
    }
    componentWillMount () {
        console.log(this.props.match.params.id);
        this.setState({ type: this.props.match.params.id });
    }
    componentWillUnmount () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    render() {
        return <Row className="businessDetailsContainer">
            <Col span={24} className="titleBack" style={{ background: "url(" + BusinessData[this.state.type].background + ") no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }} />
            <Col span={24} className="scopeContent">
              {this.state.type === "system08" ? <ProductFeatures data={BusinessData} checkType={this.state.type} /> : <div className="mainContent">
                  <ProductFeatures data={BusinessData} checkType={this.state.type} />
                </div>}
            </Col>
          </Row>;
    }
}

export default BusinessDetails;