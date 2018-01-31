import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import './Home.less';
class BusinessEqui extends Component {
    state = {  }

    imgOnMouseEnter (ev) {
        // console.log(ev)
        ev.style.transform = 'scale(1.2)';
        
    }
    imgOnMouseLeave (ev) {
        ev.style.transform = "scale(1)";
    }

    render() {
        console.log(this.props)
        const data = this.props.data
        return <Row gutter={24} className="bussinessContainer">
            {data.map((item, index) => (
              <Col
                span={6}
                key={index}
                style={{ marginBottom: "30px" }}
              >
                <Card
                  style={{
                    width: "100%",
                    height: "238px",
                    overflow: "hidden"
                  }}
                  bodyStyle={{
                    padding: 0,
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <Link
                    to={"/BusinessDetail/" + item.id}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <img
                      ref={"img" + index}
                      onMouseEnter={e => {
                        e.persist();
                        this.imgOnMouseEnter(e.target);
                      }}
                      onMouseLeave={e => {
                        e.persist();
                        this.imgOnMouseLeave(e.target);
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "transform .8s"
                      }}
                      src={item.url}
                      alt={index}
                    />
                    <span className="businessName">{item.name}</span>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>;
    }
}

export default BusinessEqui;