import React, { Component } from 'react';
import FreeScrollBar from 'react-free-scrollbar';

import { Col, Radio } from 'antd';
const RadioButton  = Radio.Button;
const RadioGroup = Radio.Group;

class ProductFeatures extends Component {
  state = {
    data: null,
    checkButton: null, // 头部的单选按钮
    productButton: null, // 产品介绍的按钮
    productData: null,   // 产品介绍数据
    classicCaseData: null  // 精品案列数据
  };
  componentWillMount() {
    // console.log(this.props);
    const data = this.props.data[this.props.checkType];
    console.log(data);
    if (this.props.checkType !== "system08") {
      this.setState({
        data: data,
        checkButton: data.name[0].type,
        productButton:
          data.productIntroduction[data.name[0].type].title[0].type,
        productData: data.productIntroduction[data.name[0].type],
        classicCaseData: data.classicCase
      });
    } else {
      this.setState({
        data: data
      })
    }
  }

  radioChange(e) {
    //   console.log(e.target.value);
    const data = this.props.data[this.props.checkType];
    this.setState({
      checkButton: e.target.value,
      productData: data.productIntroduction[e.target.value],
      productButton: data.productIntroduction[e.target.value].title[0].type
    });
    console.log(this.state.productData);
    console.log(this.state.productButton)
  }
  productButtonChange (e) {
    // const data = this.props.data[this.props.checkType];
    this.setState({
      productButton: e.target.value
    });
    console.log(this.state)
  }
  render() {
    const { data, classicCaseData } = this.state;
    console.log(data);
    return this.props.checkType !== "system08" ? <Col span={24} className="productContainer">
        <Col span={24} className="productName">
          <RadioGroup defaultValue={this.state.checkButton} onChange={this.radioChange.bind(this)}>
            {data.name.map((item, idx) => (
              <RadioButton
                key={idx}
                value={item.type}
                style={{ width: 100 / data.name.length + "%" }}
              >
                {item.title}
              </RadioButton>
            ))}
          </RadioGroup>
        </Col>
        <Col span={24} className="productFeatures">
          <Col span={24} className="productTitle">
            <div className="text">产品技术特点</div>
            <span className="bottomBorder" />
          </Col>
          <Col span={24} className="content">
            {data.technical[this.state.checkButton].map((item, idx) => (
              <Col span={24} key={idx} className="entry">
                <Col span={1} className="cont">
                  {idx + 1 < 10 ? "0" + (idx + 1) : idx + 1}
                </Col>
                <Col span={23} className="text">
                  <Col span={24} className="title">
                    {item.title}
                  </Col>
                  <Col span={24} className="dateil">
                    {item.detail}
                  </Col>
                </Col>
              </Col>
            ))}
          </Col>
        </Col>
        <Col span={24} className="productFeatures">
          <Col span={24} className="productTitle">
            <div className="text">产品介绍</div>
            <span className="bottomBorder" />
          </Col>
          <Col span={24} className="content ">
            <RadioGroup defaultValue={this.state.productButton} value={this.state.productButton} className="introduce" onChange={this.productButtonChange.bind(this)}>
              {this.state.productData.title.map((item, idx) => (
                <RadioButton key={idx} value={item.type}>
                  {item.name}
                </RadioButton>
              ))}
            </RadioGroup>
          </Col>
          <Col span={24} className="equimentInfo">
            <Col span={this.state.productData.content[this.state.productButton].page ? 14 : 10} className="imgContent" style={{ height: "350px" }}>
              <img style={{ height: "276px", width: this.state.productData.content[this.state.productButton].page ? "560px" : "294px" }} src={this.state.productData.content[this.state.productButton].back} alt="back" />
            </Col>
            <Col span={!this.state.productData.content[this.state.productButton].page ? 14 : 10} className="textContent">
              <Col span={24} className="textContentTitle">
                {this.state.productData.content[this.state.productButton].name}
              </Col>
              <Col className="textContentDetail">
                {
                  this.state.productData.content[this.state.productButton]
                    .text
                }
              </Col>
              <Col span={24} className="specifications">
                <FreeScrollBar className="my-vertical-track" style={{ width: "100%", height: "150px" }}>
                  {this.state.productData.content[this.state.productButton].specifications.map(
                    (item, idx) => (
                      <p
                        key={idx}
                        className="spacifiText"
                        style={{
                          whiteSpace: this.state.productData.content[
                            this.state.productButton
                          ].page
                            ? "normal"
                            : "pre"
                        }}
                      >
                        {item}
                      </p>
                    )
                  )}
                </FreeScrollBar>
              </Col>
            </Col>
          </Col>
        </Col>
        {/* <Col span={24} className="productFeatures">
          <Col span={24} className="productTitle">
            <div className="text">工程案例</div>
            <span className="bottomBorder" />
          </Col>
          {classicCaseData && <Col span={24} className="classicCase">
              <Col span={24} className="text">
                {classicCaseData.text.map((item, idx) => (
                  <p key={idx}> {item} </p>
                ))}
              </Col>
              <Col spabn={24} className="caseImg">
                {classicCaseData.caseImg.map((item, idx) => (
                  <img src={item} alt="case" />
                ))}
              </Col>
            </Col>}
        </Col> */}
      </Col> : <Col span={24} className="productContainer">
        <Col span={24} style={{ background: "#efedef" }}>
          <div className="mainContent">
            <Col span={24} className="productContainer">
              <Col span={24} className="productTitle">
                <div className="text">智慧博物馆</div>
                <span className="bottomBorder" />
              </Col>
              <Col span={24} className="content">
                <Col span={24} className="texts">
                  {" "}
                  {data.wisdomMuseum.text}{" "}
                </Col>
                <Col span={24} className="backImg" style={{ height: "340px", position: "relative" }}>
                  <img src={data.wisdomMuseum.img} style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, margin: "auto" }} />
                </Col>
              </Col>
            </Col>
          </div>
        </Col>
        <Col span={24} className="productContainer">
          <div className="mainContent">
            <Col span={24} className="productContainer">
              <Col span={24} className="productTitle">
                <div className="text">微信公众号</div>
                <span className="bottomBorder" />
              </Col>
              <Col span={24} className="content">
                <Col span={24} className="text">
                  {data.wechatPublic.text}
                </Col>
                <Col span={24} style={{ marginTop: "45px" }}>
                  {data.wechatPublic.img.map((item, idx) => (
                    <img
                      src={item}
                      key={idx}
                      alt={"wechat" + idx}
                      style={{
                        float:
                          idx === 0 ? "left" : idx === 2 ? "right" : "none"
                      }}
                    />
                  ))}
                </Col>
              </Col>
              <Col span={24} className="productContainer">
                <Col span={24} className="productTitle">
                  <div className="text">微信导览</div>
                  <span className="bottomBorder" />
                </Col>
                <Col span={24} className="content">
                  <Col span={24} className="content">
                    <Col span={24} className="text">
                      {data.wechatAtour.text}
                    </Col>
                    <Col span={24} className="img" style={{ marginTop: "70px" }}>
                      {data.wechatAtour.img.map((item, idx) => (
                        <Col
                          span={8}
                          key={idx}
                          style={{ textAlign: "center" }}
                        >
                          <img src={item} alt={idx} />
                        </Col>
                      ))}
                    </Col>
                  </Col>
                </Col>
              </Col>
              <Col span={24} className="productContainer">
                <Col span={24} className="productTitle">
                  <div className="text">网络虚拟博物馆</div>
                  <span className="bottomBorder" />
                </Col>
                <Col span={24} className="content">
                  <Col className="text">{data.virtualMuseum.text}</Col>
                  <Col className="detailsText" style={{marginTop: '20px'}} >
                    {data.virtualMuseum.details.map(
                      (item, idx) => (
                        <p key={idx} >{item}</p>
                      )
                    )}
                  </Col>
                  <Col span={24} className='img' style={{textAlign: 'left'}} >
                    {
                      data.virtualMuseum.img.map((item, idx) => (
                        <img style={{margin: '20px 0'}} key={idx} src={item} alt={idx} />
                      ))
                    }
                  </Col>
                </Col>
              </Col>
            </Col>
          </div>
        </Col>
      </Col>;
  }
}

export default ProductFeatures;