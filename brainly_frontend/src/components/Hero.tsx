import { TypeAnimation } from "react-type-animation" ;
import {useNavigate} from "react-router-dom" ;

const Hero =() =>{
    const navigate = useNavigate() ;
    const handler_start = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked", event)
        navigate("/signup") ; 
        };
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-purple-600 font-bold p-2">ALL LINKS SAVED</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Link hi Link</h1>
                <div className="flex items-center justify-center">
                    <p className="md-text-5xl sm:text-4xl text-xl py-4">
                        Fast , Flexible Financing for 
                    </p>
                    <TypeAnimation className="md-text-5xl sm:text-4xl text-xl pl-2 text-gray-500" sequence={["BTB", 1000 ,
                        "BTC" , 1000 ,
                        "SAAS" , 1000
                    ]} speed={40} 
                    repeat={Infinity} />
                </div>
                <p className="pt-2 md:text-2xl text-xl font-bold text-gray-500">
                    Monitor your data analytics to increase revenue for BTB , BTC & SAAS platform
                </p>   
                <button className="bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black" onClick={handler_start}>Get Started</button> 
            </div> 
        </div>
    )
}

export default Hero 