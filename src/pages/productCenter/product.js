import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { product } from './productData';
import './product.less';

class Product extends Component {
  state = {};

  componentWillUnmount() {

    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  render() {
    return (
      <Row className="productContainer">
        <Col span={24} className="topBack" />
        <Col span={24} className="contentConteiner">
          <div className="mainContent">
            <Col className="productTitle">
              <div className="text">产品中心</div>
              <span className="bottomBorder" />
            </Col>
            <Col span={24} className="content">
              {product.map((item, idx) => (
                <Link key={idx} to={"/BusinessDetail/" + item.id}>
                  <Col span={12} className="modelContent" style={{ paddingLeft: idx%2 !== 0 ? '50px' : '0', paddingRight: idx%2 === 0 ?'50px': '0' }} >
                    <div className="imgContent">
                      <img src={item.url} />
                    </div>
                    <div className="textContent">
                      <p className="title">{item.name}</p>
                      <div className="details">
                        {item.details.map((items, key) => (
                          <span key={key}>{items}</span>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Link>
              ))}
            </Col>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Product;