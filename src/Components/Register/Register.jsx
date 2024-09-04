import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { registerUser,setUser } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [emailError, setEmailError] = useState('')
    // console.log(authInfo)
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        if (!/@gmail.com$/.test(email)) {
            setEmailError("Use Proper Email")
            return

        }
        if (password.length < 6) {
            setError("Password should be 6 or greater")
            return
        }
        if (password != confirmpassword) {
            setError("Not Matched")
            return
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!()_+=\-{}\[\]|;:'",.<>?/])/.test(password)) {
            setError("Please follow the command")
            return
        }
        setEmailError('')
        setError(" ")
        console.log(name, email, password, confirmpassword)
        registerUser(email, password)
        .then(result=>setUser(result.user))
        .catch(error=>setError(error.message))
    }
    return (
        <div className="w-[40%] mx-auto min-w-[500px] border-2 border-black p-3 rounded-2xl">
            <form onSubmit={handleRegister}>
                <div className='m-2'>
                    <p>Name</p>
                    <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='m-2'>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                {emailError && <small className='text-red-800'>{emailError}</small>}

                <div className='m-2'>
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='m-2'>
                    <p>Confirm Password</p>
                    <input name="confirmpassword" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                {
                    error && <small className='text-red-500'>{error}</small>
                }
                <div className='m-2'>
                    <button className="btn btn-accent text-white w-full max-w-xs">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;