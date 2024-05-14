import Lottie from "lottie-react";
import errorLot from "../../../public/404error.json";

const ErrorPage = () => {
  return (
    <div><Lottie animationData={errorLot} loop={true} /></div>
  )
}

export default ErrorPage