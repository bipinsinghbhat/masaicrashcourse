import { useContext } from "react"
import { AuthContext } from "../content/AuthContext"
import Login from "./Login"

const PrivatesRoutes=({children})=>{
              const {token}=useContext(AuthContext)

              return (
                <>
                    {token? children: <Login/>}
                </>
              )
    }

    export default PrivatesRoutes