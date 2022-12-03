import React from 'react';
import './index.css';
import ProductsCard from './ProductsCard';
import { Carousel, Layout, Menu} from 'antd';
import {RightOutlined, LeftOutlined } from '@ant-design/icons';

const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const { Header, Content, Footer } = Layout;

const Home = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={new Array(2).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <Carousel effect="fade" arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>

        
      </div>
    </Content>
  </Layout>
);

export default Home;

