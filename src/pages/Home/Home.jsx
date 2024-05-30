import { useEffect, useRef } from "react"
import Banner from "./Banner/Banner"
import MapLocation from "./MapLocation/MapLocation"
import Newsletter from "./Newsletter/Newsletter"
import Rooms from "../Rooms/Rooms"
import Reviews from "./Reviews/Reviews"
import { Helmet } from "react-helmet-async"

const Home = () => {
  const btnRef = useRef(null)
  // const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    btnRef.current.click()
  }, []);


  return (
    <div>
      <Helmet>
        <title>Home | Crimson Suite</title>
      </Helmet>
      <button className="btn hidden" ref={btnRef} onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <img src="https://i.ibb.co/n0KhvxX/hotel6.jpg" alt="" />
          <h3 className="font-semibold text-lg text-center mt-3 text-red-600">Apply Couple20 for 20% discount</h3>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>


      <Banner />
      <MapLocation />
      <Newsletter />
      <Rooms />
      <Reviews />
    </div>
  )
}

export default Home