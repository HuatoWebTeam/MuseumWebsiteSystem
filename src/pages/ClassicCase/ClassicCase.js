import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { caseData } from './CaseData';
import { hasClass, addClass } from '../../assets/js/myQuery';
import "./Case.less";


class ClassicCase extends Component {
    state = { 
        backHeight: 740
    }

    componentDidMount () {
      this._isMounted = true;
      window.addEventListener('scroll', this.pageScroll.bind(this));
      this.pageScroll();
    }

    componentWillUnmount () {
      console.log('unmounted');
      this._isMounted = false;
      window.removeEventListener('scroll', this.pageScroll.bind(this));
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    pageScroll (e) {
      if(this._isMounted) {
        // console.log(e)
        // console.log(this.refs);
        // const length = caseData.length;
        // console.log(Object.keys(this.refs))
        // let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let windowSrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // console.log(windowHeight);
        // console.log(windowSrollTop);
        const refs = Object.keys(this.refs);
        for (let i = 0; i < refs.length; i++) {
          // console.log(refs[i]);
          // console.log(idx)
          // console.log(this.refs[refs[i]]);
          const ele = this.refs[refs[i]];
          // let eleTop = ele.offsetTop;
          let eleTop = this.state.backHeight * i;
          // console.log(eleTop)  //
          // 250 是一个图片容器的1/3
          if (eleTop + 250 > windowSrollTop) {
            // console.log(ele.childNodes);
            for (let item of ele.childNodes) {
              // console.log(item);
              // item.style.opacity = 1;
              // item.style.transform = "translate(0, -30px)";
              // item.classList.add( "setTranssition");
              // console.log(item.className);
              if (!hasClass(item, "setTranssition")) {
                // item.className += " setTranssition";
                addClass(item, "setTranssition");
              } else {
                return false;
              }
            }
            // ele.firstChild.style.opacity = 1;
            // ele.firstChild.style.transform = 'translate(0, -30px)'
            break;
          }
          // console.log(eval("this.textRef" + item));
        }
      }
    }
    render () {
        return <Row className="classicCaseContainer">
            {caseData.map((item, idx) => (
              <Col
                span={24}
                key={idx}
                className="caseContent"
                style={{
                  height: this.state.backHeight + "px",
                  background: "url(" + item.url + ")  no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              >
                <Col
                  spam="24"
                  style={{
                    height: "100%",
                    background: "rgba(0,0,0,.6)"
                  }}
                >
                  <div className="mainContent">
                    <div className="textContent" ref={"textRef" + idx}>
                      <div
                        className="museumName"
                      >
                        { item.museumName }
                      </div>
                      <div
                        className="date"
                      >
                        { item.caseDate }
                      </div>
                      <div
                        className="details"
                      >
                        { item.details }
                      </div>
                    </div>
                  </div>
                </Col>
              </Col>
            ))}
          </Row>;
    }
}

export default ClassicCase;