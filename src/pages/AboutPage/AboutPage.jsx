//lottie
import Lottie from "lottie-react";
import about from "../../../public/about.json";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>About | Crimson Suite</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <Lottie animationData={about} loop={true} />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold mb-3">About Us</h1>
                    <p>Welcome to our cutting-edge Hotel Booking Management System, your ultimate tool for seamless travel planning and accommodation management. Designed to streamline the booking process for both guests and hoteliers, our system offers an intuitive interface and robust features tailored to meet the diverse needs of modern travelers and hospitality professionals.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage