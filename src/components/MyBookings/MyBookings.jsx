import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    console.log(bookings)
    useEffect(() => {
        fetch(`http://localhost:4000/roomBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user]);

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
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`http://localhost:4000/roomBookings/${id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => console.log(data))

                const remaining = bookings.filter(book => book._id !== id);
                setBookings(remaining)
            }
        });
    }

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Booking</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <tr key={booking._id}>
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
                                    {booking?.area ? booking?.area : 0}m<sup>2</sup>
                                </td>
                                <td>{new Date(booking?.startDate).toLocaleDateString()}</td>
                                <th className="flex gap-3">
                                    <button className="btn btn-primary btn-xs">Review</button>
                                    <button className="btn btn-error btn-xs" onClick={() => handleDelete(booking._id)}>Cancel</button>
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