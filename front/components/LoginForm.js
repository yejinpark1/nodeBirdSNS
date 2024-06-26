import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import ProTypes from 'prop-types';
import useInput from '../hooks/useInput';

// styled.div하게 되면 div태그(div컴포넌트)로 바꿔줌. 안에는 CSS적듯이 CSS형식으로 작성할 것.
const ButtonWrapper = styled.div`
    margin-top : 10px;
`;
const FormWrapper = styled(Form)`
    padding : 10px;
`;

const LoginForm = ({setIsLoggedIn}) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor = 'user-id'>아이디</label>
                <br />
                <Input name='user-id' value={id} onChange ={onChangeId} required />
            </div>
            <div>
                <label htmlFor = 'user-password'>비밀번호</label>
                <br />
                <Input name='user-password' 
                        value={password} 
                        onChange ={onChangePassword} 
                        required 
                />
            </div>
            <ButtonWrapper>
                <Button type = "primary" htmlType = 'submit' loading = {false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );

}


export default LoginForm;