import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser,googleLogin,setUser,facebookLogin} = useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        loginUser(email,password)
        .then(result=>setUser(result.user))
    }
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>setUser(result.user))
    }
    const handleFacebookLogin=()=>{
        facebookLogin()
        .then(result=>setUser(result.user))
    }
    return (
        <div className="w-[40%] mx-auto min-w-[500px] border-2 border-black p-3 rounded-2xl">
        <form onSubmit={handleLogin}>
            
            <div className='m-2'>
                <p>Email</p>
                <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='m-2'>
                <p>Password</p>
                <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
           
            <div className='m-2'>
                <button className="btn btn-accent text-white w-full max-w-xs">Accept</button>
            </div>
        </form>
        <button onClick={handleGoogleLogin} className='btn btn-secondary'>Google Login</button>
        <button onClick={handleFacebookLogin} className='btn btn-secondary'>Facebook Login</button>
        
    </div>
    );
};

export default Login;