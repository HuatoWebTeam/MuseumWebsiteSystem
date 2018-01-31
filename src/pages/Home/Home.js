import React, { Component } from 'react';

import { Carousel, Row, Col } from 'antd';
import { carouselImg, businessEqui, museumProject } from './homeData';
import BusinessEqui from './BusinessEqui';
import Case from './Case';
import HomeMap from '../Components/homeMap/map';
import ScrollAnchor from '../Components/ScrollAnchor/ScrollAnchor';
import './Home.less';


const CarouselComponent = ({data}) => {
  const items = data.map((item, idx) => (
    <div key={idx} 
      className='carouselContent' 
      style={{background: 'url(' + item.url + ') no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      {/* <img src={item.url} alt={idx} /> */}
      {/* <h3>{idx}</h3> */}
    </div>
  ));
  return (<Carousel autoplay >{items }</Carousel>)
};
        
  
// 谁选择了我们
const ChooseMuseum = ({data}) => {
    const MuseumItems = data.map((item, idx) => (
      <div key={idx} className="logoContent">
        <div >
          <img src={item.logo} alt={idx} />
        </div>
      </div>
    ));
    return (<Col span={24} className='chooseMuseum' >{ MuseumItems }</Col>)
};
class Home extends Component {
  state = {
    carouselHeight: "740px",
    isMounted: false,
    anchor: ["business", "classic", "chooseUs"],
    
  };
  componentWillMount() {
    console.log("加载");
    this._isMounted = true;
    this.setState({
      isMounted: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.setState({
      isMounted: false
    });
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  
  render() {
    const { anchor } = this.state;
    return <Row className="homecontainer" justify="center">
        <Col span={24}>
          {/* <CarouselComponent data={carouselImg}  /> */}
          {this.state.isMounted && <CarouselComponent data={carouselImg} />}
        </Col>
        <Col span={24} className="businessContent" style={{ textAlign: "center" }}>
          <div className="homeContent">
            <Col span={24} id="business">
              <div style={{ fontSize: "30px", color: "#333" }} className="homeTitle">
                业务范围
                <span style={{ display: "block", width: "54px", borderBottom: "4px solid red", margin: "0 auto", paddingTop: "15px", marginBottom: "60px" }} />
              </div>
              <BusinessEqui data={businessEqui} />
            </Col>

            <Col span={24} id="classic">
              <div style={{ fontSize: "30px", color: "#333", marginTop: '20px' }} className="homeTitle">
                精品案例
                <span style={{ display: "block", width: "54px", borderBottom: "4px solid red", margin: "0 auto", paddingTop: "15px", marginBottom: "60px" }} />
              </div>
              <Case />
            </Col>

            <Col span={24} id="chooseUs">
              <div style={{ fontSize: "30px", color: "#333",marginTop: '40px' }} className="homeTitle">
                谁选择了我们
                <span style={{ display: "block", width: "54px", borderBottom: "4px solid red", margin: "0 auto", paddingTop: "15px", marginBottom: "60px" }} />
              </div>
              <ChooseMuseum data={museumProject} />
            </Col>

            <Col span={24}  >
              <HomeMap/>
            </Col>
          </div>
          <ScrollAnchor anchor={anchor} />
        </Col>
      </Row>;
  }
}

export default Home;