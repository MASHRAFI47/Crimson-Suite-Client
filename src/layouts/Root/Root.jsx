import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <ToastContainer />
    </div>
  )
}

export default Root