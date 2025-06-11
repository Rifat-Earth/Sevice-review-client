import React, { use } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';

const Resister = () => {
         
    const {createUser} = use(AuthContext);
    //    const [showPassword, setShowPassword] = useState(false)

        const handleResister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email')
        const password = formData.get('password')
        const photo = formData.get('photo')
        console.log(email,photo,password)
         createUser(email, password)
          .then(result => {
        const user = result.user;
        return updateProfile(user, {
            displayName: formData.get('name'),
            photoURL: photo
        });
    })
        // setSuccess(false)
        // setErrorMassage('')
        // const passwordValid = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        // if (passwordValid.test(password) === false) {
        //     setErrorMassage('password must be 6 characters, one uppercase and one lowercase')
        //     return;
        // }
    //     console.log(email, password, photo)
    //     createUser(email, password)
    //      .then(result => {
    //     const user = result.user;
    //     return updateProfile(user, {
    //         displayName: formData.get('name'),
    //         photoURL: photo
    //     });
    // })
            // .then(result => {
            //     setSuccess(true)
            //     navigate('/')
            //     console.log(result)
               
            // })
            // .catch(error => {
            //     setErrorMassage(error)
            //     console.log(error)
            // })

    }
    const handleGoogleLogIn = () => {
        // googleLogIn()
        //     .then(result => {
        //         console.log(result)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        }

    return (
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='ml-6 mt-5 font-bold text-2xl'>Please Resister</h2>
                    <div className="card-body">
                        <form onSubmit={handleResister} className="">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="name" />
                            <label className="label mt-2">Photo Url</label>
                            <input type="text" name="photo" className="input" placeholder="photo url" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input type='text' name='password' className="input" placeholder="Password" />

                                {/* <button onClick={() => { setShowPassword(!showPassword) }}
                                    className='btn btn-xs absolute top-2 right-6'>{
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button> */}
                            </div>
                            <div className="mt-2"><br></br> <span> already have an account. please <Link className='text-blue-500 link link-hover' to='/SignIn'>SignIn</Link> </span></div>
                            <p><button onClick={handleGoogleLogIn} className='text-blue-400 btn mt-3 w-full'><FcGoogle />Resister with Google</button></p>
                            <button className="btn btn-neutral mt-4 justify-center">Resister</button>
                        </form>
                        {/* {
                            errorMassage && <p className='text-red-400'>{errorMassage}</p>
                        }
                        {
                            success && <p className='text-green-400'>you are successfully Done!</p>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resister;