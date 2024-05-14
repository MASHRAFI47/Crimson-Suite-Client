import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import axios from "axios";

//images
import googleLogo from '../../assets/googleLogo.png'
import { Link } from "react-router-dom";

const Login = () => {
    const { user, signInUser, signInWithGoogle } = useContext(AuthContext)


    const userEmail = user?.email

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        const user = { email }
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                axios.post(`http://localhost:4000/jwt`, user, {
                    withCredentials: true
                })
                    .then(res => console.log(res.data))
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                axios.post(`http://localhost:4000/jwt`, userEmail, {
                    withCredentials: true
                })
                    .then(res => console.log(res.data))
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div>
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 border mx-auto">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-600">This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="form-control px-8 mb-8">
                    <button className="btn btn-primary" onClick={handleGoogleLogIn}><img src={googleLogo} className="w-4" alt="" />Google Login</button>
                </div>
                <p className="text-center mb-10">New User? <Link to={'/register'} className="font-semibold underline">Register Now</Link></p>
            </div>
        </div>
    )
}

export default Login