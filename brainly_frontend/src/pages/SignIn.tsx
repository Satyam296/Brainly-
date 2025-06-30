import {Input} from "../components/Input" ;
import {Button} from "../components/Button";
import {useRef , useState} from "react" ; 
import axios from "axios" ; 
import {BACKEND_URL} from "../components/config" ;
import {useNavigate} from "react-router-dom" ; 



export function SignIn() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null) ;
    const navigate = useNavigate() ; 
    const [res , setres] = useState(null) ;
    const [col , setcol] = useState("bg-gray-50")
    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value ; 
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username ,
                password 
        }) 
        const jwt = response.data.token ; 
        console.log(response)
        if(!jwt || typeof jwt !=="string" || jwt.length <10) {
            console.log(response) 
            setres(response.data.message) ; 
            setcol("bg-red-100 border-red-500") ;
        }
        else{
        console.log(response)
        localStorage.setItem("token", jwt);
        navigate("/dashboard") ;
    }
    }
        return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
         <div className="bg-white rounded-xl border min-w-s48 p-8">
            <h1 className="ml-2 text-2xl">Sign In</h1>
                <div className="pt-10">
                <p className ="pt-2 text-red-400">{res}</p>
                <Input reference={usernameRef} classy={`bg-${col} focus:outline-none`} placeholder="Username"/>
                <Input reference={passwordRef} classy={`bg-${col} focus:outline-none`} placeholder="Password"/>
                </div>
                <div className="flex justify-center pt-4">

                </div>
                <Button onClick={signin} loading={false} variant="primary" text="SignIn" fullWidth={true}/>
        </div>
    </div>
}