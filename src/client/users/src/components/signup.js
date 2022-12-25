import React, {useState} from 'react';
import { Form , Input  , Button} from 'antd';
import { Paper, Typography } from "@material-ui/core";
import {useHistory} from 'react-router-dom'

const Signup = () =>{
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    let navigate = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

    
        const raw = JSON.stringify({
            "email": id,
            "name" : nick,
            "pwd": password
        });
    
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:8000/user-service/users", requestOptions)
            .then(response => response.text())
            .then(result => {
               
                console.log("result : "+result)
                navigate.push("/signin")
            })
            .catch(error => console.log('error', error));
    };

    // Coustom Hook 이전
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    return (
        <Paper style={{ width: "50%" ,  margin: "0 auto"}}>
        <Typography variant='h5'>Sign Up</Typography>

        <form onSubmit={onSubmit} style={{padding:10}}>
             
            <div>
                <label htmlFor="userId">이메일</label><br/>
                <Input name="userId" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="name">이름</label><br/>
                <Input name="name" value={nick} required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="pwd">비밀번호</label><br/>
                <Input name="pwd" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호체크</label><br/>
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div style={{marginTop:10}}>
                <Button type="primary" htmlType="submit" >가입하기</Button>
            </div>
        </form>
        </Paper>
    );
};

export default Signup;