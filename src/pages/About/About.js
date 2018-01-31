import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Map, Marker } from 'react-bmap';  // 百度地图
import './About.less';  // 
// import AboutImg from "../../assets/img/about/about.png";  // 顶部图片
import number1 from "../../assets/img/about/about1.png";  // 01
import number2 from "../../assets/img/about/about2.png";  // 02
import { AboutData } from  './aboutData';
class About extends Component {
    state = {  }

    componentWillUnmount () {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    render() {
        return <Row className="aboutContainer">
            <Col span={24} style={{ height: "350px" }} className="aboutTitleImg">
              {/* <img style={{ width: "100%", height: "100%" }} src={AboutImg} alt="about" /> */}
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <div className="aboutContainer">
                <Col className="aboutType">
                  <Col span={24} className="aboutTitle">
                    <span className="titleBack number1" />
                  </Col>
                  <Row style={{ height: "580px" }} className="aboutContent" type="flex" justify="space-between">
                    <Col span={13} style={{ height: "100%" }}>
                      <img src={number1} style={{ width: "100%", height: "100%" }} alt="01" />
                    </Col>
                    <Col span={11} className="aboutText" style={{ background: "#414f58", height: "100%" }}>
                      {AboutData.number1Text[0]}
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{AboutData.number1Text[1]}
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{AboutData.number1Text[2]}
                    </Col>
                  </Row>
                  <Col span={24} className="aboutTitle" style={{ marginTop: "88px" }}>
                    <span className="titleBack number2" />
                  </Col>
                  <Row className="aboutContent" type="flex" justify="space-between" style={{ margin: "90px 0", padding: "0 40px" }}>
                    <Col span={12}>
                      <img src={number2} alt="02" style={{ width: "505px", height: "310px" }} />
                    </Col>
                    <Col span={12} style={{ fontSize: "14px", color: "#666", paddingTop: "30px" }}>
                      我们需要<br />
                      IOS开发工程师，Android开发工程师，Web前端开发工程师<br />
                      软件工程师，Flash程序开发工程师，Unity3d开发工程师，系统集成工程师<br />
                      三维建模，场景制作，后期特效，影视后期，三维动画，UI设计<br />
                      采购主管，项目经理，产品经理，影视策划，市场营销<br />
                      等等<br />
                      如果你是:<br />
                      狂恋代码的超级极客；互联网行业的超级脑残粉；重度互联网依赖者；<br />
                      梦想用自己的右手，咳咳，不，双手让我们的行业变得更酷……<br />
                      恭喜你，和我们基因相符，赶快加入我们吧
                    </Col>
                  </Row>
                  <Col span={24} className="aboutTitle">
                    <span className="titleBack number3" style={{ height: "160px" }} />
                  </Col>
                  <Row className="location">
                    <Col span={24} className="localtionContent">
                      <p>
                        <i className="icon environment" />地址：深圳市宝安西乡桃花源科技创新园四分园4楼
                      </p>
                      <p>
                        <i className="icon phone" />服务热线：0755-29977605 
                      </p>
                      <p>
                        <i className="icon mail" />Email: sales@huato.com
                      </p>
                    </Col>
                    <Col span={24} style={{ marginTop: "15px" }}>
                      <Map style={{ height: "230px" }} center={{ lng: 113.897927, lat: 22.607464 }} zoom="20" enableScrollWheelZoom={true}>
                        <Marker position={{ lng: 113.897927, lat: 22.607464 }} />
                      </Map>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Col>
          </Row>;
    }
}

export default About;