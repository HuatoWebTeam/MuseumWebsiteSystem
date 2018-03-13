import React, { Component } from "react";
import { Row, Col } from "antd";
import ReactEcharts from "echarts-for-react";


require("echarts/map/js/china.js");

class HomeMap extends Component {
  state = {
    option: null
  };

  componentWillMount() {
    this.setState({
      option: this.getOption()
    });
  }
  componentDidMount() {
    // console.log(this.echart_react);
    // this.echart_react.on('click', this.onEventHover)
    // this.echart_react.on('click', this.onEventHover)
  }
  onEventHover(option) {
    // console.log(option)
  }
  getOption = () => {
    return {
      tooltip: {
        trigger: "item",
        formatter: params => {
          console.log(params);
          if (!params.data.projects) {
            return "";
          }
          let tooltip = '';
          for(let i = 0; i < params.data.projects.length; i++) {
              tooltip = tooltip + '<span style="display: block;padding: 0 10px;" >' + params.data.projects[i] +'</span>';
              if(params.data.url) {
                  tooltip  = tooltip + '<img style="width: 100px;height: 100px" src="'+ params.data.url +'" />'
              }
          };
          
          return tooltip;
        },
        position: (point, params) => {
          // console.log(point, params);
          let top = 0;
          if(params.data.projects) {
            top = (16 * params.data.projects.length + 20) / 2;
          }
          point[0] = point[0] + 10;
          point[1] = point[1] - top;
          // console.log(point)
          return point;
        }
      },
      series: [
        {
          name: "",
          type: "map",
          mapType: "china",
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
          markPoint: {
            symbol: "circle",
            symbolSize: "8",
            symbolOffset: [0, -15],
            itemStyle: {
              color: "#c82432"
            },
            data: [
              { name: "北京", coord: [116.46, 39.92], projects: ['故宫博物院', "中国国家博物馆",'中国园林博物馆', '国家图书馆'],  },
              { name: "辽宁", coord: [123.38, 41.8], projects: ['锦州市博物馆'] },
              { name: '四川', coord: [104.06, 30.67], projects: ['绵阳博物馆','崇州市博物馆']},
              { name: "福建", coord: [119.3, 26.08], projects: ['福建博物院', '莆田市博物馆'] },
              { name: "浙江", coord: [120.19, 30.26], projects: ['瑞安博物馆', '宁波博物馆'] },
              // { name: '山东', coord: [116.65, 34.96], projects: ['齐国故城遗址博物馆']},
              { name: "湖南", coord: [113, 28.21], projects: ['湖南省博物馆'] },
              { name: "广东", coord: [113.23, 23.86], projects: ['深圳博物馆','南越王宫博物馆', '广东海上丝绸之路博物馆', '孙中山故居纪念馆', '广东美术馆'] },
              { name: "贵州", coord: [106.71, 26.57], projects: ['贵州省博物馆','遵义博物馆', '黔东南州民族博物馆','毕节市博物馆', '遵义会议博物馆', '遵义市博物馆'] },
              { name: "青海", coord: [101.74, 36.56], projects: ['青海省博物馆'] },
              { name: "甘肃", coord: [103.73, 36.03], projects: ['平凉市博物馆', '天水市博物馆','敦煌市博物馆', '崇信县博物馆', '镇原县博物馆', '平凉市崆峒区博物馆', '华亭县博物馆', '庄浪县博物馆', '陇西县博物馆', '金昌市博物馆', '灵台县博物馆','庆城县博物馆', '天水市麦积区博物馆', '华池县博物馆', '宁县博物馆', '环县博物馆'] },
              { name: "新疆", coord: [87.68, 43.77], projects: ['吐鲁番博物馆', '且末县博物馆', '伊犁州博物馆','阿克苏博物馆', '喀什地区博物馆','阿克苏地区博物馆','巴音郭楞蒙古自治州博物馆','博尔塔拉蒙古自治州博物馆'] },
              { name: "内蒙古", coord: [111.65, 40.82], projects: ['内蒙古博物院','鄂尔多斯博物馆', '乌兰察布市博物馆'] },
              { name: "安徽", coord: [117.27, 31.86], projects: ['安徽博物院', '寿县博物馆', '安徽古生物化石博物馆', '安庆市博物馆', '滁州博物馆'] },
              { name: "江苏", coord: [118.78, 32.04], projects: ['南京博物院','苏州博物馆','徐州博物馆','常州博物馆', '镇江博物馆', '新沂市博物馆', '常州市金坛区博物馆', '姜堰区博物馆', '南京市高淳区博物馆','南京市江宁区博物馆', '仪征市博物馆', '涟水博物馆', '盐城市盐都区博物馆'] },
              { name: '西藏', coord: [91.11, 29.97], projects: ['西藏拉萨市大昭寺博物馆']},
              { name: '广西', coord: [108.44, 22.79], projects: ['桂林博物馆']},
              { name: '江西', coord: [115.89, 28.68], projects: ['婺源县博物馆']},
              { name: '湖北', coord: [114.31, 30.52], projects: ['辛亥革命博物馆']},
              { name: '上海', coord: [121.48, 31.22], projects: ['上海市历史博物馆', '上海交响乐博物馆']}
            ]
          },
          data: [
            {
              name: "北京",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "天津",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "河北",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "江苏",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "上海",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "江西",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "广西",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "陕西",
              itemStyle: {
                areaColor: "#ff9acc"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9acc"
                }
              }
            },
            {
              name: "河南",
              itemStyle: {
                areaColor: "#ff6600"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff6600"
                }
              }
            },
            {
              name: "浙江",
              itemStyle: {
                areaColor: "#ff6600"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff6600"
                }
              }
            },
            {
              name: "宁夏",
              itemStyle: {
                areaColor: "#ff6600"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff6600"
                }
              }
            },
            {
              name: "辽宁",
              itemStyle: {
                areaColor: "#ff9a4c"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9a4c"
                }
              }
            },
            {
              name: "四川",
              itemStyle: {
                areaColor: "#ff9a4c"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ff9a4c"
                }
              }
            },
            {
              name: "新疆",
              itemStyle: {
                areaColor: "#ffb14c"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ffb14c"
                }
              }
            },
            {
              name: "内蒙古",
              itemStyle: {
                areaColor: "#c2e589"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#c2e589"
                }
              }
            },
            {
              name: "福建",
              itemStyle: {
                areaColor: "#99ff99"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#99ff99"
                }
              }
            },
            {
              name: "安徽",
              itemStyle: {
                areaColor: "#99ff99"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#99ff99"
                }
              }
            },
            {
              name: "湖南",
              itemStyle: {
                areaColor: "#99ff99"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#99ff99"
                }
              }
            },
            {
              name: "山西",
              itemStyle: {
                areaColor: "#99ff99"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#99ff99"
                }
              }
            },
            {
              name: "甘肃",
              itemStyle: {
                areaColor: "#99ff99"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#99ff99"
                }
              }
            },
            {
              name: "黑龙江",
              itemStyle: {
                areaColor: "#ebb0c4"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ebb0c4"
                }
              }
            },
            {
              name: "吉林",
              itemStyle: {
                areaColor: "#8de7a7"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#8de7a7"
                }
              }
            },
            {
              name: "青海",
              itemStyle: {
                areaColor: "#b6c1f7"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#b6c1f7"
                }
              }
            },
            {
              name: "西藏",
              itemStyle: {
                areaColor: "#ceffcd"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ceffcd"
                }
              }
            },
            {
              name: "云南",
              itemStyle: {
                areaColor: "#ceff4c"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#ceff4c"
                }
              }
            },
            {
              name: "贵州",
              itemStyle: {
                areaColor: "#a4cc51"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#a4cc51"
                }
              }
            },
            {
              name: "重庆",
              itemStyle: {
                areaColor: "#afb0aa"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#afb0aa"
                }
              }
            },
            {
              name: "湖北",
              itemStyle: {
                areaColor: "#cbcb50"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#cbcb50"
                }
              }
            },
            {
              name: "广东",
              itemStyle: {
                areaColor: "#9ec876"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#9ec876"
                }
              }
            },
            {
              name: "海南",
              itemStyle: {
                areaColor: "#9ec876"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#9ec876"
                }
              }
            },
            {
              name: "香港",
              itemStyle: {
                areaColor: "#9ec876"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#9ec876"
                }
              }
            },
            {
              name: "澳门",
              itemStyle: {
                areaColor: "#9ec876"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#9ec876"
                }
              }
            },
            {
              name: "台湾",
              itemStyle: {
                areaColor: "#9ec876"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#9ec876"
                }
              }
            },
            {
              name: "山东",
              itemStyle: {
                areaColor: "#a4cc51"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#a4cc51"
                }
              }
            },
            {
              name: "南海诸岛",
              itemStyle: {
                areaColor: "#9ec876"
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#9ec876"
                }
              }
            }
          ]
        }
      ]
    };
  };
  render() {
    return (
      <Row style={{ marginTop: "100px" }} className="richTextContainer">
        <Col span={24} style={{ textAlign: "center" }}>
          <ReactEcharts
            ref={e => {
              this.echart_react = e;
            }}
            option={ this.state.option }
            style={{ width: "1100px", height: "980px" }}
            onEvents={{ mouseover: this.onEventHover }}
          />
        </Col>
      </Row>
    );
  }
}

export default HomeMap;
