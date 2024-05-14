import axios from "axios"
import { useContext, useEffect } from "react"
import { AuthContext } from "../providers/AuthProvider/AuthProvider"
import { useNavigate } from "react-router-dom"

const axiosSecure = axios.create({
    baseURL: 'https://crimson-suite-server.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error => {
            console.log('error track', error.response)
            if(error.response.status === 401 || error.response.status === 403) {
                logOut()
                .then(() => {
                    navigate('/login')
                })
                .catch(error => console.log(error.message))
            }
        })
    }, [logOut, navigate]);

  return axiosSecure
}

export default useAxiosSecure