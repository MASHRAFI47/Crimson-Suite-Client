import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom"
// import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


//date
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const RoomDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const singleRoom = useLoaderData();
    console.log(singleRoom)

    const roomImage = singleRoom.image
    const userEmail = user?.email
    const roomTitle = singleRoom?.room_title
    const roomDescription = singleRoom?.roomDescription
    const area = singleRoom?.area
    const roomBooking = { userEmail, roomTitle, roomImage, roomDescription, area, startDate }


    // const handleBookNow = () => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         imageUrl: roomImage,
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, confirm it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Swal.fire({
    //                 title: "Confirmed!",
    //                 text: "You have confirmed your booking",
    //                 icon: "success"
    //             });

    //             fetch(`http://localhost:4000/roomBookings`, {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(roomBooking)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => console.log(data))

    //         }
    //     });
    // }

    const handleConfirm = () => {
       toast.success("Room has been booked")

        fetch(`http://localhost:4000/roomBookings`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(roomBooking)
        })
    }


    return (
        <div>
            <div className="container mx-auto mb-10">
                <div className="">
                    <div className="space-y-2 my-5">
                        <h1 className="text-3xl"><span className="font-bold">Room:</span> {singleRoom?.room_title}</h1>
                        <h1 className="text-2xl"><span className="font-semibold">Size:</span> {singleRoom?.area}m<sup>2</sup></h1>
                        <h3 className="text-2xl font-semibold text-red-600"><span>Price:</span> {singleRoom?.price}$</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 mb-4">
                    <div className="col-span-3">
                        <img src={singleRoom?.image} className="rounded-lg w-full" alt="" />
                    </div>
                    <div className="ml-0 md:ml-5 space-y-2">
                        <h3 className="text-2xl"><span className="font-semibold">Special Offers:</span> {singleRoom?.specialOffers}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Reviews:</span> {singleRoom?.reviews ? "No reviews yet" : singleRoom?.reviews}</h3>
                        {/* <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button> */}
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Book Now</button>
                        <dialog id="my_modal_3" className="modal z-[-100]">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</button>
                                </form>
                                <img src={singleRoom?.image} className="rounded-xl p-2" alt="" />
                                <div className="grid grid-cols-2">
                                    <div>
                                        <h3 className="font-bold text-lg">{singleRoom?.room_title}</h3>
                                        <p className="py-2"><span className="font-semibold">Price: </span>{singleRoom.price}$</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Book Date: </span><DatePicker className="border border-gray-400 pl-2 rounded-md"
                                            showIcon
                                            selected={startDate}
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
                                    </div>
                                </div>
                                <p className="py-2"><span className="font-semibold">Description: </span>{singleRoom.description}$</p>
                                <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
                            </div>
                        </dialog>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-xl"> <span className="font-semibold">Description:</span> {singleRoom?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails