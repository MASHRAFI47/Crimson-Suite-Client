import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    console.log(rooms)

    useEffect(() => {
        fetch('http://localhost:4000/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, []);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms.map(room => <div key={room._id}>
                        <Link to={`/room-details/${room._id}`}>
                            <div className="card bg-base-100 shadow-xl relative">
                                <figure><img src={room.image} alt={room.title} /></figure>
                                <div className="badge badge-error font-semibold absolute top-4 left-4">{room.price}$</div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">{room.room_title}</h2>
                                    <p> <span className="font-semibold">Description:</span> {room.description.slice(0, 50).concat("...")}</p>
                                    <div className="flex justify-between">
                                        <p> <span className="font-semibold">Area: </span>{room.area}m<sup>2</sup></p>
                                        <p> <span className="font-semibold">Beds:</span> {room.available_beds} beds</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Rooms