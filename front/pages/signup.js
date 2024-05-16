import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import { Input, Form, Checkbox } from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
 color : red;    
`;
const Signup = () => {
    
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
// const [id, setId] = useState('');
// const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    // const [nickname, setNickname] = useState('');
    // const onChangeNickname = useCallback((e) => {
    //     setNickname(e.target.value);
    // }, []);
    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);
    const onSubmit = useCallback(() => {
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);

    return (
        <>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor='user-id'>아이디</label>
                    <br />
                    <Input name='user-id' value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor='user-nick'>닉네임</label>
                    <br />
                    <Input name='user-nick' value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <br />
                    <Input name='user-password' value={password} required onChange={onChangePassword} />
                </div>
                <div>
                <label htmlFor='user-password-check'>비밀번호 체크</label>
                <br />
                <Input 
                name='user-password-check' 
                type = "password"
                value={passwordCheck} 
                required 
                onChange={onChangePasswordCheck} 
                />
                {passwordError &&<ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name='user-term' checked = {term} onChange = {onChangeTerm}제로초 말을 잘 들을 것></Checkbox>
                    {termError &&<ErrorMessage style={{color : red}}>약관에 동의해야함</ErrorMessage>}
                </div>
                <div style={{margin : 10}}>
                    <button type='primary' htmlType='submit'>가입하기</button>
                </div>
            </Form>
        </>
    );
}

export default Signup;