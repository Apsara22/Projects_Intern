import { useNavigate, useSearchParams} from "react-router-dom"
import "../css/verify.css"
import { useContext, useEffect } from "react";
import { StoreContext } from "../../contex/StoreContext";
import axios from "axios";
export default function Verify(){
    const [searchParms, setSearchParms] = useSearchParams();
    const success = searchParms.get("success")
    const orderId = searchParms.get("orderId")
    const {url} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async () =>{
        const response = await axios.post(url+ "/api/order/verify",{success,orderId})
        if(response.data.success){
            navigate("/myorders")
        }
        else{
            navigate("/")
        }
        
    }
    useEffect(() =>{
        verifyPayment();

    },[])

    return(
        <div className="verify">
            <div className="spinner">

            </div>

        </div>
    )
}