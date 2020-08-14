import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    
<div style={{height: '700px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Simon Vargas</Link>} scroll>
            <Navigation className="header-links">
                <Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '20px' }} to="/resume">Resume</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '20px' }} to="/aboutme">About Me</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '20px' }} to="/projects">Projects</Link>
                <Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '20px' }} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Simon Vargas</Link>}>
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
        
    </Layout>
</div>

  );
}

export default App;
