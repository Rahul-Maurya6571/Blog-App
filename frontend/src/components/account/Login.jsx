import React, { useState } from 'react'
import {Box,Button,TextField,styled,Typography} from '@mui/material'
import {API} from '../../server/api.js'

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};
const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
const [account, setAccount] = useState('login')
const [signup, setSignup] = useState(signupInitialValues)
const [login, setLogin] = useState(loginInitialValues)
const toggleSignUp = ()=>{
        account === 'signup' ? setAccount('login') : setAccount('signup')
    }
const onInputChange = (e) =>{
// console.log(e)
setSignup({...signup,[e.target.name]:e.target.value})
    }

const signupUser =async() =>{
    let response = await API.userSignup(signup)
}


  return (
    <Component>
<Box>
<Image src={imageURL} alt="" />
{
    account === 'login' ?
    <Wrapper>
<TextField variant="standard" label="Enter Username"/>
<TextField variant="standard" label="Enter Password"/>
<LoginButton variant="contained">Login</LoginButton>
<Text style={{textAlign:'center'}}>OR</Text>
<SignupButton onClick={() => toggleSignUp()}>Create an Account</SignupButton>
</Wrapper>
:<Wrapper>
<TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter Name"/>
<TextField variant="standard" onChange={(e)=>onInputChange(e)}  name='username' label="Enter Username"/>
<TextField variant="standard" onChange={(e)=>onInputChange(e)}  name='password' label="Enter Password"/>
<SignupButton onClick={()=>signupUser()}>Signup</SignupButton>
<Text style={{textAlign:'center'}}>OR</Text>
<LoginButton variant='contained' onClick={() => toggleSignUp()}>Already have an Account</LoginButton>
</Wrapper>
}
</Box>
    </Component>
  )
}

export default Login
