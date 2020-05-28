import React from 'react';
import { Layout } from './SignIn.style';

const { Header, Content, Footer } = Layout;

class SignIn extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout>
          <Header className="site-layout-background" style={{ height:100,padding: 0,backgroundColor:"#FFF059" }}>
          </Header>
          <Content
                style={{
                padding:0,
                margin:0,
                backgroundColor:'#EDEDED'
                }}>
>
            {this.props.children}
          </Content>

          <Footer
            className="site-layout-background"
                style={{
                minHeight: 300,
                backgroundColor:'#EDEDED'
                }}>
          </Footer>
      </Layout>
    );
  }
}

export default SignIn;
