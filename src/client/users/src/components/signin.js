import React, {useState} from 'react';
import { Form , Input , Checkbox , Button} from 'antd';
import { Paper, Typography } from "@material-ui/core";
import {useHistory} from 'react-router-dom'

const Signin = () =>{
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    let navigate = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

    
        const raw = JSON.stringify({
            "email": id,
            "password": password
        });
    
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:8000/user-service/login", requestOptions)
            .then(response => {
                console.log(response.body)
                const access_token = response.headers.get('access_token')
                console.log(access_token)
                localStorage.setItem("access_token", access_token)
                navigate.push("/users")
                
            }
                )
            .catch(error => console.log('error', error));
    };

    // Coustom Hook 이전
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };


    return (
        <Paper style={{ width: "50%" ,  margin: "0 auto"}}>
        <Typography variant='h5'>Sign In</Typography>

        <form onSubmit={onSubmit} style={{padding:10}}>
            <div>
                <label htmlFor="email">이메일</label><br/>
                <Input name="email" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label><br/>
                <Input name="password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div style={{marginTop:10}}>
                <Button type="primary" htmlType="submit" >로그인</Button>
            </div>
        </form>
        </Paper>
    );
};

export default Signin;