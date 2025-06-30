import {Input} from "../components/Input" ;
import {Button} from "../components/Button";
import {useRef} from "react" ; 
import axios from "axios" ; 
import {BACKEND_URL} from "../components/config" ; 
import {useNavigate} from "react-router-dom" ; 
import {useState} from "react" ;

export function SignUp() {
    const [res , setres] = useState(null) ; 
    const [col , set_col] = useState("bg-gray-50") ; 
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null) ;
    const navigate = useNavigate();
    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value ; 
        const response = await axios.post(BACKEND_URL + "/api/v1/signup", {
                username ,
                password 
        }) 
        if (response.data.message === "User signed up"){
            navigate("/signin"); 
        }
        else {
            set_col("bg-red-100 border-red-500"); 
            setres(response.data.message);
        }
        
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
        <div className="ml-2 text-2xl">
        <h1>Sign Up</h1>
        </div>
        <div className="flex justify-center pt10">
                <p className ="pt-2 text-red-400">{res}</p>
                </div>
                <div className="pt-10">
                <Input reference={usernameRef} classy={`bg-${col} focus:outline-none`} placeholder="Username" />
                <Input reference={passwordRef} classy="null" placeholder="Password" />
                </div>
                <div className="flex justify-center pt-4">
                <Button onClick={signup} loading={false} variant="primary" text="SignUp" fullWidth={true}/>
                </div>
        </div>
        
    </div>
}