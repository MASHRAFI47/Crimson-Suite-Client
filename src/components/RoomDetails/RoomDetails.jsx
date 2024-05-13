import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const RoomDetails = () => {
    const singleRoom = useLoaderData();
    console.log(singleRoom)

    const roomImage = singleRoom.image


    const handleBookNow = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            imageUrl: roomImage,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Confirmed!",
                    text: "You have confirmed your booking",
                    icon: "success"
                });
            }
        });
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
                        <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
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