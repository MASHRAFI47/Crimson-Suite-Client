import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit= (data) => {
        const {fullName, photoURL, email, password} = data;
        createUser(email, password)
        .then(() => {
            updateUserProfile(fullName, photoURL)
        })
      }

    return (
        <div>
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mx-auto border">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="full name" className="input input-bordered" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo URL" className="input input-bordered" {...register("photoURL", { required: true })} />
                        {errors.photoURL && <span className="text-red-600">This field is required</span>}
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register