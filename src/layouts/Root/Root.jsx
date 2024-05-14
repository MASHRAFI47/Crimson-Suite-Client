import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../components/Footer/Footer";


const Root = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <ToastContainer />
        <Footer />
    </div>
  )
}

export default Root