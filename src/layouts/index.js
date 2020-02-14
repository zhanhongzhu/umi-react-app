import { Component } from 'react';
import { Layout, Menu, Icon,Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import Link from 'umi/link';
const { Header, Footer, Sider, Content } = Layout;


// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
							<Link to="/index"> <Icon type="pie-chart" /><span>首页</span></Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>UI组件</span></span>}
                        >
                            <Menu.Item key="users"><Link to="/Helloworld">按钮</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/UI">UI组件</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/workPlace">导航菜单</Link></Menu.Item> 
							<Menu.Item key="4"><Link to="/Table">表单组件</Link></Menu.Item> 
                        </SubMenu>
						<SubMenu
						    key="sub2"
						    title={<span><Icon type="dashboard" /><span>UI组件</span></span>}
						>
						    <Menu.Item key="users"><Link to="/Helloworld">按钮</Link></Menu.Item>
						    <Menu.Item key="3"><Link to="/UI">UI组件</Link></Menu.Item>
						    <Menu.Item key="4"><Link to="/workPlace">导航菜单</Link></Menu.Item> 
							<Menu.Item key="4"><Link to="/Table">表单组件</Link></Menu.Item> 
						</SubMenu>
						<SubMenu
						    key="sub3"
						    title={<span><Icon type="dashboard" /><span>UI组件</span></span>}
						>
						    <Menu.Item key="users"><Link to="/Helloworld">按钮</Link></Menu.Item>
						    <Menu.Item key="3"><Link to="/UI">UI组件</Link></Menu.Item>
						    <Menu.Item key="4"><Link to="/workPlace">导航菜单</Link></Menu.Item> 
							<Menu.Item key="4"><Link to="/Table">表单组件</Link></Menu.Item> 
						</SubMenu>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background: '#001529', textAlign: 'center', padding: 0 }}>Header</Header>,
					<div className="breadcrumb">
						<Breadcrumb>
						  <Breadcrumb.Item>UI组件</Breadcrumb.Item>
						  <Breadcrumb.Item>
						    <a href="">按钮</a>
						  </Breadcrumb.Item>
						</Breadcrumb>
					</div>
                    <Content style={{ margin: '20px 16px 0' }}>
                        <div style={{ margin: 10, minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>,
                </Layout>
            </Layout>
        )
    }
}