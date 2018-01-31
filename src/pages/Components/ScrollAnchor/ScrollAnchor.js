import React, { Component } from 'react';
import { Col, Anchor } from 'antd';
import { getUserAgent } from '../../../assets/js/myQuery';
import './ScrollAnthor.less';
const { Link } = Anchor;


class ScrollAnchor extends Component {
  state = {
    anchorArr: [],
    checkAnchor: null,
    anchorShow: true,
    isIE: null,
    windowWidth: null
  };
  componentWillMount() {
    this._isMounted = true;
    let isIE = getUserAgent();
    
    
    console.log(isIE);
    this.setState({
      anchor: this.props.anchor,
      checkAnchor: this.props.anchor[0],
      isIE: isIE,
    });
  }
  componentDidMount() {
    let windowWidth = document.body.offsetWidth || document.documentElement.offsetWidth;
    console.log(windowWidth);
    this.setState({ windowWidth: windowWidth });
    window.addEventListener("scroll", this.pageScroll.bind(this));
    window.addEventListener('resize', this.windowResize.bind(this))
  }
  windowResize () {
    let windowWidth = document.body.offsetWidth || document.documentElement.offsetWidth;
    console.log(windowWidth)
    this.setState({
      windowWidth: windowWidth
    })
    
  }
  componentWillUnmount () {
      this._isMounted = false;
  }
  pageScroll() {
    const { anchor } = this.state;
    if (this._isMounted && this.state.anchorShow) {
      // console.log(this.refs);
      // console.log(this.refs.anthor0);
      let number;
      const isCheckAnchor = this.refs.anthor.state.activeLink;
      // const { anchor } = this.state;
      // console.log(isCheckAnchor);
      for (let i = 0; i < anchor.length; i++) {
        if (isCheckAnchor === "#" + anchor[i]) {
          number = i;
          break;
        } else {
          if (isCheckAnchor === "") {
            number = -1;
            this.setState({
              checkAnchor: anchor[0]
            });
          }
        }
      }
      // console.log(number);
      // console.log(anchor[number + 1]);
      if (anchor[number + 1]) {
        this.setState({
          checkAnchor: anchor[number + 1],
          anchorShow: true
        });
      } else {
        // console.log("yincang");
        // console.log(this.state);
        this.setState({
          anchorShow: false
        });
      }
      // console.log(this.state.checkAnchor);
    } else if (this._isMounted && !this.state.anchorShow) {
      // console.log(document.getElementById(anchor[0]).offsetTop);
      /**
       * 最后一个锚点距顶部的距离
       */
      let windowHeight = document.getElementById(anchor[anchor.length - 1])
        .offsetTop;
      /**
       * 滚动条距顶部的距离
       */
      let windowSrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      /**
       * 窗口的高度
       */
      let documentHeight = document.documentElement.clientHeight || document.body.clientHeight;
      // console.log(windowSrollTop);
      // console.log(windowHeight);
      // console.log(documentHeight);
      // console.log(windowHeight + documentHeight);
      if (windowHeight + documentHeight - 160  >= windowSrollTop) {
        // console.log("setTrue");
        this.setState({ anchorShow: true });
      } else {
        this.setState({ anchorShow: false });
      }
    } else {
        return false;
    }
  }
  render() {
      const { anchor, anchorShow, checkAnchor } = this.state;
    return (
      <Col span={24}>
        <div
          className="myAnthor"
          style={{ background: "none", left: this.state.windowWidth / 2 - 30 + 'px' }}
        >
          <Anchor showInkInFixed={false} ref="anthor" className="hiddenAnchor">
            {anchor.map((item, idx) => (
              <Link key={idx} href={"#" + item} title="we" />
            ))}
          </Anchor>
          {anchorShow && (
            <Anchor className="showAnchor">
              <Link href={"#" + checkAnchor} title="" />
            </Anchor>
          )}
        </div>
      </Col>
    );
  }
}

export default ScrollAnchor;