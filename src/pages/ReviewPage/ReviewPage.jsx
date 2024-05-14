import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const ReviewPage = () => {
    const reviewData = useLoaderData();
    const {user} = useContext(AuthContext)


    const roomTitleData = reviewData.roomTitle
   
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { username, rating, comment } = data;

        const newData = {rating, comment, roomTitleData, username}
        // fetch(`http://localhost:4000/rooms/${loadedReview._id}`, {
        //     method: "PUT",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify()
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        fetch('http://localhost:4000/reviews', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }
    return (
        <div>
            <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 border mx-auto">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl font-bold">Write a review</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly placeholder="username" className="input input-bordered font-normal" {...register("username")} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs font-normal" {...register("rating", { required: true })}>
                            {/* <option disabled selected>Rating</option> */}
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option selected>5</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comment</span>
                        </label>
                        <textarea className="textarea textarea-bordered font-normal" placeholder="write a comment..." {...register("comment", { required: true })}
                        >
                        </textarea>
                        {errors.comment && <span className="text-red-600">This field is required</span>}
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Review</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewPage