import { useState } from "react";
import { useLoaderData } from "react-router-dom"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const UpdateDate = () => {

    const singleData = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());

    const updatedDate = {startDate};
    
    const url = `http://localhost:4000/roomBookings/${singleData._id}`;

    const {
        handleSubmit,
    } = useForm()
    const onSubmit = () => {
        fetch(url, {
            credentials: 'include',
            method: "PATCH",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(updatedDate)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    // useEffect(() => {
    //     const getData = async() => {
    //         await axios.patch(url, {
    //             updatedDate
    //         })
    //     }
    //     getData()
    // }, [url, updatedDate]);



    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-20 border">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <span className="font-semibold">Book Date: </span><DatePicker className="border border-gray-400 pl-2 rounded-md"
                        showIcon
                        selected={startDate}
                        minDate={new Date()}
                        // {...register("datePick", { required: true })}
                        onChange={(date) => setStartDate(date)}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 48 48"
                            >
                                <mask id="ipSApplication0">
                                    <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                                        <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                                        <path
                                            fill="#fff"
                                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                        ></path>
                                    </g>
                                </mask>
                                <path
                                    fill="currentColor"
                                    d="M0 0h48v48H0z"
                                    mask="url(#ipSApplication0)"
                                ></path>
                            </svg>
                        }
                    />
                    {/* {errors.datePick && <span>This field is required</span>} */}

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Date</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateDate