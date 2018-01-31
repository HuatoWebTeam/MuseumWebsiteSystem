import React, { Component } from 'react';
import { Layout, Affix } from "antd";
import Routes from '../../Router';
import MenuItem from './MenuItem';
import { menus } from './menus'
import './App.less'
const { Header, Content, Footer } = Layout;


class App extends Component {
  state = {
    selectOpenKey: "",
    scrollTopBefore: 0,
    scrollY: 0,
    headerShow: false,
    textOpacity: '.8',
    backOpacity: 'rgba(0,0,0,.0)',
    _isMounted: true
  };
  componentDidMount () {
    console.log(this.props);
    this.setMenuOpenKey(this.props);
    // window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount () {
    console.log('卸载')
    this.setState = (satte, callback) => {
      return ;
    }
  }
  // 
  setMenuOpenKey = props => {
    let { pathname } = props.location;
    console.log(pathname === '/');
    if ( pathname === '/') {
      pathname = '/Home'
    }
    this.setState({ selectOpenKey: pathname });
    
    
  };
  openMenu = v => {
    console.log(v);
  };
  menuClick = (item, key, path) => {
    console.log(item);
    this.setState({ selectOpenKey: item.key });
    
  };
  onMouseEnter = () => {
      this.setState({
          textOpacity: '1.0',
          backOpacity: 'rgba(0,0,0,.3)'
      })
  }
  onMouseLeven = () => {
      this.setState({ 
          textOpacity: '.8',
          backOpacity: 'rgba(0,0,0,0)' 
        });
  }
  render() {
    // console.log(this.props);
    return <Layout className="main-container" style={{ minHeight: "100%" }}>
        <Content>
          <Affix className="headerContain">
            <div className="hoverHeader" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeven}>
              <Header ref="header" style={{ paddingTop: "15px", height: "80px", opacity: this.state.textOpacity, background: this.state.backOpacity }}>
                <div className="headerMenuContent">
                  <span className="headerLogo"></span>
                  <MenuItem menus={menus} selectedKeys={[this.state.selectOpenKey]} onClick={this.menuClick} onOpenChange={this.openMenu} />
                </div>
              </Header>
            </div>
          </Affix>
          <Routes />
        </Content>
        <Footer>
          CopyRight&copy;2008-2018,深圳市华图测控系统有限公司,
          粤ICP备08032186号
        </Footer>
      </Layout>;
  }
}

export default App;