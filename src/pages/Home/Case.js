import React, { Component } from 'react';
import { Row, Col, Radio, Button } from "antd";
import { caseData } from './homeData';
import FreeScrollBar from "react-free-scrollbar";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const RadioComponent = ({data, ...props}) => {
    // const items = props;
    const radioItems = data.map((item, idx) => 
        <RadioButton key={idx} value={item.id}>
            {item.museumName}
        </RadioButton>
    );
    return (
        <RadioGroup  defaultValue={data[0].id} {...props}>{ radioItems }</RadioGroup>
    )
}

const MuseumDetails = ({data, showMuseumId}) => {
    const MuseumItems = data.map((item, idx) => showMuseumId === item.id && <Col span={24 // console.log(showMuseumId)
            } key={idx} className="museumCaseContent">
            <Col span={12} className="museumCaseImg">
              <img src={item.museumImgUrl} alt={idx} />
            </Col>
            <Col span={12} className="museumDetails">
              <Col span={24} className="text">
                <FreeScrollBar className="my-vertical-track" style={{ width: "100%", height: "100%" }}>
                  {item.details.map((item, idx) => (
                    <span key={idx} style={{ display: "block" }}>
                      {item}
                    </span>
                  ))}
                </FreeScrollBar>
              </Col>
              {/* <Col span={24} style={{ textAlign: "left", height: "0" }}>
                <Button className="caseButton">查看详情</Button>
              </Col> */}
              <Col span={24}>
                <Col span={12} style={{ textAlign: "left" }}>
                  <img style={{ width: "220px", border: "1px solid #ccc" }} src={item.detailsImg[0]} alt="case" />
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <img style={{ width: "220px", border: "1px solid #ccc" }} src={item.detailsImg[1]} alt="case" />
                </Col>
              </Col>
            </Col>
          </Col>);
    return (<Row type='flex' justify='space-around' align='bottom' >{ MuseumItems }</Row>)
}

class HomeCase extends Component {
  state = {
      showMuseum: caseData[0].id
  };
  radioChange (ev) {
      console.log(ev.target.value)
      this.setState({
          showMuseum: ev.target.value
      })
  }
  render() {
    return (
      <Col span={24} className="caseRadio">
        <RadioComponent data={caseData} onChange={this.radioChange.bind(this)} />
        <MuseumDetails data={caseData} showMuseumId={this.state.showMuseum} />
      </Col>
    );
  }
}

export default HomeCase;