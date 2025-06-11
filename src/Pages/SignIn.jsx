import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const SignIn = () => {
   
    // const {} = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    //    const [errorMassage, setErrorMassage] = useState('')
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // setSuccess(false)
        // logInUser(email, password)
        //     .then(result => {
        //         setSuccess(true)
        //         navigate('/')
        //         Swal.fire({
        //             position: "center",
        //             icon: "success",
        //             title: "successfully log In",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     console.log(result.user)
        // })
        // .catch(error => {
        //     setErrorMassage(error.message)
        //     console.log(error)
        // })
        // const passwordValid = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        // if (passwordValid.test(password) === false) {
        //     setErrorMassage('password must be 6 characters, one uppercase and one lowercase')
        //     return;
        // }
    }

    const handleGoogleLogIn = () => {

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='font-bold text-2xl '>Sign In</h1>
                        <form onSubmit={handleSignIn}>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />


                                <button onClick={() => { setShowPassword(!showPassword) }}
                                    className='btn btn-xs absolute top-8 right-6'>{
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a> </div>
                            <div className="mt-2"><br></br> <span> You don't have an account. please <Link className='text-blue-500 link link-hover' to='/resister'>Resister</Link> </span></div>
                            <p> <button onClick={handleGoogleLogIn} className='text-blue-400 btn mt-3 w-full'><FcGoogle />Log In with Google</button></p>
                            <button className="btn btn-neutral mt-4">SignIn</button>
                        </form>
                        {/* {
                            success && <p className='text-green-400'> you are successfully Done!</p>

                        }

                        {
                            errorMassage && <p className='text-red-400'>{errorMassage}</p>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;