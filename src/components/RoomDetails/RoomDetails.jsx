import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
// import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


//date
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import CouponCode from "../CouponCode/CouponCode";

const RoomDetails = () => {
    const [reviews, setReviews] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const singleRoom = useLoaderData();

    const [roomBookings, setRoomBookings] = useState([])

    let [discountPrice, setDiscountPrice] = useState()
    console.log(discountPrice)


    const filteredReview = reviews.filter(review => review.roomTitleData == singleRoom.room_title);


    const disableButton = roomBookings.find(book => book.roomTitle == singleRoom.room_title)

    const roomImage = singleRoom.image
    const userEmail = user?.email
    const roomTitle = singleRoom?.room_title
    const roomDescription = singleRoom?.roomDescription
    const area = singleRoom?.area
    const date = startDate;
    let price = singleRoom?.price
    console.log(price)
    const roomBooking = { userEmail, roomTitle, roomImage, roomDescription, area, date, price, discountPrice };


    const [coupon, setCoupon] = useState(false)
    console.log(coupon)
    const handleChange = e => {
        if (e.target.value === "Couple20") {
            toast.success("Coupon code applied")
            setCoupon(true)
            setDiscountPrice(singleRoom.price * 20 / 100);
        }
    }



    useEffect(() => {
        fetch('https://crimson-suite-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);



    useEffect(() => {
        fetch("https://crimson-suite-server.vercel.app/roomBookings")
            .then(res => res.json())
            .then(data => setRoomBookings(data))
    }, []);

    const handleConfirm = () => {
        toast.success("Room has been booked")

        fetch(`https://crimson-suite-server.vercel.app/roomBookings`, {
            credentials: 'include',
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
                        <h3 className="text-2xl font-semibold text-red-600"><span>Price:</span> {coupon ? singleRoom?.price - discountPrice : singleRoom?.price}$</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 mb-4">
                    <div className="col-span-3">
                        <img src={singleRoom?.image} className="rounded-lg w-full" alt="" />
                    </div>
                    <div className="ml-0 md:ml-5 space-y-2">
                        <h3 className="text-2xl"><span className="font-semibold">Special Offers:</span> {singleRoom?.specialOffers ? singleRoom?.specialOffers : "No Offer Available"}</h3>
                        {/* <h3 className="text-2xl"><span className="font-semibold">Reviews:</span> {filteredReview.map(rev => rev.comment)}</h3> */}
                        {/* <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button> */}
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}


                        {/* Apply Coupon */}
                        <CouponCode handleChange={handleChange} />


                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()} disabled={disableButton?.roomTitle}>Book Now</button>
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
                                        <p className="py-2"><span className="font-semibold">Price: </span>{coupon ? singleRoom?.price - discountPrice : singleRoom?.price}$</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Book Date: </span><DatePicker className="border border-gray-400 pl-2 rounded-md"
                                            showIcon
                                            selected={startDate}
                                            // dateFormat="MM/dd/yy"
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


                <h1 className="text-2xl mt-8"> <span className="font-semibold">Review:</span><p className="inline"> {filteredReview.length} Reviews</p></h1>
                <div className="chat chat-start inline mb-3">
                    {
                        filteredReview.map((rev) => <div className="w-full" key={rev._id}>
                            <div key={rev._id} className="chat-header">
                                {rev.username}
                                {/* <time className="text-xs opacity-50">2 hours ago</time> */}
                            </div>
                            <div className="chat-bubble">{rev.comment}</div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default RoomDetails