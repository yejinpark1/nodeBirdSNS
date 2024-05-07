import React, {useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Menu mode = "horizontal">
                <Menu.Item>
                    <Link href = "/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href = "/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href = "/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {/* gutter는 간격 
            xs = 모바일, sm = 태블릿, md = 작은 데스크탑*/}
            <Row >
                <Col xs={24} md = {6}>  
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md = {12}>  
                    {children}
                </Col>
                <Col xs={24} md = {6}>  
                    <a href='http://naver.com' target='_blank' rel='noreferrer nonpener'>Made by Yejin</a>
                 </Col>
           </Row>
       </div>
);
    
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired
};

export default AppLayout;