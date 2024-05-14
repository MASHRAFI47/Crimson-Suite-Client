import { Map, Marker } from "pigeon-maps"


const MapLocation = () => {
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div data-aos="fade-right">
                    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                        <Marker width={50} anchor={[50.879, 4.6997]} />
                    </Map>
                </div>
                <div data-aos="fade-in">
                    <h1 className="text-3xl font-bold mb-3">About Us</h1>
                    <p>Welcome to our cutting-edge Hotel Booking Management System, your ultimate tool for seamless travel planning and accommodation management. Designed to streamline the booking process for both guests and hoteliers, our system offers an intuitive interface and robust features tailored to meet the diverse needs of modern travelers and hospitality professionals.</p>
                </div>
            </div>
        </section>
    )
}

export default MapLocation