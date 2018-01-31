import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';

// import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './RichText.less';
require("echarts/map/js/china.js");


class RichText extends Component {
  state = {
    option: null,
  };
  
  componentWillMount () {
    this.setState({
      option: this.getOption()
    })
  }
  componentDidMount () {
    console.log(this.echart_react)
    // this.echart_react.on('click', this.onEventHover)
    // this.echart_react.on('click', this.onEventHover)
  }
  onEventHover (option) {
    // console.log(option)
  }
  getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          console.log(params);
          if(params.name === '') {
            return '';
          }
          let tooltip = params.name + ':' + params.data.projects;
          return tooltip;
        }
      },
      series: [
        {
          name: '',
          type: 'map',
          mapType: 'china',
          roam: false,
          zoom: 1.2,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          markPoint:{
            symbol: 'circle',
            symbolSize: '15',
            symbolOffset:[0, -15],
            itemStyle: {
              color: '#c82432'
            },
            data: [
                { name: "北京", coord: [116.46, 39.92], projects: '中国国家博物馆' },
                { name: "上海", coord: [121.48, 31.22] },
                { name: "辽宁", coord: [123.38, 41.8] },
                { name: "福建", coord: [119.3, 26.08] },
                { name: "浙江", coord: [120.19, 30.26] },
                { name: "湖北", coord: [114.31, 30.52] },
                { name: "湖南", coord: [113, 28.21] },
                { name: "广东", coord: [113.23, 23.86] },
                { name: "贵州", coord: [106.71, 26.57] },
                { name: "陕西", coord: [108.95, 34.27] },
                { name: "青海", coord: [101.74, 36.56] },
                { name: "甘肃", coord: [103.73, 36.03] },
                { name: "广西", coord: [106.54, 29.59] },
                { name: "新疆", coord: [87.68, 43.77] },
                { name: "内蒙古", coord: [111.65, 40.82] },
                { name: "西藏", coord: [91.11, 29.97] },
                { name: "安徽", coord: [117.27, 31.86] },
                { name: "江苏", coord: [118.78, 32.04] },
            ]
          },
          data: [
            { 
              name: '北京',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '天津',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '河北',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '江苏',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '上海',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '江西',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '广西',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '陕西',
              itemStyle: {
                areaColor: '#ff9acc' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9acc'
                }
                
              }
            },
            { 
              name: '河南',
              itemStyle: {
                areaColor: '#ff6600' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff6600'
                }
                
              }
            },
            { 
              name: '浙江',
              itemStyle: {
                areaColor: '#ff6600' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff6600'
                }
                
              }
            },
            { 
              name: '宁夏',
              itemStyle: {
                areaColor: '#ff6600' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff6600'
                }
                
              }
            },
            { 
              name: '辽宁',
              itemStyle: {
                areaColor: '#ff9a4c' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9a4c'
                }
                
              }
            },
            { 
              name: '四川',
              itemStyle: {
                areaColor: '#ff9a4c' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ff9a4c'
                }
                
              }
            },
            { 
              name: '新疆',
              itemStyle: {
                areaColor: '#ffb14c' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ffb14c'
                }
                
              }
            },
            { 
              name: '内蒙古',
              itemStyle: {
                areaColor: '#c2e589' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#c2e589'
                }
                
              }
            },
            { 
              name: '福建',
              itemStyle: {
                areaColor: '#99ff99' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#99ff99'
                }
                
              }
            },
            { 
              name: '安徽',
              itemStyle: {
                areaColor: '#99ff99' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#99ff99'
                }
                
              }
            },
            { 
              name: '湖南',
              itemStyle: {
                areaColor: '#99ff99' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#99ff99'
                }
                
              }
            },
            { 
              name: '山西',
              itemStyle: {
                areaColor: '#99ff99' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#99ff99'
                }
                
              }
            },
            { 
              name: '甘肃',
              itemStyle: {
                areaColor: '#99ff99' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#99ff99'
                }
                
              }
            },
            { 
              name: '黑龙江',
              itemStyle: {
                areaColor: '#ebb0c4' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ebb0c4'
                }
                
              }
            },
            { 
              name: '吉林',
              itemStyle: {
                areaColor: '#8de7a7' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#8de7a7'
                }
                
              }
            },
            { 
              name: '青海',
              itemStyle: {
                areaColor: '#b6c1f7' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#b6c1f7'
                }
                
              }
            },
            { 
              name: '西藏',
              itemStyle: {
                areaColor: '#ceffcd' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ceffcd'
                }
                
              }
            },
            { 
              name: '云南',
              itemStyle: {
                areaColor: '#ceff4c' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#ceff4c'
                }
                
              }
            },
            { 
              name: '贵州',
              itemStyle: {
                areaColor: '#a4cc51' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#a4cc51'
                }
                
              }
            },
            { 
              name: '重庆',
              itemStyle: {
                areaColor: '#afb0aa' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#afb0aa'
                }
                
              }
            },
            { 
              name: '湖北',
              itemStyle: {
                areaColor: '#cbcb50' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#cbcb50'
                }
                
              }
            },
            { 
              name: '广东',
              itemStyle: {
                areaColor: '#9ec876' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#9ec876'
                }
                
              }
            },
            { 
              name: '海南',
              itemStyle: {
                areaColor: '#9ec876' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#9ec876'
                }
                
              }
            },
            { 
              name: '香港',
              itemStyle: {
                areaColor: '#9ec876' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#9ec876'
                }
                
              }
            },
            { 
              name: '澳门',
              itemStyle: {
                areaColor: '#9ec876' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#9ec876'
                }
                
              }
            },
            { 
              name: '台湾',
              itemStyle: {
                areaColor: '#9ec876' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#9ec876'
                }
                
              }
            },
            { 
              name: '山东',
              itemStyle: {
                areaColor: '#a4cc51' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#a4cc51'
                }
                
              }
            },
            { 
              name: '南海诸岛',
              itemStyle: {
                areaColor: '#9ec876' ,
              },
              emphasis: {
                itemStyle: {
                  areaColor: '#9ec876'
                }
                
              }
            },
          ]
        }
      ]
    }
  }
  render() {
    return (
      <Row style={{ marginTop: "100px" }} className='richTextContainer' >
        <Col span={24} style={{ textAlign: 'center' }} >
          <ReactEcharts 
            ref={(e) => { this.echart_react = e}}
            option={this.state.option}
            style={{ width: '1100px', height: '980px' }}
            onEvents={{'mouseover': this.onEventHover}}
            />
        </Col>
      </Row>
    );
  }
}

export default RichText;