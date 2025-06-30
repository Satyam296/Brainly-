import Laptop from "../assets/laptop.jpg"
import {useNavigate} from "react-router-dom" ;

export const Analytics = () => {
  const navigate = useNavigate() ;
  const handler_start = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked", event)
        navigate("/signup") ; 
        };
  return (
    <div className="w-full bg-white py-16 px-4 flex">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/"/>
            <div className="flex flex-col justify-center">
                <p className="text-purple-600 font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-purple-600" onClick={handler_start}>Get Started</button>
            </div>
        </div>
    </div>
  )
}
