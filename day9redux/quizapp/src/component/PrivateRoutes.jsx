import { useSelector } from "react-redux"
import LoginPage from "./LoginPage"

const PrivateRoutes=({children})=>{
      const {isAuth}=useSelector(store=>store.authReducer)
      return (
        <>
         {isAuth? children : <LoginPage/>}
        </>
      )
}

export default PrivateRoutes