import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { planData } from './PlanData';
import { hasClass, addClass, getUserAgent } from "../../assets/js/myQuery";
import classNames from 'classnames';
import './Plan.less';


class PlanIntrduce extends Component {
  state = {
    height: 740,
    isIE: null
  };
  componentDidMount() {
    this._isMounted = true;
    console.log(getUserAgent())
    let isIE = getUserAgent();
    this.setState({
      isIE: isIE
    })
    window.addEventListener("scroll", this.pagesScroll.bind(this));
  }
  componentWillUnmount() {
    console.log('xiazai');
    this._isMounted = false;
    window.removeEventListener('scroll', this.pagesScroll.bind(this));
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  pagesScroll () {
    if(this._isMounted) {
      // console.log('scroll');
      // console.log(this.refs);
      // let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let windowSrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      // const refs = Object.keys(this.refs);
      for (let i = 0; i < planData.length; i++) {
        // console.log(this.refs["plan"+[i]])
        // console.log(this.refs["planImg" + [i]]);
        const eleTop = this.state.height * i + 460;
        if (eleTop + 100 > windowSrollTop) {
          this.state.isIE < 10 ? (this.refs['planImg' + i].style.backgroundPosition = 'center center') : this.refs["planImg" + i].style.animation = "animatedBackground 0.8s forwards";
          for (let item of this.refs["plan" + i].childNodes) {
            if (!hasClass(item, "showText")) {
              addClass(item, "showText");
            } else {
              return false;
            }
          }
          // if(!hasClass(this.refs['planImg' + i], 'showAnimation')){
          //   addClass(this.refs["planImg" + i], "showAnimation");
          // } else {
          //   return false;
          // }
          break;
        }
      }
    }
  }
  render() {
    return <Row className="plan-container">
        <Col span={24} className="titleImg" />
        {planData.map((item, idx) => (
          <Col
            key={idx}
            span={24}
            style={{
              textAlign: "center",
              background: idx % 2 === 0 ? "#fff" : "#f1f1f1"
            }}
          >
            <div className="plan-main">
              <Row
                type="flex"
                justify="space-around"
                align="middle"
                className={
                  idx % 2 === 0 ? "content imgRight" : "content imgLeft"
                }
                style={{ height: this.state.height + "px" }}
              >
                <Col span={idx % 2 === 0 ? 10 : 14} className="textContent">
                  {idx % 2 === 0 ? (
                    <div className="imgContent text" ref={"plan" + idx}>
                      <div
                        className={classNames({
                          title: true,
                          showText: idx === 0
                        })}
                      >
                        {item.title}
                      </div>
                      <p
                        className={classNames({
                          showText: idx === 0
                        })}
                      >
                        {item.text}
                      </p>
                    </div>
                  ) : (
                    <div className="imgContent">
                      <div
                        className={classNames({
                          img: true
                        })}
                        style={{
                          background: "url(" + item.url + ") no-repeat",
                          backgroundPosition:
                            idx === 0 ? "center center" : "center 700px",
                          height: "350px"
                        }}
                        ref={"planImg" + idx}
                      />
                    </div>
                  )}
                </Col>
                <Col span={idx % 2 === 0 ? 14 : 10} className="textContent">
                  {idx % 2 === 0 ? (
                    <div
                      className={classNames({
                        imgContent: true,
                        img: true
                      })}
                    >
                      <div
                        style={{
                          background: "url(" + item.url + ") no-repeat",
                          backgroundPosition:
                            idx === 0 ? "center center" : "center 700px",
                          height: "350px"
                        }}
                        ref={"planImg" + idx}
                      />
                    </div>
                  ) : (
                    <div className="imgContent text" ref={"plan" + idx}>
                      <div
                        className={classNames({
                          title: true,
                          showText: idx === 0
                        })}
                        style={{
                          paddingLeft: idx === 1 ? "30px" : "0"
                        }}
                      >
                        {item.title}
                      </div>
                      <p
                        className={classNames({
                          showText: idx === 0
                        })}
                        style={{
                          paddingLeft: idx === 1 ? "30px" : "0"
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>;
  }
}

export default PlanIntrduce;