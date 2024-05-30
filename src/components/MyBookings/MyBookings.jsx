import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";
// import DatePicker from "react-datepicker";

const MyBookings = () => {
    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    // const [rooms, setRooms] = useState([]);


    // const [roomBookings, setRoomBookings] = useState([]);
    // const [startDate, setStartDate] = useState(new Date());


    const url = `https://crimson-suite-server.vercel.app/myBookings/${user?.email}`;

    useEffect(() => {
        // fetch(url, {
        //     credentials: "include"
        // })
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        axiosSecure.get(url)
            .then(res => setBookings(res.data))

    }, [url, axiosSecure]);



    // useEffect(() => {
    //     fetch('https://crimson-suite-server.vercel.app/rooms')
    //         .then(res => res.json())
    //         .then(data => setRooms(data))
    // }, []);


    // useEffect(() => {
    //     fetch('https://crimson-suite-server.vercel.app/roomBookings')
    //         .then(res => res.json())
    //         .then(data => setRoomBookings(data))
    // }, []);

    // const bookedDate = moment('2024-05-14')
    // const currentDate = moment();
    // const oneDayBefore = bookedDate.clone().subtract(1, 'days');
    // console.log(oneDayBefore)

    // if (currentDate.isBefore(oneDayBefore)) {
    //     console.log('User can cancel the booking.'); // User can cancel
    // } else {
    //     console.log('Cancellation period has expired.'); // Cancellation period has expired
    // }

    const recentTime = moment().format('L')
    console.log(recentTime)
    const bool1 = moment(recentTime)
        .isBefore('2010-4-12'); // true
    console.log(bool1);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Cancelled!",
                    text: "Your booking has been cancelled",
                    icon: "success"
                });

                // const findRoom = bookings.find(booking => booking._id == id);
                // const bookedDate = moment(new Date(findRoom?.date).toLocaleDateString())
                // console.log(bookedDate)
                // const currentDate = moment().format('DD/MM/YYYY');
                // const currentDate = moment();
                // console.log(currentDate)

                // const oneDayBefore = bookedDate.clone().subtract(1, 'days');
                // if(currentDate.isBefore(oneDayBefore)) {
                //     console.log('user can cancel')
                // } else {
                //     console.log('cant')
                // }


                // const mainDate = bookedDate.clone().subtract(1, 'days');
                // if(currentDate.isBefore(mainDate)) {
                //     console.log('users can cancel')
                // } else {
                //     console.log('cant cancel')
                // }
                // console.log(mainDate)

                fetch(`https://crimson-suite-server.vercel.app/roomBookings/${id}`, {
                    credentials: 'include',
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                const remaining = bookings.filter(book => book._id !== id);
                setBookings(remaining)
            }
        });
    }


    const handleUpdateDate = (id) => {
        console.log(id)
    }




    return (
        <div className="container mx-auto">
            <Helmet>
                <title>My Bookings | Crimson Suite</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Area</th>
                            <th>Booking</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map(booking => <tr key={booking?._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking?.roomImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking?.roomTitle}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {
                                        booking?.discountPrice ? "$" + (booking?.price - booking?.discountPrice) : "$" + (booking?.price)
                                    }
                                </td>
                                <td>
                                    {booking?.area ? booking?.area : 0}m<sup>2</sup>
                                </td>
                                <td>{new Date(booking?.date).toLocaleDateString()}</td>
                                <th className="flex gap-3">
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <Link to={`/review/${booking._id}`}>
                                        <button className="btn btn-sm btn-success">Review</button>
                                    </Link>

                                    <Link to={`/update-date/${booking._id}`}>
                                        <button className="btn btn-primary btn-sm" onClick={() => handleUpdateDate(booking._id)}>Update Date</button>
                                    </Link>
                                    <button className="btn btn-error btn-sm" onClick={() => handleDelete(booking._id)}>Cancel</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBookings